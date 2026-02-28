var a = 10;
let b = 20;
const c = 30;
function greet() { console.log("hello") }
var sayHi = function() { console.log("hi") }
```

### What JS does in Phase 1:
```
FOUND "var a"       →  create slot a  →  store undefined
FOUND "let b"       →  create slot b  →  store <uninitialized> 🔒
FOUND "const c"     →  create slot c  →  store <uninitialized> 🔒
FOUND "function"    →  create slot greet → store FULL function ✅
FOUND "var sayHi"   →  create slot sayHi → store undefined
```

**Key insight — JS only reads DECLARATIONS in Phase 1, not values.**
```
var a = 10
    ↑    ↑
    │    └── value → Phase 2 handles this
    └─────── declaration → Phase 1 handles this
```

---

## Phase 2 — Execution — The Deep Part

Now JS runs **line by line** and does the actual work.
```
fills values into memory slots
unlocks let and const
calls functions
does calculations
runs console.log

function greet() { console.log("first") }
function greet() { console.log("second") }
greet();
```

**Trace Phase 1:**
```
found greet → store first function
found greet → overwrite with second function
Memory = { greet: function(){ console.log("second") } }
```

**Trace Phase 2:**
```
greet() → prints "second"
var x = 1;

function outer() {
  console.log(x);  // what prints here?
  var x = 2;
}

outer();
```

**Most people say: `1`**

**Wrong. It prints: `undefined`**

Why? Because `outer()` gets its **own Phase 1**:
```
outer() Phase 1:
  found "var x" → memory: { x: undefined }

outer() Phase 2:
  line 1 → console.log(x)
           looks in local memory first
           finds x = undefined
           prints undefined

  line 2 → x = 2
```

Local `x` shadows global `x`. Phase 1 inside `outer` created its own `x` slot. This is hoisting + shadowing + 2 phases all at once.

---
//

## The Execution Context — The Container

Every time JS runs code, it wraps everything in an **Execution Context**:
```
┌──────────────────────────────────────┐
│          EXECUTION CONTEXT           │
│                                      │
│  ┌────────────────────────────────┐  │
│  │      MEMORY COMPONENT          │  │
│  │                                │  │
│  │  all variables and functions   │  │
│  │  stored here during Phase 1    │  │
│  └────────────────────────────────┘  │
│                                      │
│  ┌────────────────────────────────┐  │
│  │      CODE COMPONENT            │  │
│  │                                │  │
│  │  runs line by line             │  │
│  │  during Phase 2                │  │
│  └────────────────────────────────┘  │
│                                      │
└──────────────────────────────────────┘
```

Two types exist:
```
// Global Execution Context  → created once when file loads
// Function Execution Context → created every time a function is called

//The One Deep Truth

//Every confusion in JavaScript — undefined, TDZ errors, wrong values, hoisting surprises — is just Phase 1 and Phase 2 playing out.
//  Master these 2 phases and you master JavaScript's core engine.
var x = 10;

function test() {
  console.log(x);  // what prints?
  let x = 20;
}

test();
```

**Trace GEC Phase 1:**
```
Memory = { x: undefined, test: full function }
```

**Trace GEC Phase 2:**
```
x = 10
test() called → new context
```

**Trace test() FEC Phase 1:**
```
found "let x" → memory: { x: <uninitialized> 🔒 }
```

Local `x` exists and is locked. Global `x = 10` is completely shadowed.

**Trace test() FEC Phase 2:**
```
console.log(x)
  checks local memory → x = 🔒 TDZ
  ❌ ReferenceError
```

Global `x` is never checked because local `x` was found in Phase 1.

---

## The Complete Mental Process

Every time you see JavaScript code — run this in your head:
```
1. Find current scope
       ↓
2. Run Phase 1 mentally
   what is in memory right now?
       ↓
3. Run Phase 2 line by line
   what value does each variable have?
       ↓
4. Function called?
   stop current context
   create new context
   repeat from step 1
   come back after return
```

---

## Hoisting Summary Through 2 Phases
```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PHASE 1 stores:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
var        →  undefined
let        →  🔒 TDZ
const      →  🔒 TDZ
function   →  full function ✅
var fn=fn  →  undefined

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PHASE 2 does:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
fills real values
unlocks let and const
calls functions
runs all code

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ERRORS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
undefined     →  var used before value assigned
ReferenceError →  TDZ or variable never declared
TypeError      →  called undefined as function
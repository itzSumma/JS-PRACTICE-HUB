// player details in array
const players = [
  { name: "Sakib", team: "Rangpu" },
  { name: "Tamim", team: "Dhaka" },
  { name: "Mushfiq", team: "Khulna" },
  { name: "Sabbir", team: "Sylhet" },
  { name: "Mashrafe", team: "Chittagong" },
];

// get the container
const playerContainer = document.getElementById("player-container");
const selectedList = document.getElementById("selected-list");
const count = document.getElementById("count");

const selectedPlayers = [];

// run loop and create div dynamically
players.forEach((player) => {
  const div = document.createElement("div");

  div.innerHTML = `
    <div class="border border-amber-200 p-5 w-fit space-y-3 shadow-2xl">
      <h2 class="font-bold text-4xl">${player.name}</h2>
      <p class="text-lg font-semibold text-gray-950">Team: ${player.team}</p>
      <button class="add-btn text-black border px-3 py-2 rounded-lg hover:bg-green-600 bg-amber-500">Add</button>
    </div>
  `;

  playerContainer.appendChild(div);

  const btn = div.querySelector(".add-btn");

  btn.addEventListener("click", function () {

    if (selectedPlayers.includes(player.name)) {
      alert("Player Already Selected");
      return;
    }

    if (selectedPlayers.length >= 5) {
      alert("Maximum 5 players can selected");
      return;
    }

    selectedPlayers.push(player.name);

    updateList();
  });
});

// function to update list
function updateList() {

  selectedList.innerHTML = "";

  selectedPlayers.forEach((pName, index) => {

    const li = document.createElement("li");

    li.innerHTML = `
      ${pName} gap-5

      <button class="remove-btn bg-red-500 text-white px-2 ml-3 rounded">Remove</button>
    `;

    li.classList.add("text-lg", "font-medium", "mt-2");

    const removeBtn = li.querySelector(".remove-btn");

    removeBtn.addEventListener("click", function () {

      selectedPlayers.splice(index, 1);

      updateList();

    });

    selectedList.appendChild(li);

  });

  count.innerText = selectedPlayers.length;
}
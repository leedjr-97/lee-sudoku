let newBoardDifficulty = "Very Easy";

function openModal() {
  const backdrop = document.getElementById("backdrop");
  backdrop.style.display = "flex";
  const popupcontainer = document.getElementById("popup-container");
  popupcontainer.style.display = "flex";
  const modal = document.getElementById("modal");
  modal.style.display = "block";
}
function closeModal() {
  const backdrop = document.getElementById("backdrop");
  backdrop.style.display = "none";
  const popupcontainer = document.getElementById("popup-container");
  popupcontainer.style.display = "none";
  const modal = document.getElementById("modal");
  modal.style.display = "none";
  newBoardDifficulty = "Very Easy";
}

function startNewPuzzle() {
  setUpBoard(newBoardDifficulty.slice());
  closeModal();
}
function setDifficulty() {
  newBoardDifficulty = document.getElementById("difficult-select").value;
}
const NewPuzzleContent = `<div>
    <div class="modal-header">
      <h2>New Sudoku Puzzle</h2>

      <button class="button-style" onclick="closeNewPuzzleModal()">
        <span class="close">&times;</span>
      </button>
    </div>

    <div class="modal-body">
    <p>If you start a new game, you will lose your progress on the current puzzle.</p>

      <p>Choose a difficulty:</p>
      <select id="difficult-select" onchange="setDifficulty()">
        <option>Very Easy</option>
        <option>Easy</option>
        <option>Medium</option>
        <option>Hard</option>
        <option>Very Hard</option>
      </select>
    </div>

    <div class="modal-footer">
      <button class="button-style" style="margin-right: 8px" onclick="closeModal()">
        Go Back
      </button>
      <button class="button-style" onclick="startNewPuzzle()">Start</button>
    </div>
  </div>`;

function setModalContent(type) {
  if (type === "empty") {
    document.getElementById("modal-content").innerHTML = "";
  } else if (type === "newPuzzle") {
    document.getElementById("modal-content").innerHTML = NewPuzzleContent;
    return;
  }
}

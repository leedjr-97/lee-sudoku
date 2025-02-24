function openModal() {
  const backdrop = document.getElementById("backdrop");
  backdrop.style.display = "flex";
  const popupcontainer = document.getElementById("popup-container");
  popupcontainer.style.display = "flex";
  const modalContainer = document.getElementById("modal-container");
  // modalContainer.style.display = "flex";
  const modal = document.getElementById("modal");
  modal.style.display = "block";
}
function closeModal() {
  console.log("closeModal");
  const backdrop = document.getElementById("backdrop");
  backdrop.style.display = "none";
  const modalContainer = document.getElementById("modal-container");
  // modalContainer.style.display = "none";
  const popupcontainer = document.getElementById("popup-container");
  popupcontainer.style.display = "none";
  const modal = document.getElementById("modal");
  modal.style.display = "none";
}

const NewPuzzleContent = `<div>
    <div class="modal-header">
      <h2>New Puzzle</h2>

      <button class="button-style" onclick="closeNewPuzzleModal()">
        <span class="close">&times;</span>
      </button>
    </div>

    <div class="modal-body">
      <p>Choose a difficulty:</p>
      <select>
        <option>Very Easy</option>
        <option>Easy</option>
        <option>Medium</option>
        <option>Hard</option>
        <option>Very Hard</option>
      </select>
    </div>

    <div class="modal-footer">
      <button class="button-style" style="margin-right: 8px">
        Go Back
      </button>
      <button class="button-style">Start</button>
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

function stuffity() {
  console.log("stuffity");
}

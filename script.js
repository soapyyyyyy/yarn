let yarn = [];
let selectedColor = "#ff0000";

const yarnStrip = document.getElementById("yarnStrip");
const fabricGrid = document.getElementById("fabricGrid");

document.getElementById("colorPicker").addEventListener("input", e => {
  selectedColor = e.target.value;
});

document.getElementById("makeYarn").addEventListener("click", makeYarnStrip);
document.getElementById("makeGrid").addEventListener("click", makeFabricGrid);

function makeYarnStrip() {
  const repeatLength = Number(document.getElementById("repeatLength").value);

  yarn = Array(repeatLength).fill("#ffffff");
  yarnStrip.innerHTML = "";

  yarnStrip.style.gridTemplateColumns = `repeat(${repeatLength}, 20px)`;

  for (let i = 0; i < repeatLength; i++) {
    const cell = document.createElement("div");
    cell.className = "yarn-cell";
    cell.style.backgroundColor = yarn[i];

    cell.addEventListener("click", () => {
      yarn[i] = selectedColor;
      cell.style.backgroundColor = selectedColor;
    });

    yarnStrip.appendChild(cell);
  }
}

function makeFabricGrid() {
  if (yarn.length === 0) {
    alert("Make the yarn strip first.");
    return;
  }

  const cmPerStitch = Number(document.getElementById("cmPerStitch").value);
  const stitchesPerRow = Number(document.getElementById("stitchesPerRow").value);
  const rows = Number(document.getElementById("rows").value);

  fabricGrid.innerHTML = "";
  fabricGrid.style.gridTemplateColumns = `repeat(${stitchesPerRow}, 18px)`;

  const totalStitches = stitchesPerRow * rows;

  for (let n = 0; n < totalStitches; n++) {
    const yarnCm = n * cmPerStitch;
    const repeatIndex = Math.floor(yarnCm) % yarn.length;
    const color = yarn[repeatIndex];

    const stitch = document.createElement("div");
    stitch.className = "stitch";
    stitch.style.backgroundColor = color;

    fabricGrid.appendChild(stitch);
  }
}

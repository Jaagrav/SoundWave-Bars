let mic;
function setup() {
  mic = new p5.AudioIn();
  mic.start();
  frameRate(30);
}
function draw() {
  document.querySelectorAll(".container div").forEach((e) => {
    e.style.height = mic.getLevel() * 500 * Math.random() * 10 + "px";
  });
}

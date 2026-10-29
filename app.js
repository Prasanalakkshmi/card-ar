const scene = document.querySelector("a-scene");
const start = document.getElementById("start");
const status = document.getElementById("status");
const intro = document.getElementById("intro");
const contact = document.getElementById("contact");
const close = document.getElementById("close");
const contactPanel = document.getElementById("contact-panel");

start.addEventListener("click", async () => {
  status.textContent = "Starting camera…";
  try {
    await scene.systems["mindar-image-system"].start();
    intro.classList.add("hidden");
    status.textContent = "Camera started.";
  } catch (err) {
    status.textContent = "Could not start camera. Open this page over HTTPS and allow camera access.";
    console.error(err);
  }
});

scene.addEventListener("targetFound", () => {
  status.textContent = "Card recognized!";
});
scene.addEventListener("targetLost", () => {
  status.textContent = "Point the camera at the card again.";
});

// A-Frame entity click support is inconsistent across phones; this also offers a reliable
// screen-level tap to open the contact panel after the target has been found.
let found = false;
scene.addEventListener("targetFound", () => { found = true; });
scene.addEventListener("targetLost", () => { found = false; });
document.addEventListener("click", (event) => {
  if (found && !event.target.closest("button, a")) {
    contact.classList.remove("hidden");
  }
});
contactPanel.addEventListener("click", () => contact.classList.remove("hidden"));
close.addEventListener("click", () => contact.classList.add("hidden"));

import images from "../images.json";
import "./pwa";
const imageContainer = document.querySelector(".content") as HTMLImageElement;
function getRandomImage(): string {
  if (images.length === 0) {
    throw new Error("Array must not be empty.");
  }

  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex].replace("-intro", "");
}

imageContainer.src = getRandomImage();

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("./service-worker.js");
}

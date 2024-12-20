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

function changeImage() {
  imageContainer.src = getRandomImage();
}

imageContainer.addEventListener("click", changeImage);

changeImage();

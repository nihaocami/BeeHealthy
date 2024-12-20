import "@khmyznikov/pwa-install";
const notificationButton = document.getElementById("show-notification");

notificationButton?.addEventListener("click", async () => {
  // Request notification permission
  const permission = await Notification.requestPermission();

  if (permission === "granted") {
    // Schedule a notification after 10 seconds
    setTimeout(() => {
      new Notification("Hello!", {
        body: "This is your notification after 10 seconds.",
        icon: "icon.png", // Optional: Path to an icon image
      });
    }, 10000); // 10 seconds
  } else {
    alert("Notification permission was denied.");
  }
});

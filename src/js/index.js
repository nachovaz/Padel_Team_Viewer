import { fetchWeather } from "./weatherConditions.js";
import { fetchNextEvents, fetchPastEvents } from "./fetchEvents.js";
import { renderHome } from "./views/home.js";
import { renderPlayers } from "./views/players.js";
import { renderCalendar } from "./views/calendar.js";

window.addEventListener("DOMContentLoaded", () => {
  const homeBtn = document.getElementById("home-button");
  if (homeBtn) {
    homeBtn.addEventListener("click", () => loadSection("home"));
    homeBtn.click();
  }
  document
    .getElementById("players-button")
    .addEventListener("click", () => loadSection("players"));
  document
    .getElementById("calendar-button")
    .addEventListener("click", () => loadSection("calendar"));
});

function loadSection(section) {
  const sectionContent = document.getElementById("section-content");
  sectionContent.innerHTML = "";

  const allButtons = document.querySelectorAll(".nav-btn");
  allButtons.forEach(function (button) {
    button.classList.remove("active");
  });

  const activeButton = document.getElementById(`${section}-button`);
  if (activeButton) {
    activeButton.classList.add("active");
  }

  switch (section) {
    case "home":
      sectionContent.innerHTML = renderHome();
      fetchWeather();
      fetchNextEvents();
      fetchPastEvents();
      break;

    case "players":
      sectionContent.innerHTML = renderPlayers();
      break;

    case "calendar":
      sectionContent.innerHTML = renderCalendar();
      break;
  }
}

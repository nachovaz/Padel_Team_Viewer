export function renderHome() {
  return `
    <div id="home-elements-container">

      <div id="weather-holder" class="dashboard-card">
        <h2 class="card-title">Weather</h2>
        <div id="weather-data"></div>
      </div>

      <div id="game-conditions" class="dashboard-card">
        <h2 class="card-title">Play conditions</h2>
        <div id="ball-liveliness-bar">
          <span id="liveliness-low">LOW</span>
          <span id="liveliness-normal">NORMAL</span>
          <span id="liveliness-high">HIGH</span>
        </div>
      </div>

      <div id="upcoming-events-holder" class="dashboard-card">
        <div class="events-column">
          <h2 class="card-title">Past events</h2>
          <ul id="past-events-list"></ul>
        </div>
        <div class="events-column">
          <h2 class="card-title">Upcoming</h2>
          <ul id="upcoming-events-list"></ul>
        </div>
      </div>
    </div>
  `;
}

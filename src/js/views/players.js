import { playerData } from "../../data/playerData.js";

export function renderPlayers() {
  let html = `
    <div class="table-container">
    <table class="data-table">
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Played matches</th>
        <th>Available for playoff</th>
      </tr>
  `;

  playerData.forEach(function (player) {
    let hasPlayoff;
    if (player.playoffLocked) {
      hasPlayoff = "yes";
    } else {
      hasPlayoff = "no";
    }

    html += `
      <tr>
        <td>${player.id}</td>
        <td>${player.name}</td>
        <td>${player.playedMatches}</td>
        <td>${hasPlayoff}</td>
      </tr>
    `;
  });

  html += `</table></div>`;
  return html;
}

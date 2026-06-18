import { playerData } from "../../data/playerData.js";

export function renderPlayers() {
  let html = `
    <table class="data-table">
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Played matches</th>
        <th>Playoff Locked</th>
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

  html += `</table>`;
  return html;
}

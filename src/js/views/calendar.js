import { calendarData } from "../../data/calendarData.js";

export function renderCalendar() {
  let html = `
    <table class="data-table">
      <tr>
        <th>Match</th>
        <th>VS</th>
        <th>Date</th>
        <th>Time</th>
        <th>Venue</th>
        <th>Result</th>
      </tr>
  `;

  calendarData.forEach(function (matchup) {
    html += `
      <tr>
        <td>${matchup.jornada}</td>
        <td>${matchup.vs}</td>
        <td>${matchup.fecha}</td>
        <td>${matchup.hora}</td>
        <td>${matchup.lugar}</td>
        <td>${matchup.resultado}</td>
      </tr>
    `;
  });

  html += `</table>`;
  return html;
}

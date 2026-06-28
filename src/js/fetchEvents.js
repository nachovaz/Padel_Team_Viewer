import { calendarData } from "../data/calendarData.js";


function parseMatchDate(matchup) {
  const [d, m, y] = matchup.fecha.split("/").map(Number);
  const [h, min] = matchup.hora.split(":").map(Number);
  return { ...matchup, dateObj: new Date(y, m - 1, d, h, min) };
}

export function fetchNextEvents() {
  const actualDate = new Date();
  const upcomingEvents = calendarData
    .map(parseMatchDate)
    .filter((matchup) => matchup.dateObj >= actualDate)
    .sort((a, b) => a.dateObj - b.dateObj)
    .slice(0, 4);

  const eventList = document.getElementById("upcoming-events-list");

  if (upcomingEvents.length === 0) {
    eventList.innerHTML = `<li class="no-events">No upcoming events</li>`;
  } else {
    upcomingEvents.forEach((match) => {
      eventList.innerHTML += `
      <li>
        <span class="event-vs"> ${match.vs} </span>
        <span class="event-info">
          <span class="event-date"> ${match.fecha.split("/").slice(0, 2).join("/")} </span>
         - <span class="event-time"> ${match.hora} </span>
         // <span class="event-place"> ${match.lugar} </span>
        </span>
      </li>`;
    });
  }
}

export function fetchPastEvents() {
  const actualDate = new Date();
  const pastEvents = calendarData
    .map(parseMatchDate)
    .filter((matchup) => matchup.dateObj < actualDate)
    .sort((a, b) => b.dateObj - a.dateObj)
    .slice(0, 4);

  const eventList = document.getElementById("past-events-list");

  if (pastEvents.length === 0) {
    eventList.innerHTML = `<li class="no-events">No past events</li>`;
  } else {
    pastEvents.forEach((match) => {
      let resultClass;
      if (match.resultado.startsWith("Win")) {
        resultClass = "result-win";
      } else if (match.resultado.startsWith("Loss")) {
        resultClass = "result-loss";
      } else {
        resultClass = "result-tie";
      }
      eventList.innerHTML += `
      <li>
        <span class="event-vs"> ${match.vs} </span>
        <span class="event-result ${resultClass}"> ${match.resultado} </span>
      </li>`;
    });
  }
}

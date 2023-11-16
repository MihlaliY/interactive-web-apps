// scripts.js

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
]

const data = {
  response: {
    requestType: "FETCH_ATHLETE_DATA",
    requestBy: "ALL_MATCHING_ATHLETES",
    forDisplay: "BEST_RACES",

    data: {
      NM372: {
        firstName: "Nwabisa",
        surname: "Masiko",
        id: "NM372",
        races: [
          {
            date: "2022-11-18T20:00:00.000Z",
            time: [9, 7, 8, 6],
          },
          {
            date: "2022-12-02T20:00:00.000Z",
            time: [6, 7, 8, 7],
          },
        ],
      },

      SV782: {
        firstName: "Schalk",
        surname: "Venter",
        id: "SV782",
        races: [
          {
            date: "2022-11-18T20:00:00.000Z",
            time: [10, 8, 3, 12],
          },
          {
            date: "2022-11-25T20:00:00.000Z",
            time: [6, 8, 9, 11],
          },
          {
            date: "2022-12-02T20:00:00.000Z",
            time: [10, 11, 4, 8],
          },
          {
            date: "2022-12-09T20:00:00.000Z",
            time: [9, 8, 9, 11],
          },
        ],
      },
    },
  },
}

// Only edit below this comment

const createHtml = (athleteId) => {
  const athlete = data.response.data[athleteId] //extracts the athletes information
  const {firstName, surname, races} = athlete
  const latestRace = races[races.length - 1]

  const fragment = document.createDocumentFragment()

  const title = document.createElement("h2")
  title.innerText = athleteId
  fragment.appendChild(title)

  const list = document.createElement("dl")

  const raceDate = new Date(latestRace.date)
  const day = raceDate.getDate()
  const month = MONTHS[raceDate.getMonth()]
  const year = raceDate.getFullYear()

  const timeAsArray = latestRace.time
  const totalTime = timeAsArray.reduce((acc, lapTime) => acc + lapTime, 0) // returns the sum of elements in array
  const hours = Math.floor(totalTime / 60)
  const minutes = totalTime % 60

  list.innerHTML = `
    <dt>Athlete:</dt>
    <dd>${firstName} ${surname}</dd>
    <br/>
    <dt>Total Races:</dt>
    <dd>${races.length}</dd>
    <br/>
    <dt>Event Date (Latest):</dt>
<dd>${day} ${month} ${year}</dd>
<br/>
    <dt>Total Time (Latest):</dt>
    <dd>${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}</dd>
  `

  fragment.appendChild(list)

  return fragment
}

const sectionNM372 = document.querySelector('section[data-athlete="NM372"]')
const sectionSV782 = document.querySelector('section[data-athlete="SV782"]')

sectionNM372.appendChild(createHtml("NM372"))
sectionSV782.appendChild(createHtml("SV782"))

import fetch from 'isomorphic-unfetch'
import { filter } from 'lodash'

export const getJSON = async url => {
  let res = await fetch(url)
  res = await res.json()
  return res || []
}

export const getEvents = async () => {
  let events = await getJSON(
    'https://api2.hackclub.com/v0/Command%20Center%20Schedule/Schedule'
  )
  console.log(events)
  events = events.map(({ id, fields }) => ({
    id,
    name: fields['Session Name'],
    leader: fields['Leader Name'],
    dt: fields['Time (Eastern)'],
    date: fields['Date (formatted)'].split(' ')[1],
    time: fields['Time (formatted)'],
    cal: fields['Calendar Event']
  }))
  let days = [
    {
      day: {
        short: 'Fri',
        long: 'Friday',
        number: 20,
        date: 'Mar 20'
      },
      events: filter(events, ['date', '03/20'])
    },
    {
      day: {
        short: 'Sat',
        long: 'Saturday',
        number: 21,
        date: 'Mar 21'
      },
      events: filter(events, ['date', '03/21'])
    },
    {
      day: {
        short: 'Sun',
        long: 'Sunday',
        number: 22,
        date: 'Mar 22'
      },
      events: filter(events, ['date', '03/22'])
    }
  ]
  return days
}

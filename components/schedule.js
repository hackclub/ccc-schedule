import React from 'react'
import theme from '@hackclub/theme'
import EventCard from './event-card'

// Largely based on https://codyhouse.co/demo/schedule-template/index.html

// 30-minute chunk of time
const Chunk = ({ time }) => (
  <>
    <li>
      <span>{time}</span>
    </li>
    {time && <Chunk />}
    <style jsx>{`
      li {
        position: relative;
        height: ${theme.space[5]}px;
        top: 0;
      }
      li:before {
        content: '';
        position: absolute;
        left: ${theme.space[5] * 1.5}px;
        top: 0;
        bottom: 0;
        width: 1px;
        background: ${theme.colors.smoke};
      }
      li:last-child:before {
        bottom: 50%;
      }
      li:after {
        content: '';
        position: absolute;
        bottom: ${theme.space[5] / 2}px;
        left: ${theme.space[5] * 1.5}px;
        right: 1em;
        height: 1px;
        top: 0;
        background: ${theme.colors.smoke};
      }
      span {
        color: ${theme.colors.muted};
        font-size: ${theme.fontSizes[1]}px;
        display: block;
        vertical-align: sub;
        text-align: right;
        width: ${theme.space[5] * 1.5}px;
        padding-right: ${theme.space[2]}px;
      }
      @media (prefers-color-scheme: dark) {
        li:before,
        li:after {
          background: ${theme.colors.muted};
        }
      }
    `}</style>
  </>
)

const lengthOfDay = [
  '10:00 am',
  '11:00 am',
  '12:00 pm',
  '1:00 pm',
  '2:00 pm',
  '3:00 pm',
  '4:00 pm',
  '5:00 pm',
  '6:00 pm',
  '7:00 pm',
  '8:00 pm',
  '9:00 pm',
  '10:00 pm'
]

export default ({ schedule = [] }) => (
  <article>
    {schedule.map(date => (
      <section key={date.day.number} py={3} px={[2, 3]}>
        <h2>
          {date.day.short}, {date.day.date}, 2020
        </h2>
        <ul style={{ position: 'relative' }}>
          {date.events.map(e => (
            <EventCard key={e.id} {...e} />
          ))}
        </ul>
        <ul>
          {lengthOfDay.map(d => (
            <Chunk time={d} key={d} />
          ))}
        </ul>
      </section>
    ))}
    <style jsx>{`
      article {
        display: grid;
        grid-gap: ${theme.space[3]}px;
        padding: 0 ${theme.space[2]}px ${theme.space[4]}px;
      }
      @media (min-width: ${theme.breakpoints[2]}) {
        article {
          grid-gap: ${theme.space[4]}px;
          grid-template-columns: repeat(3, 1fr);
          padding: 0 ${theme.space[4]}px ${theme.space[5]}px;
        }
      }
      section {
        background-color: ${theme.colors.white};
        border-radius: ${theme.radii.extra}px;
        padding-bottom: ${theme.space[3]}px;
        overflow: visible;
        position: relative;
      }
      ul {
        list-style: none;
        padding-left: 0;
        margin-top: ${theme.space[4]}px;
      }
      h2 {
        position: sticky;
        display: block;
        width: 100%;
        z-index: 10;
        top: 0;
        padding: ${theme.space[2]}px ${theme.space[3]}px;
        border-radius: ${theme.radii.extra}px;
        background: ${theme.colors.white};
      }
      @media (prefers-color-scheme: dark) {
        h2,
        section {
          background: ${theme.colors.darkless};
        }
      }
    `}</style>
  </article>
)

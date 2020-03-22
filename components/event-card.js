import React from 'react'
import theme from '@hackclub/theme'
import { sample } from 'lodash'

const colors = ['red', 'orange', 'yellow', 'green', 'cyan', 'blue']

const toSpecialTime = hhmmap => {
  // Needs to be in "9:15 am" format
  let hours = parseInt(hhmmap.split(':')[0])
  const minutes = parseInt(hhmmap.split(':')[1].split(' ')[0])
  const apm = hhmmap.split(' ')[1].toLowerCase()
  if (apm == 'pm' && hours != 12) {
    hours += 12
  } else if (apm == 'am' && hours == 12) {
    hours = 10
  }

  let result = 0
  result += hours * 60
  result += minutes

  result -= 10 * 60 // cal starts at 10 am
  result = result / 30 // each "tick" in the calendar is 30 minutes

  console.log(hhmmap, hours, minutes, apm, result)

  return result
}

export default ({ name, leader, dt, time, cal }) => {
  return (
    <a
      href={cal}
      target="_blank"
      style={{
        backgroundColor: theme.colors[sample(colors)],
        top: theme.space[5] * toSpecialTime(time)
      }}
    >
      <div className="top">
        <strong>{name}</strong>
        <span className="cta">⨁ Add to calendar</span>
      </div>
      <span>
        {leader} @ {time}
      </span>
      <style jsx>{`
        a {
          border-radius: ${theme.radii.default}px;
          color: ${theme.colors.white};
          display: flex;
          flex-direction: column;
          text-decoration: none;
          position: absolute;
          left: ${theme.space[5] * 1.5}px;
          right: ${theme.space[3]}px;
          min-height: ${theme.space[5]}px;
          z-index: 2;
          padding: ${theme.space[2]}px;
          font-size: ${theme.fontSizes[1]}px;
          transition: 0.125s ease-in-out transform;
        }
        a:hover,
        a:focus {
          transform: scale(1.0625);
        }
        .top {
          display: flex;
          flex-direction: column;
          line-height: ${theme.lineHeights.heading};
        }
        .top strong {
          flex: 1 1 auto;
          width: 100%;
        }
        span {
          display: block;
          color: ${theme.colors.snow};
        }
        @media (hover: hover) {
          .cta {
            opacity: 0;
            transition: opacity 0.2s ease-in-out;
          }
          a:hover .cta,
          a:focus .cta {
            opacity: 1;
          }
        }
        @media (min-width: ${theme.breakpoints[2]}) {
          a {
            padding: ${theme.space[3]}px;
          }
          .top {
            flex-direction: row;
            align-items: start;
          }
          .cta {
            text-align: right;
          }
        }
      `}</style>
    </a>
  )
}

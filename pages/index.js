import React from 'react'
import Head from 'next/head'
import Meta from '@hackclub/meta'
import Schedule from '../components/schedule'
import theme from '@hackclub/theme'
import { getEvents } from '../lib/data'

export default ({ schedule }) => (
  <>
    <Head>
      <title>COVID Command Center Schedule</title>
      <Meta
        title="COVID Command Center Schedule"
        description="Schedule for upcoming events at the Hack Club COVID Command Center."
        image="https://workshop-cards.hackclub.com/COVID%20Command%20Center%20Schedule.png?theme=dark&brand=CCC&fontSize=200px&caption=By%2520the%2520Hack%2520Club%2520community"
      />
    </Head>
    <header>
      <h1>COVID Command Center&nbsp;Schedule</h1>
      <div className="buttonGroup">
        <a href="https://hackclub.com/community" target="_blank">Join the conversation on Slack</a>
        <a href="http://hack.af/ccc-add" className="accented" target="_blank">Host your own session</a>
      </div>
      <div className="aboutText">
        <p>
          The Hack Club community is built on and brought together by the belief
          that <strong>students are our own best teachers</strong>, and, when left to their own devices,
          students can teach each other amazing things.
        </p>
        <p>
          The <strong>COVID Command Center</strong> is an always-running, open-everywhere classroom run by members
          of the Hack Club community, for the community. Teach something. Learn something.
        </p>
      </div>
    </header>
    <Schedule schedule={schedule} />
    <footer>
      <p>
        By <a href="https://hackclub.com">Hack Club</a>
        {' & '}
        <a href="https://github.com/hackclub/ccc-schedule">open source</a> &lt;3
      </p>
    </footer>
    <style jsx global>{`
      body {
        font-family: ${theme.fonts.body};
        line-height: ${theme.lineHeights.body};
        background-color: ${theme.colors.smoke};
        color: ${theme.colors.black};
        margin: 0;
      }
      @media (prefers-color-scheme: dark) {
        body {
          background-color: ${theme.colors.dark};
          color: ${theme.colors.white};
        }
      }
      *,
      *:before,
      *:after {
        box-sizing: border-box;
      }
    `}</style>
    <style jsx>{`
      header {
        background-color: ${theme.colors.red};
        color: ${theme.colors.white};
        padding: ${theme.space[4]}px ${theme.space[3]}px ${theme.space[3]}px;
        text-align: center;
        margin-bottom: ${theme.space[3]}px;
      }
      .aboutText {
        max-width: 32em;
        margin: 0 auto;
      }
      .buttonGroup a {
        margin: .5em;
      }
      .buttonGroup a.accented {
        color: ${theme.colors.red};
        background: ${theme.colors.white};
      }
      h1 {
        margin: auto;
        max-width: 32rem;
        line-height: 1.125;
        text-shadow: 0px 0px 16px rgba(0, 0, 0, 0.1);
        font-size: ${theme.fontSizes[4]}px;
        margin-bottom: .5rem;
      }
      header a {
        border: 2px solid ${theme.colors.white};
        color: ${theme.colors.white};
        line-height: 1.5;
        padding: ${theme.space[1] * 1.5}px ${theme.space[2] * 1.5}px;
        border-radius: ${theme.radii.default}px;
        font-weight: bold;
        display: inline-block;
        margin: 0;
        text-decoration: none;
        transition: 0.125s ease-in-out transform;
      }
      header a:hover,
      header a:focus {
        transform: scale(1.125);
      }
      @media (min-width: ${theme.breakpoints[1]}) {
        header {
          padding: ${theme.space[5]}px ${theme.space[3]}px ${theme.space[4]}px;
          margin-bottom: ${theme.space[5]}px;
        }
        h1 {
          font-size: ${theme.fontSizes[5]}px;
          max-width: none;
        }
      }
      @media (max-width: ${theme.breakpoints[0]}) {
        .aboutText {
          display: none;
        }
      }
      footer {
        background-color: ${theme.colors.smoke};
        color: ${theme.colors.slate};
        text-align: center;
        padding: ${theme.space[4]}px ${theme.space[3]}px;
      }
      footer p {
        font-size: ${theme.fontSizes[2]}px;
      }
      footer a {
        color: ${theme.colors.red};
      }
      @media (prefers-color-scheme: dark) {
        footer {
          background-color: ${theme.colors.darker};
          color: ${theme.colors.muted};
        }
      }
    `}</style>
  </>
)

export const getServerSideProps = async () => {
  const schedule = await getEvents()
  return { props: { schedule } }
}

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
      <a href="http://hack.af/ccc-add">Host your own session</a>
    </header>
    <Schedule schedule={schedule} />
    <footer>
      <p>
        By <a href="https://lachlanjc.me">@lachlanjc</a>
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
      h1 {
        margin: auto;
        max-width: 32rem;
        line-height: 1.125;
        text-shadow: 0px 0px 16px rgba(0, 0, 0, 0.1);
        font-size: ${theme.fontSizes[4]}px;
        margin-bottom: ${theme.space[3]}px;
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
      @media (min-width: ${theme.breakpoints[2]}) {
        header {
          padding: ${theme.space[5]}px ${theme.space[3]}px ${theme.space[4]}px;
          margin-bottom: ${theme.space[5]}px;
        }
        h1 {
          font-size: ${theme.fontSizes[5]}px;
          max-width: none;
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

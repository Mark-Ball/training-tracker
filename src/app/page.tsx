import prisma from '@db/prismaSingleton'

import type { Month } from '@functions/dates'
import { calculateOnTrack, goalSessions } from '@functions/trainingSessions'

import TrainingMonth from '@components/TrainingMonth'

import ButtonWrapper from './buttonWrapper'

const months: Month[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

const Home = async () => {
  const trainingSessions = await prisma.trainingSession.findMany()
  const totalSessions = trainingSessions.length

  const isOnTrack = calculateOnTrack(totalSessions)

  return (
    <>
      <div className="p-4 text-xl">Training Sessions</div>

      {months.map((month, index) => (
        <TrainingMonth isLast={index === 11} key={month} month={month} />
      ))}

      <ButtonWrapper />

      <div className="p-4 flex items-center justify-between">
        <div className="text-lg">Total sessions: {totalSessions}</div>

        <div className="text-lg">Goal: {goalSessions}</div>

        <div>On track</div>
      </div>
    </>
  )
}

export default Home
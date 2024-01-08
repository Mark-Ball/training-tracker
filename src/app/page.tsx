import prisma from '@db/prismaSingleton'

import type { Month } from '@functions/dates'

import TrainingMonth from '@components/TrainingMonth'

import ButtonWrapper from './buttonWrapper'

const months: Month[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

const Home = async () => {
  const trainingSessions = await prisma.trainingSession.findMany()

  return (
    <>
      <div className="p-4 text-xl">Training Sessions</div>

      {months.map((month, index) => (
        <TrainingMonth isLast={index === 11} month={month} />
      ))}

      <ButtonWrapper />

      <div className="p-4 text-lg">Total sessions: {trainingSessions.length}</div>
    </>
  )
}

export default Home
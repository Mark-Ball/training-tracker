import prisma from '@db/prismaSingleton'

import TrainingMonth from '@components/TrainingMonth'

import ButtonWrapper from './buttonWrapper'

const Home = async () => {
  const trainingSessions = await prisma.trainingSession.findMany()

  return (
    <>
      <div className="p-4 text-xl">Training Sessions</div>

      <TrainingMonth month="Jan" />

      <TrainingMonth month="Feb" />

      <ButtonWrapper />

      <div className="p-4 text-lg">Total sessions: {trainingSessions.length}</div>
    </>
  )
}

export default Home
import prisma from '@db/prismaSingleton'

import TrainingSessionListItem from '@components/TrainingSessionListItem'

import ButtonWrapper from './buttonWrapper'

const Home = async () => {
  const trainingSessions = await prisma.trainingSession.findMany()

  return (
    <>
      <div>Training Sessions</div>

      {trainingSessions.map(session => (
        <TrainingSessionListItem key={session.id} trainingSession={session} />
      ))}

      <ButtonWrapper />
    </>
  )
}

export default Home
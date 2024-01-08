import prisma from '@db/prismaSingleton'

import TrainingSessionListItem from '@components/TrainingSessionListItem'

import ButtonWrapper from './buttonWrapper'

const Home = async () => {
  const trainingSessions = await prisma.trainingSession.findMany()

  return (
    <>
      <div className="p-4 text-xl">Training Sessions</div>

      <div className="border-t">
        {trainingSessions.map(session => (
          <TrainingSessionListItem key={session.id} trainingSession={session} />
        ))}
      </div>

      <ButtonWrapper />
    </>
  )
}

export default Home
import prisma from '@db/prismaSingleton'

import ButtonWrapper from './buttonWrapper'

const Home = async () => {
  const trainingSessions = await prisma.trainingSession.findMany()

  return (
    <>
      <div>Training Sessions</div>

      <ButtonWrapper />
    </>
  )
}

export default Home
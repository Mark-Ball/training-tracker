'use server'

import prisma from '@db/prismaSingleton'

export const createTrainingSession = async () => {
  const trainingSession = await prisma.trainingSession.create({
    data: {}
  })

  return trainingSession
}
'use server'

import { revalidateTag } from 'next/cache'

import prisma from '@db/prismaSingleton'

export const createTrainingSession = async () => {
  const trainingSession = await prisma.trainingSession.create({
    data: {}
  })

  revalidateTag('trainingSession')

  return trainingSession
}
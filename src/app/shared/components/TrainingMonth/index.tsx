import prisma from '@db/prismaSingleton'

import { constructQueryForMonth } from '@functions/dates'
import type { Month } from '@functions/dates'

import CollapsibleList from './CollapsibleList'

interface TrainingMonthProps {
  month: Month,
}

const TrainingMonth = async (props: TrainingMonthProps) => {
  const { month } = props

  const trainingSessions = await prisma.trainingSession.findMany({
    where: {
      createdAt: constructQueryForMonth(month)
    },
  })

  return <CollapsibleList month={month} trainingSessions={trainingSessions} />
}

export default TrainingMonth
import clsx from 'clsx'

import prisma from '@db/prismaSingleton'

import { constructQueryForMonth } from '@functions/dates'
import type { Month } from '@functions/dates'

import CollapsibleList from './CollapsibleList'

interface TrainingMonthProps {
  isLast: boolean,
  month: Month,
}

const TrainingMonth = async (props: TrainingMonthProps) => {
  const { isLast, month } = props

  const trainingSessions = await prisma.trainingSession.findMany({
    where: {
      createdAt: constructQueryForMonth(month)
    },
  })

  return (
    <div className={clsx({ 'border-b': isLast })}>
      <CollapsibleList month={month} trainingSessions={trainingSessions} />
    </div>
  )
}

export default TrainingMonth
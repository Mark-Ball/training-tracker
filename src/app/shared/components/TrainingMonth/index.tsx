import prisma from '@db/prismaSingleton'

import TrainingSessionListItem from '@components/TrainingSessionListItem'

import { constructQueryForMonth } from '@functions/dates'
import type { Month } from '@functions/dates'

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

  return (
    <>
      <div className="border p-4 flex justify-between align-center">
        <div className="text-lg">{month}</div>

        <div>Sessions: {trainingSessions.length}</div>
      </div>

      {trainingSessions.map(session => (
        <TrainingSessionListItem key={session.id} trainingSession={session} />
      ))}
    </>
  )

}

export default TrainingMonth
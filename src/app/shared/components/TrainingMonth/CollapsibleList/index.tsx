'use client'

import { useState } from 'react'

import { TrainingSession } from '@prisma/client'

import type { Month } from '@functions/dates'

import TrainingSessionListItem from '@components/TrainingSessionListItem'

interface CollapsibleListProps {
  month: Month,
  trainingSessions: TrainingSession[],
}

const CollapsibleList = (props: CollapsibleListProps) => {
  const { month, trainingSessions } = props

  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div
        className="border-t p-4 flex justify-between align-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="text-lg">{month}</div>

        <div>Sessions: {trainingSessions.length}</div>
      </div>

      {isOpen && trainingSessions.map(session => (
        <TrainingSessionListItem key={session.id} trainingSession={session} />
      ))}
    </>
  )
}

export default CollapsibleList
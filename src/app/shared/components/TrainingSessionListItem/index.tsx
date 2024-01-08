import type { TrainingSession } from "@prisma/client"

interface TrainingSessionListItemProps {
  trainingSession: TrainingSession,
}

const TrainingSessionListItem = (props: TrainingSessionListItemProps) => {
  const {
    trainingSession: {
      createdAt,
      id,
    },
  } = props

  return (
    <div className="border p-2 flex">
      # {id}
      <div className="ml-8">{`${createdAt}`}</div>
    </div>
  )
}

export default TrainingSessionListItem
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
    <div className="border-t p-2 flex items-center">
      <div className="w-10"># {id}</div>

      <div className="ml-8">{`${createdAt}`}</div>
    </div>
  )
}

export default TrainingSessionListItem
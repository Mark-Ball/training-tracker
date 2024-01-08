'use client'

import { createTrainingSession } from '@actions/trainingSession'

import Button from '@components/Button'

const ButtonWrapper = () => (
  <Button className="ml-4" onClick={() => createTrainingSession()}>
    + Add Training Session
  </Button>
)

export default ButtonWrapper
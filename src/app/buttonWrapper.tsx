'use client'

import { createTrainingSession } from '@actions/trainingSession'

import Button from '@components/Button'

const ButtonWrapper = () => <Button onClick={() => createTrainingSession()}>+ Add Training Session</Button>

export default ButtonWrapper
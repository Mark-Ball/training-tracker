export const goalSessions = 180

const getDayOfYear = (date: Date) => Math.floor((+date - +new Date(date.getFullYear(), 0, 0)) / 86_400_000);

export const calculateOnTrack = (sessionsCompleted: number) => {
  const day = getDayOfYear(new Date())

  const percentageOfYearPassed = day / 365
  const sessionsToBeOnTrack = goalSessions * percentageOfYearPassed

  return sessionsCompleted > sessionsToBeOnTrack
}
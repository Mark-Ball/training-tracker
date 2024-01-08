export type Month = 'Jan' | 'Feb' | 'Mar' | 'Apr' | 'May' | 'Jun' | 'Jul' | 'Aug' | 'Sep' | 'Oct' | 'Nov' | 'Dec'

export const constructQueryForMonth = (month: Month) => {
  const dateRanges = {
    Jan: { gte: new Date('2024-01-01'), lte: new Date('2024-01-31') },
    Feb: { gte: new Date('2024-02-01'), lte: new Date('2024-02-28') },
    Mar: { gte: new Date('2024-03-01'), lte: new Date('2024-02-31') },
    Apr: { gte: new Date('2024-04-01'), lte: new Date('2024-04-30') },
    May: { gte: new Date('2024-05-01'), lte: new Date('2024-05-31') },
    Jun: { gte: new Date('2024-06-01'), lte: new Date('2024-06-30') },
    Jul: { gte: new Date('2024-07-01'), lte: new Date('2024-07-31') },
    Aug: { gte: new Date('2024-08-01'), lte: new Date('2024-08-31') },
    Sep: { gte: new Date('2024-09-01'), lte: new Date('2024-09-30') },
    Oct: { gte: new Date('2024-10-01'), lte: new Date('2024-10-31') },
    Nov: { gte: new Date('2024-11-01'), lte: new Date('2024-11-30') },
    Dec: { gte: new Date('2024-12-01'), lte: new Date('2024-12-31') },
  }

  return dateRanges[month]
}
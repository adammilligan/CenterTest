export const moveRaring = (arr: number[]) => {
  if (arr.length === 0) {
    return '-'
  }
  const all = arr.reduce((acc, currentValue) => acc + currentValue, 0)
  return parseFloat((all / arr.length).toFixed(1))
}


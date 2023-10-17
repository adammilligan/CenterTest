import {Move} from "shared/types/Move";

export const biggestIndex = (arr: Move[]) => {
  const indexes = arr.map((el) => el.id)
  return indexes.sort((a, b) => a - b)[indexes.length-1]
}

export type MoveComment = {
  move: number
  id: number
  text: string
  author: string
}

export type Move = {
  id: number
  name: string
  description: string
  cast: string
  durationMinutes: number
  rating: number[]
  cover: string
  comments: MoveComment[]
}


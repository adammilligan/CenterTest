import {makeAutoObservable} from "mobx";
import cover from "entities/images/cover.png";
import {Move} from "shared/types/Move";


class MoveList {
  constructor() {
    makeAutoObservable(this)
  }

  moves: Move[] = []

  getList() {
    const createMove = (id: number) => ({
        id,
        name: 'Move',
        description: 'Move description',
        cast: 'First, Second',
        durationMinutes: 96,
        rating: [5, 6, 7, 8, 9, 1, 1],
        cover: cover,
        comments: [
          {
            move: 1,
            id: 1,
            text: 'Хороший Фильм',
            author: 'Иван Котов'
          },
          {
            move: 1,
            id: 2,
            text: 'Не очень хороший фильм',
            author: 'Кот Котов'
          }
        ]
      }
    )

    this.moves = Array.from({length: 10}, (_, index) => createMove(index + 1));
  }

  addMove(item: Move) {
    this.moves.push(item)
  }

  addMoveComment(id: number, comment: Comment) {
    const currentMove = this.moves.filter(move => move.id === id)[0]
    currentMove.comments.push(comment)
  }

  addRating(id: number, rating: number) {
    const currentMove = this.moves.filter(move => move.id === id)[0]
    currentMove.rating.push(rating)
  }
}

export const moveList = new MoveList()

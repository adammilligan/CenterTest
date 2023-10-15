import {makeAutoObservable} from "mobx";
import cover from "entities/images/cover.jpg";
import {Move} from "shared/types/Move";

class MoveList {
  constructor() {
    makeAutoObservable(this)
  }

  moves: Move[] = []

  getList() {
    const currentMove: Move = {
      id: 1,
      name: 'Move',
      description: 'Move description',
      cast: ['First, Second'],
      durationMinutes: 96,
      rating: 5,
      cover: cover,
      comments: [
        {
          move: 1,
          id: 1,
          text: 'good move',
          author: 'Comment Author'
        },
        {
          move: 1,
          id: 2,
          text: 'no good move',
          author: 'New Author'
        }
      ]
    }

    this.moves = Array.from({ length: 10 }, () => currentMove);
  }

  addMove(item:Move){
    this.moves.push(item)
  }

}

export const moveList = new MoveList()

import {useParams} from "react-router-dom";
import {moveList} from "entities/moveList";
import classes from "./index.module.sass"
import {useState} from "react";

const MoveLanding = () => {

  const [newComment, setNewComment] = useState('')

  const handlerNewComment = (event) => {
    const newValue = event.target.value
    setNewComment(newValue)
  }

  console.log(newComment)

  const {id} = useParams()
  const currentId = Number(id)
  const currentMove = moveList.moves.filter((move) => move.id === currentId)[0]
  const {name, cover, rating, cast, durationMinutes, description, comments} = currentMove

  return (
    <div className="wrapper">
      <h1 className={classes.moveName}>{name}</h1>
      <section className={classes.moveCard}>
        <div className={classes.cover} style={{backgroundImage: `url(${cover})`, backgroundSize: 'cover'}}></div>
        <div className={classes.moveDescription}>
          <p className={classes.rating}>Рейтинг {rating}/10</p>
          <p className={classes.duration}>Продолжительность {durationMinutes} минут</p>
          <p className={classes.description}>Описание: {description}</p>
          <p className={classes.cast}>В ролях: {cast}</p>
          <p>Комментарии</p>
          {comments.map((comment) => <p className={classes.commentItem}
                                        key={comment.id}>{comment.author}: {comment.text}</p>)}
          <textarea
            placeholder="Добавить новый комментарий..."
            onChange={handlerNewComment}
            className={classes.textarea}
          >
          </textarea>
          <button>Добавить</button>
        </div>
      </section>
    </div>
  );
};

export default MoveLanding;

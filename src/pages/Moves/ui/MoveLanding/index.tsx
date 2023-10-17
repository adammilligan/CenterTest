import {observer} from "mobx-react";
import {nanoid} from "nanoid";
import { useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {moveList} from "entities/moveList";
import {moveRaring} from "shared/lib/moveRating";
import {MoveComment} from "shared/types/Move";
import ButtonSimple from "shared/ui/ButtonSimple";
import Loading from "shared/ui/Loading";
import {Select} from 'shared/ui/Select'
import classes from "./index.module.sass"



const MoveLanding = observer(() => {

  // todo тут мы могли бы взять имя текущего авторизированного пользователя
  // todo так же мы бы узнавали, добавлял ли уже пользователь оценку фильму, это можно было бы узнавать при создании стора фильмов пользователся
  // todo в нем бы мы добавляли информацию об оставленном комментарии, оценке, уже просмотренном времени фильма и тд.
  // todo при запросе к API отправляли бы только id текучего фильма, id комментария добавился на бэке при создании комментария

  const [newCommentText, setNewCommentText] = useState('')
  const [newMoveRating, setNewMoveRating] = useState(0)
  const [hideSelectedOptions, setHideSelectedOptions] = useState(false)
  const [buttonDisable, setButtonDisable] = useState(true)

  const navigate = useNavigate()

  const changeMoveRating = ({ value }: { value: string }) => {
    setNewMoveRating(Number(value))
    console.log(currentMove?.rating)
    moveList.addRating(currentId, Number(value))
    setHideSelectedOptions(true)
  }


  const {id} = useParams()
  const currentId = Number(id)
  console.log(currentId)
  const currentMove = moveList?.moves?.filter((move) => move.id === currentId)[0]

  const moveRatingOptions = [
    { label: 1, value: 1 },
    { label: 2, value: 2 },
    { label: 3, value: 3 },
    { label: 4, value: 4 },
    { label: 5, value: 5 },
    { label: 6, value: 7 },
    { label: 7, value: 6 },
    { label: 8, value: 8 },
    { label: 9, value: 9 },
    { label: 10, value: 10 },
    ]

  const handlerNewComment = (event) => {
    const newValue = event.target.value
    setNewCommentText(newValue)
    setButtonDisable(false)
  }

  const addNewComment = () => {
    const newComment: MoveComment =
      {move: currentId, id: Number(nanoid()), text: newCommentText, author: 'Новый Кот'}
    moveList.addMoveComment(currentId, newComment)
    setButtonDisable(true)
  }

  return (
  currentMove ?
    <div className="wrapper">
      <section className={classes.header}>
        <p onClick={() => navigate('/')}>←</p>
        <h1 className={classes.moveName}>{currentMove.name}</h1>
      </section>
      <section className={classes.moveCard}>
        <div className={classes.cover} style={{backgroundImage: `url(${currentMove.cover})`, backgroundSize: 'cover'}}></div>
        <div className={classes.moveDescription}>
          <p className={classes.rating}>Рейтинг {moveRaring(currentMove.rating)}/10</p>
          <p className={classes.duration}>Продолжительность {currentMove.durationMinutes} минут</p>
          <p className={classes.description}>Описание: {currentMove.description}</p>
          <p className={classes.cast}>В ролях: {currentMove.cast}</p>
          <div className={classes.addRating}>
            <p>Оцените фильм от 1 до 10</p>
            <Select
              value={newMoveRating}
              options={moveRatingOptions}
              onChange={changeMoveRating}
              placeholder="оценка"
              isDisabled={hideSelectedOptions}
            />
          </div>
          <textarea
            placeholder="Добавить новый комментарий..."
            onChange={handlerNewComment}
            className={classes.textarea}
          >
          </textarea>
          <ButtonSimple disabled={buttonDisable} text="добавить" onClick={addNewComment}/>
        </div>
        <div className={classes.comments}>
          <p>Комментарии</p>
          {currentMove.comments.map((comment) =>
            <p
              className={classes.commentItem}
              key={comment.id}>{comment.author}
              : {comment.text}
            </p>)}
        </div>
      </section>
    </div>
      :
      <Loading />
  )
});

export default MoveLanding;

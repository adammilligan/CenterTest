import {FC} from "react";
import {useNavigate} from "react-router-dom";
import {moveRaring} from "shared/lib/moveRating";
import {Move} from "shared/types/Move";
import classes from "./index.module.sass"


type MoveCardProps = {
  el: Move
}

const MoveCard: FC<MoveCardProps>  = ({el}) => {
  const navigate = useNavigate()
  const { id, name, cover, rating, cast, durationMinutes, description } = el
  return (
    <div className={classes.wrapper} onClick={() => navigate(`/${id}`)}>
      <h2 className={classes.moveName}>{name}</h2>
      <div className={classes.cover} style={{ backgroundImage: `url(${cover})`, backgroundSize: 'cover'}}></div>
      <h3 className={classes.duration}>{durationMinutes} минут</h3>
      <p className={classes.description}>{description}</p>
      <p className={classes.cast}>В ролях: {cast}</p>
      <p className={classes.rating}>Рейтинг: {moveRaring(rating)}/10</p>
    </div>
  );
};

export default MoveCard;

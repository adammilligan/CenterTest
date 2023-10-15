import {observer} from "mobx-react";
import MoveCard from "widgets/MoveCard";
import {moveList} from "entities/moveList";
import classes from "./index.module.sass"
import addImg from './images/add.svg'
import {useNavigate} from "react-router-dom";

const Moves = observer(() => {

  const navigate = useNavigate()

  const { moves } = moveList

  return (
    <div className="wrapper">
      <h1 className={classes.header}>Коллекция фильмов</h1>
      <section className={classes.moveList}>
        {moves.map((el, index) => <MoveCard key={index} el={el} />)}
        <div className={classes.addWrapper} onClick={() => navigate('/create')}>
          <img src={addImg} alt=""/>
        </div>
      </section>
    </div>
  );
});

export default Moves;

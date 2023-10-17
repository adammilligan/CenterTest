import {useFormik} from "formik";
import {useNavigate} from "react-router-dom";
import {moveList} from "entities/moveList";
import {biggestIndex} from "shared/lib/biggestIndex";
import {Move} from "shared/types/Move";
import ButtonSimple from "shared/ui/ButtonSimple";
import newCover from "./images/img.png"
import classes from "./index.module.sass";

type FormikValues = {
  name: string
  description: string
  cast: string
  durationMinutes: string
}

const AddMove = () => {
  const navigate = useNavigate()

  // todo здесь у нас должен был бы ID присовиться на бэке, но я его добавляю руками
  const currentIndex = biggestIndex(moveList.moves) + 1

  // todo картинку буду добавлять тоже руками, обычно отправляю на бэк FormData
  const handleSubmit = (values: FormikValues) => {
    const newMove: Move = {
      id: currentIndex,
      name: values.name,
      description: values.description,
      cast: values.cast,
      durationMinutes: Number(values.durationMinutes),
      rating: [],
      cover: newCover,
      comments: []
    }
    console.log(newMove)
    moveList.addMove(newMove)
    navigate('/')
  }


  const formik = useFormik({
    initialValues: {
      name: '',
      description: '',
      cast: '',
      durationMinutes: '',
    },
    onSubmit: (values) => handleSubmit(values),
  });


  return (
    <div className={classes.wrapper}>
      <section className={classes.header}>
        <p onClick={() => navigate('/')}>←</p>
        <h1 className={classes.moveName}>Добавить новый фильм</h1>
      </section>
      <form className={classes.form} onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Название фильма</label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Название"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        <label htmlFor="description">Краткое описание фильма</label>
        <textarea
          id="description"
          name="description"
          placeholder="Краткое описание"
          onChange={formik.handleChange}
          value={formik.values.description}
        />
        <label htmlFor="cast">В главных ролях</label>
        <input
          id="cast"
          name="cast"
          type="text"
          placeholder="Фамилия И.О."
          onChange={formik.handleChange}
          value={formik.values.cast}
        />
        <label htmlFor="durationMinutes">Продолжительность в минутах</label>
        <input
          id="durationMinutes"
          name="durationMinutes"
          type="text"
          placeholder="Минуты"
          onChange={formik.handleChange}
          value={formik.values.durationMinutes}
        />
        <ButtonSimple
          onClick={formik.submitForm}
          text="Сохранить фильм"
          disabled={false}
          classes={classes.button}
        />
      </form>
    </div>
  );
};

export default AddMove;

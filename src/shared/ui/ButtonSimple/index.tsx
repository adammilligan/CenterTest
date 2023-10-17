import clsx from "clsx"
import "./index.sass"
import {FC} from "react";

type ButtonSimpleProps = {
  text: string,
  onClick: () => void,
  disabled: boolean,
  classes: string
}

const ButtonSimple: FC<ButtonSimpleProps> = ({ text, onClick, disabled, classes}) => {
  const allClasses = disabled ? clsx("button-simple", "button-disable",  classes) : clsx("button-simple", classes)
  return (
    <button
      className={allClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  )
}

export default ButtonSimple

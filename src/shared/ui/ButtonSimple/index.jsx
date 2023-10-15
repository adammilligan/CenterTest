import clsx from "clsx"
import "./index.sass"
import {FC} from "react";

type ButtonSimpleProps = {

}

const ButtonSimple: FC<ButtonSimpleProps> = ({ text, onClick, disabled, fullWidth, className, ...props }) => {
  return (
    <button
      className={clsx(
        "button-simple",
        {
          ["button-simple_fullWidth"]: fullWidth,
        },
        className
      )}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {text}
    </button>
  )
}

ButtonSimple.defaultProps = {
  disabled: false,
}

export default ButtonSimple

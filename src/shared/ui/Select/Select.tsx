import clsx from "clsx"
import { useState } from "react"
import { FC } from "react"
import ReactSelect, { Props as ReactSelectProps } from "react-select"
import classes from "./customSelect.module.sass"
import arrow from "./images/bleach.svg"

type SelectProps = ReactSelectProps & {
  className?: string
  value: string | undefined
  onChange(value: string): void
  isDisabled: boolean
}

const Select: FC<SelectProps> = ({ value, options, placeholder, className, onChange, isDisabled, ...props }) => {
  const [currentValue, setCurrentValue] = useState(value)
  const CustomArrow = () => {
    return <img className={classes.arrow} src={arrow} alt="" />
  }

  const handleChange = (value: unknown) => {
    setCurrentValue(value as string)
    onChange(value as string)
  }

  const customStyles = {
    control: (provided: object) => ({
      ...provided,
      flexDirection: "row-reverse",
      justifyContent: "flex-end",
      borderRadius:  "5px",
      borderColor: "#709CD0",
      paddingRight: "5px",
    }),
    dropdownIndicator: (provided: object) => ({
      ...provided,
      order: "-1",
      border: "none",
      borderRadius: 0,
    }),
  }

  return (
    <>
      <div className={clsx(classes.wrapper, className)}>
        <ReactSelect
          value={currentValue}
          onChange={handleChange}
          options={options}
          /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
          // @ts-ignore
          styles={customStyles}
          placeholder={placeholder}
          isDisabled={isDisabled}
          {...props}
          components={{
            IndicatorSeparator: null,
            ClearIndicator: undefined,
            DropdownIndicator: CustomArrow,
            ...props.components,
          }}
        />
      </div>
    </>
  )
}

export default Select

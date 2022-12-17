import React from 'react'
import styles from "../InputControl/InputControl.module.css"
const InputControl = (props) => {
  return (
    <div className={styles.container}>
        {props.label && <label>{props.label}</label>}
        <input type="text" {...props} />
      <label></label>
    </div>
  )
}

export default InputControl

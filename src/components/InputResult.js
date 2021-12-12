import React from 'react';
import CrossRed from "./CrossRed";
import modal from "../page/ModalWindows.module.css"

const InputResult = ({setCheck, value, setValue = false, setFocus, styles}) => {
   const deleteVal = ()=>{
       setCheck('')
       setValue('')
       setFocus(true)
   }
    const changeVal = ()=>{
        setCheck('')
        setFocus(true)
    }
    return (
        <div className={modal.modal_input + " " + modal.input_error_value} onClick={changeVal} style={styles}>
            <span>{value}</span>
            {setValue && value !=='' && <span style={{marginTop: '5px'}} onClick={deleteVal}><CrossRed/></span>}
        </div>
    );
};

export default InputResult;
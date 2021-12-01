import React from 'react';
import CrossRed from "./CrossRed";

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
        <div className="modal_input input_error_value" onClick={changeVal} style={styles}>
            <span>{value}</span>
            {setValue && value !=='' && <span style={{marginTop: '5px'}} onClick={deleteVal}><CrossRed/></span>}
        </div>
    );
};

export default InputResult;
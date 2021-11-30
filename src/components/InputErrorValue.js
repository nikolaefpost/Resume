import React from 'react';
import Cross from "./Cross";
import CrossRed from "./CrossRed";

const InputErrorValue = ({setError, user, setUser}) => {
   const deleteVal = ()=>{
       setError('')
       setUser('')
   }
    return (
        <div className="modal_input input_error_value" onClick={() => setError('')} style={{border: '1px solid #E43F3F'}}>
            <span>{user}</span><span style={{marginTop: '5px'}} onClick={deleteVal}><CrossRed/></span>
        </div>
    );
};

export default InputErrorValue;
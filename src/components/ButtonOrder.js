import React, {useState} from 'react';
import ArrowRight from "./ArrowRight";
import modal from "../page/ModalWindows.module.css"

const ButtonOrder = () => {
    const [hover, setHover] = useState(false)
    return (
        <>
            <button onMouseOver={() => setHover(true)}
                    onMouseOut={() => setHover(false)}
                    type="submit"  className={modal.modal_input}>
                <span>ORDER</span>
                 <span className={modal.arrow} style={{ display: hover ? 'block' : 'none'} }
                ><ArrowRight/></span>
            </button>
        </>
    );
};

export default ButtonOrder;
import React, {useState} from 'react';
import ArrowRight from "./Arrow_right";

const ButtonOrder = () => {
    const [hover, setHover] = useState(false)
    return (
        <>
            <button onMouseOver={() => setHover(true)}
                    onMouseOut={() => setHover(false)}
                    type="submit"  className="modal_input">
                <span>ORDER</span>
                 <span className="arrow" style={{ display: hover ? 'block' : 'none'} }
                ><ArrowRight/></span>
            </button>
        </>
    );
};

export default ButtonOrder;
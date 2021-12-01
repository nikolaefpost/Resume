import React, {useEffect, useState} from 'react';
import './ModalWindows.css'
import '../components/Component.css'
import Cross from "../components/Cross";
import InputResult from "../components/InputResult";


const ModalWindows = ({
      visible = false,
      product,
      onClose,
}) => {
    const [userName, setUserName] = useState('')
    const [checkName, setCheckName] = useState('')
    const [focusName, setFocusName] = useState(false)
    const [userPhone, setUserPhone] = useState('')
    const [checkPhone, setCheckPhone] = useState('')
    const [focusPhone, setFocusPhone] = useState(false)


    const enterName = (e)=>setUserName(e.target.value)
    const enterPhone = (e)=>setUserPhone(e.target.value)

    const checkNameBlur = ()=>{
        if (!userName.length) {
            setCheckName('This field in required')
        } else if (userName.split('').find((l)=>!/[a-zA-Zа-яА-ЯёЁ\s]/i.test(l))) {
            setCheckName('Only letters allowed')
        } else setCheckName('ok')

    }

    const checkPhoneBlur = ()=>{
        if (!userPhone.length) {
            setCheckPhone('This field in required')
        } else if(!Number.isInteger(Number(userPhone)) ){
            setCheckPhone('Only numbers allowed')
        }else if( userPhone.split('').length !== 12){
            setCheckPhone('Should contain 12 characters')
        } else setCheckPhone('ok')
    }

    const submitForm = (e)=>{
        e.preventDefault();
        checkNameBlur();
        checkPhoneBlur();
       if (checkName==='ok' && checkPhone==='ok') {
           console.log(userName, userPhone)
       }
    }

    const onKeydown = (e) => {
        switch (e.code) {
            case 'Escape':
                onClose()
                break
            default:
        }
    }
    useEffect(()=>{
        document.addEventListener('keydown', onKeydown)
        return () => document.removeEventListener('keydown', onKeydown)
    })

    useEffect(()=>{
        setUserName('');
        setUserPhone('');
        setCheckName('');
        setCheckPhone('');
        setFocusName(false);
        setFocusPhone(false)

    },[visible])

    if (!visible) return null;
    return (
        <div className='modal' >
            <div className='modal_dialog' onClick={e => e.stopPropagation()}>
                <div className="modal_close" onClick={onClose}><Cross/></div>
                <div className="modal_content">
                    <div className="category">{product.category}</div>
                    <div className="name">{product.name}</div>
                    <div className="price_box">
                        <span className="dollar_sign">$</span>
                        <span className="price"> {product?.price}</span>
                    </div>
                    <form onSubmit={submitForm}>
                        {checkName ==='' ? <input
                            autoFocus={focusName}
                            className="modal_input"
                            type="text"
                            placeholder="Name"
                            value={userName}
                            onChange={enterName}
                            onBlur={checkNameBlur}
                        />: checkName !=='ok' ? <InputResult
                            setCheck={setCheckName}
                            value={userName}
                            setValue={setUserName}
                            setFocus={setFocusName}
                            styles={{border: '1px solid #E43F3F'}}
                        /> : <InputResult
                            setCheck={setCheckName}
                            value={userName}
                            setFocus={setFocusName}
                            styles={{border: '1px solid green'}}
                        />
                        }

                        {checkName && checkName !=='ok' ? <div className="error_text">{checkName}</div>:
                            <div style={{visibility: 'hidden'}} className="error_text">hide text</div>}
                        {checkPhone === '' ? <input
                            autoFocus={focusPhone}
                            className="modal_input"
                            type="text"
                            placeholder="Number"
                            value={userPhone}
                            onChange={enterPhone}
                            onBlur={checkPhoneBlur}
                        />: checkPhone !=='ok' ?<InputResult
                            setCheck={setCheckPhone}
                            value={userPhone}
                            setValue={setUserPhone}
                            setFocus={setFocusPhone}
                            styles={{border: '1px solid #E43F3F'}}
                        />: <InputResult
                            setCheck={setCheckPhone}
                            value={userPhone}
                            setFocus={setFocusPhone}
                            styles={{border: '1px solid green'}}
                        />
                        }
                        {checkPhone && checkPhone !=='ok' ? <div className="error_text">{checkPhone}</div>:
                            <div style={{visibility: 'hidden'}} className="error_text">hide text</div>}
                        <input type="submit" value="ORDER" className="modal_input"/>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ModalWindows;
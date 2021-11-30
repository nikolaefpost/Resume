import React, {useEffect, useState} from 'react';
import './ModalWindows.css'
import '../components/Component.css'
import Cross from "../components/Cross";
import InputErrorValue from "../components/InputErrorValue";

const ModalWindows = ({
      visible = false,
      product,
      onClose,
}) => {
    const [userName, setUserName] = useState('')
    const [errorName, setErrorName] = useState('')
    const [userPhone, setUserPhone] = useState('')
    const [errorPhone, setErrorPhone] = useState('')

    const enterName = (e)=>setUserName(e.target.value)
    const enterPhone = (e)=>setUserPhone(e.target.value)

    const checkNameBlur = ()=>{
        if (!userName.length) {
            setErrorName('This field in required')
        } else if (userName.split('').find((l)=>!/[a-zA-Zа-яА-ЯёЁ\s]/i.test(l))) {
               setErrorName('Only letters allowed')
                // setUserName((pre)=>{
                //     return <div>{pre}<Cross/></div>
                // })
        }
    }

    const checkPhoneBlur = ()=>{
        if (!userPhone.length) {
            setErrorPhone('This field in required')
        } else if(!Number.isInteger(Number(userPhone)) ){
            setErrorPhone('Only numbers allowed')
        }else if( userPhone.split('').length < 12){
            setErrorPhone('Should contain 12 characters')
        }
    }

    const submitForm = (e)=>{
        e.preventDefault();
        checkNameBlur();
        checkPhoneBlur();
       if (!errorName && !errorPhone) {
           console.log(userName, userPhone)
       }
    }

    const onKeydown = (e) => {
        switch (e.code) {
            case 'Escape':
                onClose()
                break
        }
    }
    useEffect(()=>{
        document.addEventListener('keydown', onKeydown)
        return () => document.removeEventListener('keydown', onKeydown)
    })

    useEffect(()=>{
        setUserName('');
        setUserPhone('');
        setErrorName('');
        setErrorPhone('');
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
                        {!errorName ? <input
                            autoFocus
                            className="modal_input"
                            type="text"
                            placeholder="Name"
                            value={userName}
                            onChange={enterName}
                            onBlur={checkNameBlur}
                            onFocus={() => setErrorName('')}
                            style={errorName ? {border: '1px solid #E43F3F'} : {border: '1px solid rgba(0, 0, 0, 0.2)'}}
                        />: <InputErrorValue
                            setError={setErrorName}
                            user={userName}
                            setUser={setUserName}
                        />}

                        {/*{errorName && <InputErrorValue />}*/}
                        {errorName && <div className="error_text">{errorName}</div>}
                        {!errorPhone ? <input
                            autoFocus
                            className="modal_input"
                            type="text"
                            placeholder="Number"
                            value={userPhone}
                            onChange={enterPhone}
                            onBlur={checkPhoneBlur}
                            onFocus={() => setErrorPhone('')}
                            style={errorPhone ? {border: '1px solid #E43F3F'} : {border: '1px solid rgba(0, 0, 0, 0.2)'}}
                        />: <InputErrorValue
                            setError={setErrorPhone}
                            user={userPhone}
                            setUser={setUserPhone}
                        />}
                        {errorPhone && <div className="error_text">{errorPhone}</div>}
                        <input type="submit" value="ORDER" className="modal_input"/>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ModalWindows;
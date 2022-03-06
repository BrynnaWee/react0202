import React, {useState} from 'react';

const EventPracticeFunc = () => {

    const [form, setForm] = useState({
        username:'',
        message: ''
    })

    const {username, message} = form;
  
    const onChange = (e) => 
    {
        const nextForm = {
            ...form,
            [e.target.name]:e.target.value
        }

        setForm(nextForm)
    }


    const onClick = (e) => {
        alert(username + ':' + message);
        setForm({username:'', message:''});
    }

    const onKeyPress = (e) => {
        if(e.key==='enter') {
            onClick();
        }
    }

    return (
        <div>
            <h1>이벤트연습(함수형컴포넌트)</h1>
            <input
                type="text"
                name="username"
                placeholder='이름을 입력하세요'
                value={username}
                onChange={onChange}
             />

             <input
                type="text"s
                name="message"
                placeholder='남길 메시지'
                value={message}
                onChange={onChange}
                onKeyPress={onKeyPress}
            />
            <button onClick={onClick}>확인</button>
        </div>
    );
};

export default EventPracticeFunc;
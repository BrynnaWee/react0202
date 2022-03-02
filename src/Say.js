import React,{useState} from 'react';

const Say = () => {

    const [ message, setMessage ] = useState(''); // 초깃값 ''(공백)을 넣어줬을 뿐 별다른 의미없다.
    const onClickEvent = () => setMessage('안녕하세요');
    const onClickLeave = () => setMessage('안녕히 가세요');

    const [ color, setColor ] = useState('black');

    return (
        <div>
            <button onClick={onClickEvent}>입장</button>
            <button onClick={onClickLeave}>퇴장</button>
            <h1 style={{color}}>{message}</h1>

            <button style={{color:'red'}} onClick={()=>setColor('red')}>빨강</button>
            <button style={{color:'green'}} onClick={()=>setColor('green')}>초록</button>
            <button style={{color:'blue'}} onClick={()=>setColor('blue')}>파랑</button>

        </div>
    );
};

export default Say;
import React,{useState} from 'react';

const IterationSample = () => {


const [inputText, setInputText] = useState('');
const [nextId, setNextId] = useState(5);
const [cities, setCities] = useState([
    {
        id: 1,
        title: '서울'
    },{
        id: 2,
        title: '대전'
    },{
        id: 3,
        title: '대구'
    },{
        id: 4,
        title: '부산'
    },{
        id: 5,
        title: '여수'
    }
]);

const onChange = e => {
    setInputText(e.target.value);
}

const onClick = e => {
    const newCities = cities.concat({
        id : nextId,//현재값 5 (미리 다음에 쓸 nextId를 구현해놓음)
        name : inputText,
    });

    setNextId(nextId+1);//6
    setCities(newCities);
    setInputText('');
}
   

const onRemove = (id) => {
    const newCities = cities.filter(item => item.id !== id);
    setCities(newCities);
}

const cityList = cities.map((name,idx) => {
    return(
        <li 
        key={`${idx}_${name.title}`}
        onClick={e=>onRemove(name.id)}>
            {name.title}
        </li>
    )});

    return (
        <>
        <input value={inputText} onChange={onChange} />
        <button onClick={onClick}>추가</button>
        <ul>{cityList}</ul>
        </>
    );
};

export default IterationSample;
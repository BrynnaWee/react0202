import React from 'react';
import PropTypes from 'prop-types';

const MyComponent = (props) => {
    
    const {name, children, city} = props;

    return (
        <div>
            안녕하세요 제 이름은 {name}입니다.
            제 props.children값은 {children}입니다.
            제가 살고 있는 도시는 {city}입니다.
        </div>
    );
};

export default MyComponent;

MyComponent.defaultProps = {
    name: 'default'
}


MyComponent.propTypes = { //야긴 컴포넌트의 속성을 의미함
    name: PropTypes.string, //여긴 import한 객체명
    city: PropTypes.string.isRequired, //필수속성
}
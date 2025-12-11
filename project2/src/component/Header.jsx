<<<<<<< HEAD
const Header = () => {
    return (
        <div className="Header">
            <h3>오늘은 </h3>
            <h1>{new Date(). toDateString()}</h1>
        </div>
    );
}
=======
import React from 'react';
import "./Header.css";

const Header = () => {
    return (
        <div className='Header'>
            <h3>오늘은 👌</h3>
            <h1>{new Date().toDateString()}</h1>
        </div>
    );
};
>>>>>>> f40a1f6919915875ca33c8551b1bedd315ab6d41

export default Header;
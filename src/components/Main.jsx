import React from 'react';
import user from './images/user.webp'
import './styles/main.css'
import Cards from './Cards';
import DetailList from './DetailList';

function Main({active,setActive}) {
    // let toggle = document.querySelector('.toggle');
    // let navigator = document.querySelector('.navigator');
    // let main = document.querySelector('.main');

    const handleClick = () => {
        setActive(!active)
    }

    return (
        <>
            <div className={active? "main active":"main"}>
                <div className="topbar">
                    <div className="toggle" onClick={handleClick}>
                        <ion-icon name="menu-outline"></ion-icon>
                    </div>
                    <div className="search">
                        <label htmlFor="">
                            <input type="text" placeholder='Search here' />
                            <ion-icon name="search-outline"></ion-icon>
                        </label>
                    </div>
                    {/* user Img  */}
                    <div className="user">
                        <img src={user} alt="Img" />
                        {/* 27:46 */}
                    </div>
                </div>
                <Cards />
                <DetailList />
            </div>

        </>
    )
}

export default Main
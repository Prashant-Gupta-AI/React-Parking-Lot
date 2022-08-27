import React from 'react';
import './styles/navigator.css'

function Navigator({active}) {
    let list = document.querySelectorAll('.navigator li')
    function activeLink(){
        list.forEach((item)=>
        item.classList.remove('hovered'));
        this.classList.add('hovered');
    }
    list.forEach((item)=>
    item.addEventListener('mouseover',activeLink));
  return (
    <>
    <div className="navigator-container">
        <div className={active?"navigator active": "navigator"}>
            <ul>
                <li>
                    <a href='/#'>
                        <span className="icon"><ion-icon name="logo-apple-appstore"></ion-icon></span>
                        <span className="title">Brand Name</span>
                    </a>
                </li>
                <li>
                    <a href='/#'>
                        <span className="icon"><ion-icon name="home-outline"></ion-icon></span>
                        <span className="title">Dashboard</span>
                    </a>
                </li>
                <li>
                    <a href='/#'>
                        <span className="icon"><ion-icon name="people-outline"></ion-icon></span>
                        <span className="title">Customers</span>
                    </a>
                </li>
                <li>
                    <a href='/#'>
                        <span className="icon"><ion-icon name="chatbubble-outline"></ion-icon></span>
                        <span className="title">Message</span>
                    </a>
                </li>
                <li>
                    <a href='/#'>
                        <span className="icon"><ion-icon name="help-circle-outline"></ion-icon></span>
                        <span className="title">Help</span>
                    </a>
                </li>
                <li>
                    <a href='/#'>
                        <span className="icon"><ion-icon name="settings-outline"></ion-icon></span>
                        <span className="title">Settings</span>
                    </a>
                </li>
                <li>
                    <a href='/#'>
                        <span className="icon"><ion-icon name="lock-closed-outline"></ion-icon></span>
                        <span className="title">Password</span>
                    </a>
                </li>
                <li>
                    <a href='/#'>
                        <span className="icon"><ion-icon name="log-out-outline"></ion-icon></span>
                        <span className="title">Sign Out</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
    </>
  )
}

export default Navigator
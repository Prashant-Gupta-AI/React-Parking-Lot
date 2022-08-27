import React, { useState, useEffect } from 'react';

function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
  }

  
function convertMsToHM(milliseconds) {
    let seconds = Math.floor(milliseconds / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);
  
    seconds = seconds % 60;
   
    minutes = seconds >= 30 ? minutes + 1 : minutes;
  
    minutes = minutes % 60;
  
    // 👇️ If you don't want to roll hours over, e.g. 24 to 00
    // 👇️ comment (or remove) the line below
    // commenting next line gets you `24:00:00` instead of `00:00:00`
    // or `36:15:31` instead of `12:15:31`, etc.
    hours = hours % 24;

    // const timeObject = {
    //     seconds: seconds,
    //     minutes:minutes,
    //     hours:hours,
    //     HM:`${padTo2Digits(hours)} hr:${padTo2Digits(minutes)} min`
    // }
    return `${padTo2Digits(days)}:${padTo2Digits(hours)}:${padTo2Digits(minutes)}` ;
  }

function Status(props) {

    // console.log(props.checkout)

    const milliseconds= (Math.abs(new Date() - new Date(props.checkout)))
    // console.log(milliseconds)
    // const [time, setTime] = useState('')

    // useEffect((milliseconds) => {
    //     setInterval(() => {
    //         setTime(convertMsToHM(milliseconds))
    //         console.log(time);
    //     }, 5000);
    //   });

    const status = () => {
        if(milliseconds > 3600000) return 'green'
        else if(milliseconds > 1800000) return 'blue'
        else if(milliseconds > 900000) return 'yellow'
        else return 'red'
    }


  return (
    <td><span className={`status ${status(milliseconds)}`}>{convertMsToHM(milliseconds)}</span></td>
  )
}

export default Status;
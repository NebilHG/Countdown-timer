import {BsStopwatch} from 'react-icons/bs'


function Timer({milliseconds,seconds, minutes, hours, changeHours, changeMinutes, changeSeconds }) {
  
    return (
      <>
        <BsStopwatch className='stop-watch' />
        <div className='timerLabel'>
            <label>hh</label>
            <input value={hours} onChange={changeHours} placeholder='0'/>
        </div>
        <div className='timerLabel '>
            <label>mm</label>
            <input value={minutes} onChange={changeMinutes} placeholder='0'/>
        </div>
        <div className='timerLabel'>
            <label>ss</label>
            <input value={seconds} onChange={changeSeconds} placeholder='0'/>
        </div>
        <div className='timerLabel'>
            <label>ms</label>
            <input value={milliseconds} placeholder='0' />
        </div></>
    
        
    )
  }
  
  export default Timer
  
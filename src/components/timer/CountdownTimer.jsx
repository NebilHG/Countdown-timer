import { useState,useEffect } from 'react'
import Timer from './Timer';
import { BsPlayBtnFill, BsPauseBtnFill, BsStopBtnFill } from 'react-icons/bs';



function CountdownTimer(){
    const [ hours, setHours] = useState(0);
    const [ minutes, setMinutes] = useState(0);
    const [ seconds, setSeconds] = useState(0);
    const [ milliseconds, setMilliseconds] = useState(0);
    const [isRunning, setIsRunning] = useState(null);

    //end of time
    const [showEndScreen, setShowEndScreen] = useState({
        show:false,
        message:'Time elapsed'
    }) 

    useEffect(() =>{
        let interval;
        if (isRunning){
            interval = setInterval(() =>{
                if (milliseconds > 0){
                    setMilliseconds((milliseconds) => milliseconds -1)

                } else if (seconds > 0){
                    setSeconds((seconds) => seconds -1)
                    setMilliseconds(99);

                } else if (minutes > 0){
                    setMinutes((minutes) => minutes -1)
                    setSeconds(59);
                    setMilliseconds(99);
                    
                } else if (hours > 0){
                    setHours((hours) => hours -1)
                    setMinutes(59);
                    setSeconds(59);
                    setMilliseconds(99);
                    
                }  
            },10);
        }

        if (hours===0 && minutes===0 && seconds===0 && milliseconds===1){
        setShowEndScreen({...showEndScreen, show:true});
        resetTimer();
        }

        return ()=> clearInterval(interval);
            }, [milliseconds,seconds, minutes, hours, isRunning, showEndScreen.show]);

// Start, Pause & Stop functions #############################
            // Start
            function startTimer(){
                if (hours!==0 || minutes!==0 || seconds!==0 || milliseconds!==0){
                    setIsRunning(true);
                    setShowEndScreen({...showEndScreen, show:false});
                    }else{
                        window.alert('Add time');
                    }
                }
            //pause    
            function pauseTimer(){
                setIsRunning(false);
            }
            //stop
            function stopTimer(){
                resetTimer();
                setShowEndScreen({...showEndScreen, show:false});
            }

            function resetTimer(){
                setIsRunning(false);
                setMilliseconds(0);
                setSeconds(0);
                setMinutes(0);
                setHours(0);
            }


    // Handlers ####################################################
            const changeHours = (event) =>{
                setHours(event.target.value)
            }; 
            const changeMinutes = (event) =>{
                setMinutes(event.target.value)
            }; 
            const changeSeconds= (event) =>{
                setSeconds(event.target.value)
            }; 

    return(
        
        <>
       {showEndScreen.show && <h1 className='title'>{showEndScreen.message}</h1>}
        <Timer 
        milliseconds={milliseconds}
        seconds={seconds} 
        minutes={minutes} 
        hours={hours} 
        changeHours={changeHours}
        changeMinutes={changeMinutes}
        changeSeconds={changeSeconds}
        />
        <br />

        {!isRunning && (<button className='btn-start' onClick={startTimer}>
            <BsPlayBtnFill/>
        </button>)}
        {isRunning && (<button className='btn-pause' onClick={pauseTimer}>
            <BsPauseBtnFill/>
        </button>)}
        {<button className='btn-stop' onClick={stopTimer}>
            <BsStopBtnFill/>
        </button>}
        </>
    )
}

export default CountdownTimer;
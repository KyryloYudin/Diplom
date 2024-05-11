import React from 'react'; 
 
interface TimeProps{
    starttime: string;
}

const Time: React.FC<TimeProps> = (props) => {
  return (
    <div className='timeinterval'>
    <div id='starttime'>{props.starttime}</div>
    </div>
  );
};

export default Time;

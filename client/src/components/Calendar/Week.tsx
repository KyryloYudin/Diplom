import React from 'react';

interface WeekProps {
    number1: string;
    day: string;
  }

const Week: React.FC<WeekProps> = (props) => {
  return (
    <div  className='day'>
    <div id='day' className='number'>
            {props.number1}
        <div id='number1' className='dayofweek'>
            {props.day}
        </div>
    </div>
    </div>
  );
};

export default Week;

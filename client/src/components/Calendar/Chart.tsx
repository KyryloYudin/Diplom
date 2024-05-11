import React from 'react';
interface ChartProps{
    namelesson:string;
    placelesson: string
    nameteacher: string;
}

const Chart: React.FC<ChartProps> = (props) => {
  return (
    <div className='lesson'>
    <div id='namelesson'>{props.namelesson}</div>
    <div id='placelesson'>{props.placelesson}</div>
    <div id='nameteacher'>{props.nameteacher}</div>
    </div>
  );
};

export default Chart;

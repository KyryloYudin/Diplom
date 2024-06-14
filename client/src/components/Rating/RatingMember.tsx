import React from 'react';


interface RatingProps {
  number: number;
  userName: string;
  Group: string;
  Rate: string;
  Nac: string;
}

const RatingMember: React.FC<RatingProps> = (props) => {
  const backgroundColor = props.number % 2 === 0 ? 'rgba(159, 28, 32, 1)' : 'rgb(161, 40, 44)';

  return (
    <div className='RatingMember' style={{ backgroundColor }}>
      <div id='number'>{props.number}</div>
      <div id='userName'>{props.userName}</div>
      <div id='group'>{props.Group}</div>
      <div id='rate'>{props.Rate}</div>
      <div id='nac'>{props.Nac}</div>
    </div>
  );
};

export default RatingMember;

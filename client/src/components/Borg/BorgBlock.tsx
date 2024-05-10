import React from 'react';
import { ReactComponent as ContactIcon } from '../../assets/images/contact.svg';


interface BorgProps {
  number: string;
  discipline: string;
  teacher: string;
  contact: string;
  ez: string;
}

const BorgBlock: React.FC<BorgProps> = (props) => {
  const backgroundColor = parseInt(props.number) % 2 === 0 ? 'rgba(159, 28, 32, 1)' : 'rgb(161, 40, 44);'; // Определяем цвет фона

  return (
    <div className='RatingMember' style={{ backgroundColor }}>
      <div id='number'>{props.number}</div>
      <div id='discipline'>{props.discipline}</div>
      <div id='teacher'>{props.teacher}</div>
      <div id='contact'><ContactIcon/>{props.contact}</div>
      <div id='ez'>{props.ez}</div>
    </div>
  );
};

export default BorgBlock;

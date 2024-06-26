import React from 'react';
import { ReactComponent as ContactIcon } from '../../assets/images/contact.svg';


interface BorgProps {
  number: number;
  nameLesson: string;
  nameTeacher: string;
  contact: string;
  ez: string;
}

const BorgBlock: React.FC<BorgProps> = (props) => {
  const backgroundColor = props.number % 2 === 0 ? 'rgba(159, 28, 32, 1)' : 'rgb(161, 40, 44)';

  return (
    <div className='RatingMember' style={{ backgroundColor }}>
      <div id='number'>{props.number}</div>
      <div id='discipline'>{props.nameLesson}</div>
      <div id='teacher'>{props.nameTeacher}</div>
      <div id='contact'>
        {/* <ContactIcon/> */}
      {props.contact}</div>
      <div id='ez'>{props.ez}</div>
    </div>
  );
};

export default BorgBlock;

import React from 'react';
import { ReactComponent as ContactIcon } from '../../assets/images/contact.svg';


interface GradeProps {
  number: string;
  discipline: string;
  teacher: string;
  contact: string;
  ez: string;
  mark: number;
  nac: number;
  ects: string;

}

const GradeBlock: React.FC<GradeProps> = (props) => {
  const backgroundColor = parseInt(props.number) % 2 === 0 ? 'rgba(159, 28, 32, 1)' : 'rgb(161, 40, 44);'; // Определяем цвет фона

  return (
    <div className='RatingMember' style={{ backgroundColor }}>
      <div id='number'>{props.number}</div>
      <div id='discipline'>{props.discipline}</div>
      <div id='contact'><ContactIcon/>{props.contact}</div>
      <div id='teacher'>{props.teacher}</div>
      <div id='ez'>{props.ez}</div>
      <div id='mark'>{props.mark}</div>
      <div id='nacGrade'>{props.nac}</div>
      <div id='ects'>{props.ects}</div>
    </div>
  );
};

export default GradeBlock;

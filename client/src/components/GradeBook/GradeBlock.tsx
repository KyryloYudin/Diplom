import React from 'react';
import { ReactComponent as ContactIcon } from '../../assets/images/contact.svg';


interface GradeProps {
  number: number;
  nameLesson: string;
  nameTeacher: string;
  contact: string;
  ez: string;
  grade: number;
  nation: string;
  ects: string;

}

const GradeBlock: React.FC<GradeProps> = (props) => {
  const backgroundColor = props.number % 2 === 0 ? 'rgba(159, 28, 32, 1)' : 'rgb(161, 40, 44)';
  return (
    <div className='RatingMember' style={{ backgroundColor }}>
      <div id='number'>{props.number}</div>
      <div id='discipline'>{props.nameLesson}</div>
      <div id='contact'>
        {/* <ContactIcon/> */}
      {props.contact}</div>
      <div id='teacher'>{props.nameTeacher}</div>
      <div id='ez'>{props.ez}</div>
      <div id='mark'>{props.grade}</div>
      <div id='nacGrade'>{props.nation}</div>
      <div id='ects'>{props.ects}</div>
    </div>
  );
};

export default GradeBlock;

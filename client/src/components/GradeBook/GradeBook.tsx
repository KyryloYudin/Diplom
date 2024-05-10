import React from 'react';
import Header from '../Header/Header';
import { ReactComponent as ArrowBack } from '../../assets/images/arrowback.svg';
import { Link } from 'react-router-dom';
import GradeBlock from '../GradeBook/GradeBlock';
import '../../styles/GradeBook.css';

const GradeBook: React.FC = () => {
    return (
      <div>
      <Header/>
      <div className='hello'>
        <div id='hello'>Залікова книжка :</div>

        <div id='semestr'>1 2 3 4 5 6 7 8 9 10 11 12</div>

        <Link to='/'>
          <div className='back'>
            <ArrowBack />
            Назад
          </div>
        </Link>
      </div>
        <div className='BlockRating'>
          <div id='BlockRating'>
        <div className='RatingMember' id='RatingHead'>
            <div id='number'>N</div>
            <div id='discipline'>Дисциплина</div>
            <div id='contact'>Контакт</div>
            <div id='teacher'>Викладач</div>
            <div id='ez'>Е\З</div>
            <div id='mark'>Оцінка</div>
            <div id='nacGrade'>Нац</div>
            <div id='ects'>ECTS</div>
          </div>
          <GradeBlock
              number={'1'}
              discipline={'Аналіз даних в Python та R'}
              teacher={'Розова Л.В. [ММІ]'}
              contact={''}
              ez={'Е Р'} 
              mark={97} 
              nac={5} 
              ects={'A'}          />
          
          </div>
        </div>
      </div>
    );
  };

export default GradeBook;
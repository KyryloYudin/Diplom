import React from 'react';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';
import { ReactComponent as ArrowBack } from '../../assets/images/arrowback.svg';
import '../../styles/Semestr.css';
import RatingMember from './RatingMember';

const Rating: React.FC = () => {
  return (
    <div>
      <Header />
      <div className='hello'>
        <div id='hello'>Рейтинг :</div>

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
            <div id='userName'>ПІБ</div>
            <div id='group'>Група</div>
            <div id='rate'>Рейтинг</div>
            <div id='nac'>Нац</div>
          </div>
          <RatingMember
            number={'1'}
            userName={'Кадацький Л.В.'}
            Group={'ІКМ-220а'}
            Rate={'92.68'}
            Nac={'5'}
          />
          <RatingMember
            number={'2'}
            userName={'Кадацький Л.В.'}
            Group={'ІКМ-220а'}
            Rate={'92.68'}
            Nac={'5'}
          />
          <RatingMember
            number={'3'}
            userName={'Кадацький Л.В.'}
            Group={'ІКМ-220а'}
            Rate={'92.68'}
            Nac={'5'}
          />
          <RatingMember
            number={'4'}
            userName={'Кадацький Л.В.'}
            Group={'ІКМ-220а'}
            Rate={'92.68'}
            Nac={'5'}
          />
        </div>
      </div>
    </div>
  );
};

export default Rating;

// src/components/Rating.tsx

import React, { useContext, useEffect, useState } from 'react';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';
import { ReactComponent as ArrowBack } from '../../assets/images/arrowback.svg';
import '../../styles/Semestr.css';
import RatingMember from './RatingMember';
import { observer } from 'mobx-react-lite';
import { Context } from '../..';

const Rating: React.FC = () => {
  const { store } = useContext(Context);
  const [selectedSemester, setSelectedSemester] = useState<number>(1);

  useEffect(() => {
    const fetchProfileAndRatings = async () => {
      try {
        await store.fetchUserProfile(store.user.id);
        await store.fetchRatings(selectedSemester);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };

    fetchProfileAndRatings();
  }, [store, selectedSemester]);

  const handleSemesterClick = (semester: number) => {
    setSelectedSemester(semester);
  };

  const sortedProfiles = store.ratings
    .filter(rating => rating.semester === selectedSemester)
    .flatMap(rating => rating.profiles)
    .sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));

  return (
    <div>
      <Header />
      <div className='hello'>
        <div id='hello'>Рейтинг :</div>

        <div id='semestr'>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(semester => (
            <span
              key={semester}
              className={`semester ${selectedSemester === semester ? 'active' : ''}`}
              onClick={() => handleSemesterClick(semester)}
            >
              {semester}
            </span>
          ))}
        </div>

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
          {sortedProfiles.map((profile, index) => (
            <RatingMember
              key={`${profile.userName}-${index}`}
              number={index + 1}
              userName={profile.userName}
              Group={profile.group}
              Rate={profile.rating}
              Nac={profile.nation}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default observer(Rating);

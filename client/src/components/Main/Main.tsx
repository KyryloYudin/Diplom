import React from 'react';
import Header from '../Header/Header';
import Profile from '../Profile/Profile';
import { ReactComponent as ProfileIcon } from '../../assets/images/profile.svg';
import { ReactComponent as MessageIcon } from '../../assets/images/message.svg';
import { ReactComponent as CalendarIcon } from '../../assets/images/calendar.svg';
import { ReactComponent as GradeBookIcon } from '../../assets/images/gradebook.svg';
import { ReactComponent as BorgIcon } from '../../assets/images/borg.svg';
import { ReactComponent as RaitingIcon } from '../../assets/images/raiting.svg';
import { Link } from 'react-router-dom';


const Main: React.FC = () => {
    return (
      <div>
        <Header/>
        <div className='hello'>
            <div id='hello'>Добрий день, юзер! Що будемо робити сьогодні?</div>
        </div>
        <div className='nav'>
            <Link to='/profile'>
              <div className='profile_nav'>
                <ProfileIcon />
                <div>Профіль</div>
              </div>
            </Link>

            <Link to='/message'>
            <div className='profile_nav'>
            <MessageIcon />
            <div>Повідомлення</div>
            </div>
            </Link>
            
            <Link to='/calendar'>
            <div className='profile_nav'>
            <CalendarIcon />            
            <div>Розклад</div>
            </div>
            </Link>

            <Link to='/gradebook'>
            <div className='profile_nav'>
              <GradeBookIcon />            
            <div>Залікова книжка</div>
            </div>
            </Link>
            

            <Link to='/borg'>
            <div className='profile_nav'>
            <BorgIcon />            
            <div>Борги</div>
            </div>
            </Link>

            <Link to='/rating'>
            <div className='profile_nav'>
            <RaitingIcon />            
            <div>Рейтинг</div>
            </div>
            </Link>
            

        </div>
      </div>
    );
  };

export default Main;
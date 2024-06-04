import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import Header from '../Header/Header';
import GridContainer from '../GridContainer';
import { ReactComponent as ArrowBack } from '../../assets/images/arrowback.svg';
import { Context } from '../..';
import ProfileService from '../../services/ProfileService';
import { IProfile } from '../../models/IProfile';

const Profile = () => {
  const { store } = useContext(Context);
  const [profile, setProfile] = useState<IProfile | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (localStorage.getItem('token')) {
          await store.checkAuth();
        }
        const userId = store.getUserId();
        if (userId) {
          const response = await ProfileService.fetchProfile(userId);
          setProfile(response.data);
          console.log(response.data);
        } else {
          console.error('User ID is not available');
        }
      } catch (error) {
        console.error('Error during authentication check:', error);
      }
    };

    fetchData();
  }, [store]);

  return (
    <div>
      <Header />
      <div className="hello">
        <div id="hello">Ваш профіль:</div>
        <Link to="/">
          <div className="back">
            <ArrowBack />
            Назад
          </div>
        </Link>
      </div>
      <div className="content">
        <div className="avatar">
          <img
            className="ava"
            alt="avatar"
            src="https://images.unsplash.com/photo-1468253327312-8e5850c46752?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <div className="changeAva">Змінити фото</div>
        </div>
        <GridContainer>
          <div>
            <div className="grid-item">ПІБ</div>
            <div className="grid-item">Курс</div>
            <div className="grid-item">Група</div>
            <div className="grid-item">Факультет/інститут</div>
            <div className="grid-item">Кафедра</div>
            <div className="grid-item">Спеціалізація/пропозиція/блок</div>
            <div className="grid-item">Спеціальність</div>
            <div className="grid-item">Освітня програма</div>
            <div className="grid-item">Рівень навчання</div>
            <div className="grid-item">Форма навчання</div>
            <div className="grid-item">Оплата</div>
          </div>
          {profile && (
            <div>
                <div className="grid-item">{profile.userName}</div>
                <div className="grid-item">{profile.course}</div>
                <div className="grid-item">{profile.group}</div>
                <div className="grid-item">{profile.faculty}</div>
                <div className="grid-item">{profile.chair}</div>
                <div className="grid-item">{profile.specialBlock}</div>
                <div className="grid-item">{profile.special}</div>
                <div className="grid-item">{profile.educationProgramm}</div>
                <div className="grid-item">{profile.studyLevel}</div>
                <div className="grid-item">{profile.studyForm}</div>
                <div className="grid-item">{profile.cost}</div>
            </div>
          )}
        </GridContainer>
      </div>
    </div>
  );
};

export default observer(Profile);

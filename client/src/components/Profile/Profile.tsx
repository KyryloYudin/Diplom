import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../Header/Header';
import GridContainer from '../GridContainer';
import { ReactComponent as ArrowBack } from '../../assets/images/arrowback.svg';
import { Link } from 'react-router-dom';

interface Profile {
  email: string;
  avatar: string;
  userName: string;
  course: string;
  group: string;
  faculty: string;
  chair: string;
  specialBlock: string;
  special: string;
  educatianProgramm: string;
  studyLevel: string;
  studyForm: string;
  cost: string;
}

const Profile = () => {
  const [profile, setProfile] = useState<Profile | null>(null);
  const userEmail = "zloiyudin@gmail.com"; // Замените на фактическую почту пользователя

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get<Profile>(`http://localhost:5000/api/profiles/profiles/${userEmail}`);
        setProfile(response.data);
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };

    fetchProfile();
  }, [userEmail]);

  if (!profile) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header />
      <div className='hello'>
        <div id='hello'>Ваш профіль:</div>
        <Link to='/'>
          <div className='back'>
            <ArrowBack />
            Назад
          </div>
        </Link>
      </div>
      <div className='content'>
        <div className='avatar'>
          <img className='ava' alt='avatar' src={profile.avatar || 'https://images.unsplash.com/photo-1468253327312-8e5850c46752?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} />
          <div className='changeAva'>Змінити фото</div>
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

          <div>
            <div className="grid-item">{profile.userName}</div>
            <div className="grid-item">{profile.course}</div>
            <div className="grid-item">{profile.group}</div>
            <div className="grid-item">{profile.faculty}</div>
            <div className="grid-item">{profile.chair}</div>
            <div className="grid-item">{profile.specialBlock}</div>
            <div className="grid-item">{profile.special}</div>
            <div className="grid-item">{profile.educatianProgramm}</div>
            <div className="grid-item">{profile.studyLevel}</div>
            <div className="grid-item">{profile.studyForm}</div>
            <div className="grid-item">{profile.cost}</div>
          </div>
        </GridContainer>
      </div>
    </div>
  );
};

export default Profile;

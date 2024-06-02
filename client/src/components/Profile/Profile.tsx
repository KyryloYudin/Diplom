import Header from '../Header/Header';
import GridContainer from '../GridContainer';
import { ReactComponent as ArrowBack } from '../../assets/images/arrowback.svg';
import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { Context } from '../..';
import { IProfile } from '../../models/IProfile';
import ProfileService from '../../services/ProfileService';
import { observer } from 'mobx-react-lite';

const Profile = () => {
  const { store } = useContext(Context);
  const [profiles, setProfiles] = useState<IProfile[]>([]);

  useEffect(() => {
      const fetchData = async () => {
          try {
              if (localStorage.getItem('token')) {
                  await store.checkAuth();
              }
              const userId = store.getUserId();
              if (userId) {
                  const response = await ProfileService.fetchProfiles(userId);
                  setProfiles(response.data);
              } else {
                  console.error("User ID is not available");
              }
          } catch (error) {
              console.error('Error during authentication check:', error);
          }
      }

      fetchData();
  }, [store]);

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
          <img className='ava' alt='avatar' src='https://images.unsplash.com/photo-1468253327312-8e5850c46752?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></img>
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
            <div className="grid-item">{profiles.map(profile => (
                    <div key={profile.id}>
                        {profile.userName}
                    </div>
                ))}</div>
            <div className="grid-item">{profiles.map(profile => (
                    <div key={profile.id}>
                        {profile.course}
                    </div>
                ))}</div>
            <div className="grid-item">{profiles.map(profile => (
                    <div key={profile.id}>
                        {profile.group}
                    </div>
                ))}</div>
            <div className="grid-item">{profiles.map(profile => (
                    <div key={profile.id}>
                        {profile.faculty}
                    </div>
                ))}</div>
            <div className="grid-item">{profiles.map(profile => (
                    <div key={profile.id}>
                        {profile.chair}
                    </div>
                ))}</div>
            <div className="grid-item">{profiles.map(profile => (
                    <div key={profile.id}>
                        {profile.specialBlock}
                    </div>
                ))}</div>
            <div className="grid-item">{profiles.map(profile => (
                    <div key={profile.id}>
                        {profile.special}
                    </div>
                ))}</div>
            <div className="grid-item">{profiles.map(profile => (
                    <div key={profile.id}>
                        {profile.educationProgramm}
                    </div>
                ))}</div>
            <div className="grid-item">{profiles.map(profile => (
                    <div key={profile.id}>
                        {profile.studyLevel}
                    </div>
                ))}</div>
            <div className="grid-item">{profiles.map(profile => (
                    <div key={profile.id}>
                        {profile.studyForm}
                    </div>
                ))}</div>
            <div className="grid-item">{profiles.map(profile => (
                    <div key={profile.id}>
                        {profile.cost}
                    </div>
                ))}</div>
          </div>
        </GridContainer>
      </div>
    </div>
  );
}

export default observer(Profile);

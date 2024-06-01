
import Header from '../Header/Header';
import GridContainer from '../GridContainer';
import { ReactComponent as ArrowBack } from '../../assets/images/arrowback.svg';
import { Link } from 'react-router-dom';


const Profile = () => {
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
        <img className='ava' alt='avatar' src='https://images.unsplash.com/photo-1468253327312-8e5850c46752?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></img>          <div className='changeAva'>Змінити фото</div>
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
          <div className="grid-item">Юдін К.В.</div>
          <div className="grid-item">4</div>
          <div className="grid-item">ІКМ-220Б</div>
          <div className="grid-item">Навчально-науковий інститут комп'ютерного моделювання, прикладної фізики та математики</div>
          <div className="grid-item">Математичне моделювання та інтелектуальні обчислення в інженерії</div>
          <div className="grid-item">Моделювання процесів, обробка та аналіз даних</div>
          <div className="grid-item"> </div>
          <div className="grid-item">Комп`ютерні науки. Моделювання, проектування та комп'ютерна графіка</div>
          <div className="grid-item">Бакалавр</div>
          <div className="grid-item">Денна</div>
          <div className="grid-item">Бюджет</div>
          </div>
          </GridContainer>
          
          </div>
    </div>
  );
};

export default Profile;

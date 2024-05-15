import React from 'react';
import Header from '../Header/Header';
import Week from './Week';
import { Link } from 'react-router-dom';
import { ReactComponent as ArrowBack } from '../../assets/images/arrowback.svg';
import { ReactComponent as ArrowRight } from '../../assets/images/arrowright.svg';
import { ReactComponent as ArrowLeft } from '../../assets/images/arrowleft.svg';
import '../../styles/Calendar.css';
import Chart from './Chart';
import Time from './Time';


const Calendar: React.FC = () => {
    return (
      <div>
      <Header/>
      <div className='hello'>
        <div className='date'>
        <ArrowLeft/><ArrowRight className='arrowright'/>травень 2024
        </div>
        <Link to='/'>
          <div className='back'>
            <ArrowBack />
            Назад
          </div>
        </Link>
        </div>
        <div className='MainCalendar'>
          <div className='week'>
            <Week number1={'06'} day={'Понеділок'} />
            <Week number1={'07'} day={'Вівторок'} /> 
            <Week number1={'08'} day={'Середа'} /> 
            <Week number1={'09'} day={'Четвер'} /> 
            <Week number1={'10'} day={"П'ятниця"} /> 
            <Week number1={'11'} day={'Субота'} />  
          </div>

          <div className='time'>
            <Time starttime={'08:30-10:00'} />
            <Time starttime={'10:30-12:00'} />
            <Time starttime={'12:30-14:00'} />
            <Time starttime={'14:30-16:00'} />
            <Time starttime={'16:30-18:00'} />
            <Time starttime={'18:30-20:00'} />
          </div>
          <div className='chart'>
            <Chart namelesson={'English'} placelesson={'Microsoft Teams Meeting'} nameteacher={'Вікторія Володимірівна Гращенкова'}/>
            <Chart namelesson={''} placelesson={''} nameteacher={''}/>
            <Chart namelesson={''} placelesson={''} nameteacher={''}/>
            <Chart namelesson={'Обробка сигналів та зображень'} placelesson={'Microsoft Teams Meeting'} nameteacher={'Олексій Олександрович Водка'}/>
            <Chart namelesson={'Програмування та підтримка web-застосувань(ЛК)'} placelesson={'Microsoft Teams Meeting'} nameteacher={'Андрій Сергійович Хорошун'}/>
            <Chart namelesson={'English'} placelesson={'Microsoft Teams Meeting'} nameteacher={'Вікторія Володимірівна Гращенкова'}/>
            
            <Chart namelesson={'English'} placelesson={'Microsoft Teams Meeting'} nameteacher={'Вікторія Володимірівна Гращенкова'}/>
            <Chart namelesson={''} placelesson={''} nameteacher={''}/>
            <Chart namelesson={''} placelesson={''} nameteacher={''}/>
            <Chart namelesson={'Обробка сигналів та зображень'} placelesson={'Microsoft Teams Meeting'} nameteacher={'Олексій Олександрович Водка'}/>
            <Chart namelesson={'Програмування та підтримка web-застосувань(ЛК)'} placelesson={'Microsoft Teams Meeting'} nameteacher={'Андрій Сергійович Хорошун'}/>
            <Chart namelesson={'Економічний аналіз(ЛК)'} placelesson={'Microsoft Teams Meeting'} nameteacher={'Сергій Миколойович Погорєлов'}/>
            
            <Chart namelesson={''} placelesson={''} nameteacher={''}/>
            <Chart namelesson={''} placelesson={''} nameteacher={''}/>
            <Chart namelesson={'Системний аналіз(Лаб)'} placelesson={'Microsoft Teams Meeting'} nameteacher={'Сергій Юрийович Місюра'}/>
            <Chart namelesson={''} placelesson={''} nameteacher={''}/>
            <Chart namelesson={''} placelesson={''} nameteacher={''}/>
            <Chart namelesson={''} placelesson={''} nameteacher={''}/>
            
            <Chart namelesson={''} placelesson={''} nameteacher={''}/>
            <Chart namelesson={''} placelesson={''} nameteacher={''}/>
            <Chart namelesson={''} placelesson={''} nameteacher={''}/>
            <Chart namelesson={'Нейронні мережі і машине навчання'} placelesson={'Microsoft Teams Meeting'} nameteacher={'Юлія Андріївна Вязовиченко'}/>
            <Chart namelesson={''} placelesson={''} nameteacher={''}/>
            <Chart namelesson={'Нейронні мережі і машине навчання'} placelesson={'Microsoft Teams Meeting'} nameteacher={'Юлія Андріївна Вязовиченко'}/>
            
            <Chart namelesson={''} placelesson={''} nameteacher={''}/>
            <Chart namelesson={''} placelesson={''} nameteacher={''}/>
            <Chart namelesson={''} placelesson={''} nameteacher={''}/>
            <Chart namelesson={'Нейронні мережі і машине навчання'} placelesson={'Microsoft Teams Meeting'} nameteacher={'Юлія Андріївна Вязовиченко'}/>
            <Chart namelesson={''} placelesson={''} nameteacher={''}/>
            <Chart namelesson={'Нейронні мережі і машине навчання'} placelesson={'Microsoft Teams Meeting'} nameteacher={'Юлія Андріївна Вязовиченко'}/>
            
            <Chart namelesson={''} placelesson={''} nameteacher={''}/>
            <Chart namelesson={''} placelesson={''} nameteacher={''}/>
            <Chart namelesson={''} placelesson={''} nameteacher={''}/>
            <Chart namelesson={''} placelesson={''} nameteacher={''}/>
            <Chart namelesson={''} placelesson={''} nameteacher={''}/>
            <Chart namelesson={''} placelesson={''} nameteacher={''}/>

          </div>
        </div>






      </div>
    );
  };

export default Calendar;
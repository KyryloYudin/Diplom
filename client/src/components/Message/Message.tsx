import React from 'react';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';
import { ReactComponent as ArrowBack } from '../../assets/images/arrowback.svg';
import Last_message from '../Message/Last_message';

const Message: React.FC = () => {
    return (
      <div>
      <Header/>
      <div className='hello'>
        <div id='hello'>Мессенджер:</div>
          <Link to='/'>
            <div className='back'>
              <ArrowBack />
                Назад
            </div>
          </Link>
      </div>

      <div className='chat'>
          <div className='last_message'>
            <div className='search_message'>Пошук</div>
            <Last_message
            userName='Барак Обама'
            time='13:20'
            message='Я відправлю сюди код від ядерки, добре?'/>
            <Last_message
            userName='Обама'
            time='13:50'
            message='Я сюди від ядерки, добре?'/>
          </div>

          <div className='chat_now'>
            <div>Оберіть, кому хотіли б написати</div>
          </div>
      </div>


      </div>
    );
  };

export default Message;
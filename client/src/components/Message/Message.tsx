import React, { useState } from 'react';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';
import { ReactComponent as ArrowBack } from '../../assets/images/arrowback.svg';
import LastMessage from '../Message/Last_message';
import OpenMessage from './Open_message';

const Message: React.FC = () => {
  const [chatVisible, setChatVisible] = useState(false);

  const handleChatClick: React.MouseEventHandler<HTMLDivElement> = () => {
    setChatVisible(true);
  };

  return (
    <div>
      <Header />
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
        <div className='LeftColumb'>
          <div className='LeftColumbMain'>
            <div className='LeftMainHeader'>
              <div className='left-header'>
                <div className='SearchInput'>
                <input className='message_input' placeholder='Пошук' />
                </div>
              </div>
            </div>
            <div className='LeftMain'>
              <div className='ChatFolders'>
                <div className='TransitionLeft'>
                  <div className='Transition_slide'>
                    <div className='chat-list custom-scroll'>
                      <div>
                        <div className='ListItem'>
                          <div onClick={handleChatClick}>
                            <LastMessage
                              userName='Барак Обама'
                              time='13:20'
                              message='Я відправлю сюди код від ядерки, добре?'
                            />
                          </div>
                          <div onClick={handleChatClick}>
                            <LastMessage
                              userName='Барак Обама'
                              time='13:20'
                              message='Я відправлю сюди код від ядерки, добре?'
                            />
                          </div>
                          <div onClick={handleChatClick}>
                            <LastMessage
                              userName='Барак Обама'
                              time='13:20'
                              message='Я відправлю сюди код від ядерки, добре?'
                            />
                          </div>
                          <div onClick={handleChatClick}>
                            <LastMessage
                              userName='Барак Обама'
                              time='13:20'
                              message='Я відправлю сюди код від ядерки, добре?'
                            />
                          </div>
                          <div onClick={handleChatClick}>
                            <LastMessage
                              userName='Барак Обама'
                              time='13:20'
                              message='Я відправлю сюди код від ядерки, добре?'
                            />
                          </div>
                          <div onClick={handleChatClick}>
                            <LastMessage
                              userName='Барак Обама'
                              time='13:20'
                              message='Я відправлю сюди код від ядерки, добре?'
                            />
                          </div>
                          <div onClick={handleChatClick}>
                            <LastMessage
                              userName='Барак Обама'
                              time='13:20'
                              message='Я відправлю сюди код від ядерки, добре?'
                            />
                          </div>
                          <div onClick={handleChatClick}>
                            <LastMessage
                              userName='Барак Обама'
                              time='13:20'
                              message='Я відправлю сюди код від ядерки, добре?'
                            />
                          </div>
                          <div onClick={handleChatClick}>
                            <LastMessage
                              userName='Барак Обама'
                              time='13:20'
                              message='Я відправлю сюди код від ядерки, добре?'
                            />
                          </div>
                          <div onClick={handleChatClick}>
                            <LastMessage
                              userName='Барак Обама'
                              time='13:20'
                              message='Я відправлю сюди код від ядерки, добре?'
                            />
                          </div>
                          <div onClick={handleChatClick}>
                            <LastMessage
                              userName='Барак Обама'
                              time='13:20'
                              message='Я відправлю сюди код від ядерки, добре?'
                            />
                          </div>
                          <div onClick={handleChatClick}>
                            <LastMessage
                              userName='Барак Обама'
                              time='13:20'
                              message='Я відправлю сюди код від ядерки, добре?'
                            />
                          </div>
                          <div onClick={handleChatClick}>
                            <LastMessage
                              userName='Барак Обама'
                              time='13:20'
                              message='Я відправлю сюди код від ядерки, добре?'
                            />
                          </div>
                          <div onClick={handleChatClick}>
                            <LastMessage
                              userName='Барак Обама'
                              time='13:20'
                              message='Я відправлю сюди код від ядерки, добре?'
                            />
                          </div>
                          <div onClick={handleChatClick}>
                            <LastMessage
                              userName='Барак Обама'
                              time='13:20'
                              message='Я відправлю сюди код від ядерки, добре?'
                            />
                          </div>
                          <div onClick={handleChatClick}>
                            <LastMessage
                              userName='Барак Обама'
                              time='13:20'
                              message='Я відправлю сюди код від ядерки, добре?'
                            />
                          </div>
                        
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

            </div>




            {/* <input className='message_input' placeholder='Пошук' /> */}
          </div>

          {/* <div onClick={handleChatClick}>
            <LastMessage
              userName='Барак Обама'
              time='13:20'
              message='Я відправлю сюди код від ядерки, добре?'
            />
          </div>
          <div onClick={handleChatClick}>
            <LastMessage
              userName='Барак Обама'
              time='13:20'
              message='Я відправлю сюди код від ядерки, добре?'
            />
          </div> */}
        </div>

        <div className='chat_now'>
          {chatVisible ? <OpenMessage /> : 
          <div id='chat_now'>
            Оберіть, кому хотіли б написати
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default Message;

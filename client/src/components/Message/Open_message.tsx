import React, { useState } from 'react';
import Last_message from './Last_message';

const Open_message: React.FC = () => {
  return (
    <div>
      {/* <div className='left_message'>
            <img className='mini_ava' alt='avatar' src='https://images.unsplash.com/photo-1580130379624-3a069adbffc5?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></img>
            <div className='info_message'>
            <div className='name_user'>
              Барак Обама
            </div>
            <div className='message_user'>
                Був 5 хвилин тому...
            </div>
            </div>
        </div> */}
        {/* <div className='message_board'>
        <input className='message_input' placeholder="Написати повідомлення..."/>
      </div> */}

    <div className='MiddleHeader'>
        <div className='left_message'>
            <img className='mini_ava' alt='avatar' src='https://images.unsplash.com/photo-1580130379624-3a069adbffc5?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></img>
            <div className='info_message'>
            <div className='name_user'>
              Барак Обама
            </div>
            <div className='message_user'>
                Був 5 хвилин тому...
            </div>
            </div>
        </div>
    </div>
    <div className='Transition'>
      <div className='MessageList'>
        <div className='MessageContainer'>
          <div id='message1' className='MessageElement'>
            <div className='MessageTitle'>
            <span className='MessageTitleName'>Барак Обама</span>
            </div>
            <div className='textcontent'>
            Я відправлю сюди код від ядерки, добре?
            <span className='MessageMeta'>14:20</span>
            </div>
          </div>
        </div>
        <div className='MessageContainer'>
          <div id='message1' className='MessageElement'>
            <div className='MessageTitle'>
            <span className='MessageTitleName'>Барак Обама</span>
            </div>
            <div className='textcontent'>
            Я відправлю сюди код від ядерки, добре?
            <span className='MessageMeta'>14:20</span>
            </div>
          </div>
        </div>
      </div>
      
    </div>
    
    </div>
  );
};

export default Open_message;

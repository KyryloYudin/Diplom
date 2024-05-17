import React, { useState } from 'react';
import Last_message from './Last_message';
import GetMessage from './GetMessage';
import SendMessage from './SendMessage';
import { ReactComponent as SendIcon } from '../../assets/images/send.svg';
import { ReactComponent as FileAddIcon } from '../../assets/images/fileadd.svg';


const Open_message: React.FC = () => {
  return (
    <div className='RightMessage'>
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
        <GetMessage userName={''} time={'14:20'} message={'Завтра зустрінемося?Завтра зустрінемося?Завтра зустрінемося?Завтра зустрінемося?Завтра зустрінемося?Завтра зустрінемося?Завтра зустрінемося?Завтра зустрінемося?Завтра зустрінемося?Завтра зустрінемося?'} />
        <SendMessage userName={''} time={'14:21'} message={'Го'} />
        
      </div>
      <div className='MessageFooter'>
        <div className='Composer'>
        <FileAddIcon />
          <div className='Wrapper'>
            <div className='MessageInput'>
              <div id='MessageInputText'>
              <input className='message_input form-control' placeholder="Написати повідомлення..."/>
              </div>

            </div>
          </div>
          <SendIcon />
        </div>
      </div>
    </div>
    
    </div>
  );
};

export default Open_message;

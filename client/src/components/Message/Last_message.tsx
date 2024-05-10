import React, { useState } from 'react';

interface LastMessageProps {
  userName: string;
  time: string;
  message: string;
}

const Last_message: React.FC<LastMessageProps> = (props) => {


    return (
      <div>
        <div className='left_message'>
            <img className='mini_ava' alt='avatar' src='https://images.unsplash.com/photo-1580130379624-3a069adbffc5?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></img>
            <div className='info_message'>
            <div className='name_user'>
                {props.userName}
                <div className='time_message'>{props.time}</div>
            </div>
            <div className='message_user'>
                {props.message}
            </div>
            </div>
        </div>
      </div>
    );
  };

export default Last_message;

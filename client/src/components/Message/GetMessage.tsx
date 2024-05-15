import React, { useState } from 'react';

interface GetMessageProps {
  userName: string;
  time: string;
  message: string;
}

const Last_message: React.FC<GetMessageProps> = (props) => {


    return (
      <div>
        <div className='MessageContainer' id='getmessage'>
          <div id='message1' className='MessageElement'>
            <div className='MessageTitle'>
            <span className='MessageTitleName'>{props.userName}</span>
            </div>
            <div className='textcontent'>
            {props.message}
            <span className='MessageMeta'>{props.time}</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default Last_message;

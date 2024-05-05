import React from 'react';
import Profile from '../Profile/Profile';
import Main from '../Main/Main';
import { Route, Link, Routes, Router} from 'react-router-dom';
import Borg from '../Borg/Borg';
import Message from '../Message/Message';
import Calendar from '../Calendar/Calendar';
import GradeBook from '../GradeBook/GradeBook';
import Rating from '../Rating/Rating';

const Navogator: React.FC = () => {
    return (
      <div>
      <Routes>
          <Route path='/' element={<Main/>} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/message' element={<Message />} />
          <Route path='/calendar' element={<Calendar />} />
          <Route path='/gradebook' element={<GradeBook />} />
          <Route path='/borg' element={<Borg />} />
          <Route path='/rating' element={<Rating />} />
        </Routes>
      </div>
    );
  };

export default Navogator;
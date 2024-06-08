import React, { useContext, useEffect, useState } from 'react';
import Header from '../Header/Header';
import { ReactComponent as ArrowBack } from '../../assets/images/arrowback.svg';
import { Link } from 'react-router-dom';
import '../../styles/Borg.css';
import BorgBlock from './BorgBlock';
import { Context } from '../..';
import GradeService from '../../services/GradeService';


const Borg: React.FC = () => {
  const { store } = useContext(Context);
  const [selectedSemester, setSelectedSemester] = useState<string>('1');

  useEffect(() => {
    const fetchGrades = async () => {
      const profileId = store.getProfileId();
      if (profileId) {
        try {
          const response = await GradeService.fetchGrades(profileId);
          store.setGrades(response.data);
        } catch (error) {
          console.error('Failed to fetch grades:', error);
        }
      }
    };

    fetchGrades();
  }, [store]);

  const handleSemesterClick = (semester: string) => {
    setSelectedSemester(semester);
  }

  const filteredDebts = store.grades.filter(
    grade => grade.semestr === selectedSemester && !grade.grade
  );

  return (
      <div>
      <Header/>
      <div className='hello'>
        <div id='hello'>Борги :</div>

        <div id='semestr'>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(semester => (
            <span
            key={semester}
            className={`semester ${selectedSemester === semester.toString() ? 'active' : '' }`}
            onClick={() => handleSemesterClick(semester.toString())}
          >
            {semester}
          </span>
          ))}
        </div>

        <Link to='/'>
          <div className='back'>
            <ArrowBack />
            Назад
          </div>
        </Link>
      </div>
        <div className='BlockRating'>
          <div id='BlockRating'>
        <div className='RatingMember' id='RatingHead'>
            <div id='number'>N</div>
            <div id='discipline'>Дисциплина</div>
            <div id='teacher'>Викладач</div>
            <div id='contact'>Контакт</div>
            <div id='ez'>Е\З</div>
          </div>
          {filteredDebts.length > 0 ? (
            filteredDebts.map((debt, index) => (
              <BorgBlock
                key={debt._id}
                number={index + 1}
                nameLesson={debt.nameLesson}
                nameTeacher={debt.nameTeacher}
                contact={debt.contact}
                ez={debt.ez}
              />
            ))
          ) : (
            <div>No debts found.</div>
          )}
          </div>
        </div>





      </div>
    );
  };

export default Borg;
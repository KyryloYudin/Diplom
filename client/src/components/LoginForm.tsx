import React, {FC, useContext, useState} from 'react';
import { Context } from '..';
import { observer } from 'mobx-react-lite';
import TopInfo from './TopInfo/TopInfo';





const LoginForm: FC = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const {store} = useContext(Context);

  return (
    <div className="enter">
      <TopInfo/>
      <div className="enter_in_cabinet">Увійти до кабінету</div>
      <div className='login'>
        <div className='text_login'>
        <label htmlFor="log" className='text_form'>Email:</label>
        <input 
            onChange={e => setEmail(e.target.value)}
            value={email}
            type="text"
            placeholder='email'
            className='log'
        />
        <label htmlFor="log" className='text_form'>Password:</label>
        <input 
            onChange={e => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder='password'
            className='pass'
        />
        </div>
        <button className='send' onClick={() => store.login(email, password)}>Enter</button>
        {/* <button onClick={() => store.registration(email, password)}>Registration</button> */}
        </div>
        <div className="support">
        <div>
          Пошта підтримки support.cabinet@khpi.edu.ua
          <br />
          Пошта підтримки studcabinet@kpi.kharkov.ua
        </div>
      </div>
    </div>
  );
};

export default observer(LoginForm);
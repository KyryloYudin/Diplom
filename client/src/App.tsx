import React, { FC, useContext, useEffect, useState } from 'react';
import LoginForm from './components/LoginForm';
import { Context } from '.';
import { observer } from 'mobx-react-lite';
import { IUser } from './models/IUser';
import UserService from './services/UserService';
import Sidebar from './components/Sidebar/Sidebar';
import './components/Sidebar/Sidebar.css';
import './styles/LoginForm.css';
import './styles/App.css';
import './styles/Header.css';
import './styles/Main.css';
import './styles/GridContainer.css';
import './styles/Message.css';
import Navogator from './components/Navigator/Navigator';



const App: FC = () => {
  const { store } = useContext(Context);
  // const [users, setUsers] = useState<IUser[]>([]);
  const [loading, setLoading] = useState(true); // Состояние загрузки

  useEffect(() => {
    async function fetchData() {
      try {
        if (localStorage.getItem('token')) {
          await store.checkAuth();
        }
        setLoading(false); // Помечаем, что загрузка завершена
      } catch (error) {
        console.error('Error during authentication check:', error);
        setLoading(false); // Помечаем, что загрузка завершена
      }
    }

    fetchData();
  }, [store]);

  // async function getUsers() {
  //   try {
  //     const response = await UserService.fetchUsers();
  //     setUsers(response.data);
  //   } catch (error) {
  //     console.error('Error fetching users:', error);
  //   }
  // }

  if (loading) {
    return <div>Loading...</div>; // Показываем индикатор загрузки
  }

  if (!store.isAuth) {
    return (
      <div>
        <Sidebar />
        <LoginForm />
      </div>
    );
  }

  return (
    <div>
      <Navogator />
      {/* <h1>{store.isAuth ? `User auth ${store.user.email}` : 'Auth pls!'}</h1>
      <h2>{store.user.isActivated ? 'Acc activation in mail' : 'Activate acc!'}</h2> */}
      <button onClick={() => store.logout()}>Exit</button>
      {/* <button onClick={getUsers}>Get all users</button> */}
      {/* <div>
        <button onClick={getUsers}>Get all users</button>
      </div> */}
      {/* {users.map(user => (
        <div key={user.email}>{user.email}</div>
      ))} */}
    </div>
  );
};

export default observer(App);

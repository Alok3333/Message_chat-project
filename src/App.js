import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Hedaer.jsx';
import TopNotification from './Components/Notifications/Top_Notification';
// import LinksExample from './Components/link';
// import  CardGroup  from '../src/Components/Cards/card';
import Login from '../src/pages/login/Login';
// import UserList from './pages/userList/UserList';
import Todolist from './pages/TodoList/Todolist';

function App() {
  return (
    <>
      <div className="main">
        <Header/>
        <TopNotification/>
        <div className="container">
          {/* <UserList/> */}
          <Todolist/>
        </div>
        

      </div>
        {/* <LinksExample/> */}
        {/* <CardGroup/> */}
        <Login/>
        <button className='btn btn-danger'>what is memo in react ?</button>
      
    </>
  );
}

export default App;

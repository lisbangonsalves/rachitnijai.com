import React,{useState,useContext,useEffect} from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route,Redirect } from 'react-router-dom';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Admin from './components/pages/Admin';
import Login from './components/pages/Login';
import UserState from './context/Users/UserState';
import userContext from './context/Users/UserContext';

function App() {
  const  context = useContext(userContext);
 let success=false
  const host = "http://localhost:5000"
  // const { user,getUser } = context;
  //   useEffect(() => {
  //       getUser()
  //       // eslint-disable-next-line
  //   }, [])
  // console.log(user)
  const c=[]
  const [user, setuser] = useState(c)
  
  const getUser = async () => {
    // API Call 
    const response = await fetch(`http://localhost:5000/api/auth/getuser`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      }
    });
    const json = await response.json() 
    if (json.success) {
      setuser(json.user)
      let success=true
    }
    else
    {
      setuser(null)
      let success=false
    }
  }
  
useEffect(() => {
  
  getUser();
}, [user])
  return (
    <>
    <UserState>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
        
          <Route exact path="/admin"  component={user?Admin:Login} />

          <Route path='/login' component={Login} />
        </Switch>
      </Router>
      </UserState>
    </>
  );
}

export default App;

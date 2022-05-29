
import './App.css';
import React, { useEffect,useState } from 'react';

function App() {

const names = ['Juan', 'Pedro', 'Maria', 'Luis', 'Jorge'];

const careers = [
  {
    name: 'Developer',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.'
  },
  {
    name: 'Designer',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.'
  },
  {
    name: 'Teacher',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.'
  }
];





  return (
    <div className="App">

      <ul>
        {names.map(name => <li>{name}</li>)}
      </ul>

      <Details name="Tanvir" career="Software Engineer"/>
      <Details name="Zahid" career="Software Developer"/>
      <Details name="Owali" career="Software Engineer"/>

      {
        careers.map(career => <Career name={career.name} description={career.description}/>)
      }


      <Counter/>

      <Dynamicusers/>
    </div>
  );
}

function Details(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.career}</h2>
    </div>
  );
}

function Career(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.description}</h2>
    </div>
  );
}

function Counter(){
  const countStyle = {
    fontSize: '50px',
    fontWeight: 'bold',
    color: 'red',
    textAlign: 'center',
    marginTop: '50px',
    marginBottom: '50px',
    border: '1px solid black',
    padding: '10px',
    


  }
  const [count, setCount] = useState(0);
  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => setCount(count - 1);
  return (
    <div style={countStyle}>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  );
}


// show users

function Dynamicusers() {




  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])
  return (
    <div>
      <h3>Dynamic Users</h3>
      <ul>
        {
          users.map(user => <Showusers name={user.name} email={user.email}/>)
        }
      </ul>
    </div>
  );
}


// for user

function Showusers(props){

  const userStyle = {
    border: '1px solid black',
    margin: '10px',
    padding: '10px',
    backgroundColor: 'lightgray',
    textAlign: 'center',

  }

  return (
    <div style={userStyle}>
      <h3>Dynamic Users: {props.name}</h3>
      <p>Dynamic Email: {props.email}</p>
    </div>
  );
}

export default App;

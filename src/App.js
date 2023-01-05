import React, { useState } from 'react';
import Form from './Components/Form';
import './App.css';

function App() {
  const [teamMembers, setTeamMembers] = useState([]);
  const [values, setValues] = useState({ name: '', email: '', role: '' });

  return (
    <div>
      <h1>Team Builder</h1>
      <Form 
        values={values}
      />
    </div>
  );
}

export default App;

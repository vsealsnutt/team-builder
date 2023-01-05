import React, { useState } from 'react';
import Form from './Components/Form';
import './App.css';

function App() {
  const [teamMembers, setTeamMembers] = useState([]);
  const [values, setValues] = useState({ name: '', email: '', role: '' });

  const onChange = (name, value) => {
    setValues({...values, [name]: value});
  }

  const onSubmit = () => {
    setTeamMembers([values, ...teamMembers]);
    setValues({name: '', email: '', role: ''});
  }

  return (
    <div>
      <h1>Team Builder</h1>
      <Form 
        values={values}
        change={onChange}
        submit={onSubmit}
      />
      {teamMembers.map((member, idx) => {
        return (
          <div key={idx}>
            {member.name}, {member.email}, {member.role}
          </div>
        )
      })}
    </div>
  );
}

export default App;

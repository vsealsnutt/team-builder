import React from 'react';

const Form = (props) => {

    const handleChange = event => {
        const { name, value } = event.target;
        props.handleChange(name, value);
    }

    return (
        <form>
            <label>Name
                <input
                    type='text'
                    name='name'
                    placeholder='Enter your name'
                    value={values.name}
                    onChange={handleChange}
                />
            </label>
            <label>Email
                <input
                    type='email'
                    name='email'
                    placeholder='Enter your email'
                    value={values.email}
                    onChange={handleChange}
                />
            </label>
            <label>Role
                <select value={values.role} name='role' onChange={handleChange}>
                    <option value=''>--- Select a Role ---</option>
                    <option value='frontend engineer'>Frontend Engineer</option>
                    <option value='backend engineer'>Backend Engineer</option>
                    <option value='fullstack engineer'>Full-Stack Engineer</option>
                    <option value='designer'>UX/UI Designer</option>
                    <option value='qa engineer'>QA Engineer</option>
                    <option value='project manager'>Project Manager</option>
                </select>
            </label>
        </form>
    )
}

export default Form;
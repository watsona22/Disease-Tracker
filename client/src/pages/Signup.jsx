import Header from "../components/Header";

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import '../styles/Signup.css';


import Auth from '../utils/auth';

const Signup = () => {
    const [formState, setFormState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    });
    const [addUser, { error, data }] = useMutation(ADD_USER);
    // console.log(data);
    // update state based on form input changes
    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    // submit form
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);

        try {
            const { data } = await addUser({
                variables: { ...formState },
            });

            Auth.login(data.addUser.token);
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <main className="signup-page-container">
            {/* <div className="col-12 col-lg-10"> */}
            {/* <div className="card"> */}
            <h2>Signup</h2>

            {/* <div className="card-body"> */}
            {data ? (
                <p>
                    Success! You may now head{' '}
                    <Link to="/">back to the homepage.</Link>
                </p>
            ) : (
                <form onSubmit={handleFormSubmit}>
                    <input
                        // className="form-input"
                        placeholder="First Name"
                        name="firstName"
                        type="text"
                        value={formState.firstName}
                        onChange={handleChange}
                    />
                    <input
                        // className="form-input"
                        placeholder="Last Name"
                        name="lastName"
                        type="text"
                        value={formState.lastName}
                        onChange={handleChange}
                    />
                    <input
                        // className="form-input"
                        placeholder="Your email"
                        name="email"
                        type="email"
                        value={formState.email}
                        onChange={handleChange}
                    />
                    <input
                        // className="form-input"
                        placeholder="******"
                        name="password"
                        type="password"
                        value={formState.password}
                        onChange={handleChange}
                    />
                    <button
                        // className="btn btn-block btn-info"
                        style={{ cursor: 'pointer' }}
                        type="submit"
                    >
                        Submit
                    </button>
                </form>
            )}

            {error && (
                <div>
                    {error.message}
                </div>
            )}
            {/* </div> */}
            {/* </div> */}
            {/* </div> */}
        </main>
    );
};

export default Signup;

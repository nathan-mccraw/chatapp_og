import React from "react";
import axios from "axios";
import { useState } from "react";
import outpost from "../Photos/OutPost.jpg"

const SignIn = ({ setUser, showRegisterModal }) => {
    const [formState, setFormState] = useState({
        username: "",
        password: "",
        confirmPassword: "",
        newUser: false,
    });

    const signIn = async (e) => {
        e.preventDefault();
        let res = await axios.post("/api/signin", formState);
        if (res.data !== "Wrong Password")
            setUser(res.data);
    };

    const formChange = (e) => {
        if (e.target.type === 'checkbox') {
            setFormState({ ...formState, [e.target.name]: e.target.checked });
        } else {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    }

    return (
        <div className="row d-flex justify-content-center vh-100" id="signIn">
                <form id="signInForm" className="align-self-end" action="submit" onSubmit={signIn}>
                    <div className="row">
                        <div className="input-group mb-3">
                            <span className="input-group-text">User Name:</span>
                            <input
                                type="text"
                                value={formState.username}
                                onChange={formChange}
                                name="username"
                                className="form-control"
                                placeholder="20 Character Maximum"
                                aria-label="Sizing example input"
                                aria-describedby="inputGroup-sizing-default"
                                required
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-group mb-3">
                            <span className="input-group-text">Password:</span>
                            <input
                                type="password"
                                value={formState.password}
                                onChange={formChange}
                                name="password"
                                className="form-control"
                                placeholder="Minimum 4 digits"
                                aria-label="Sizing example input"
                                aria-describedby="inputGroup-sizing-default"
                                required
                            />
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-auto mb-4">
                            <button type="submit" className="btn btn-success">
                                Sign In
                            </button>
                        </div>
                    </div>
                    <div className="row justify-content-center h6">
                        <button type="button" className="btn btn-outline-primary border-0 mb-4" onClick={showRegisterModal}>
                            Register As New User
                        </button>
                    </div>
                </form>
        </div>
    );
};
export default SignIn;
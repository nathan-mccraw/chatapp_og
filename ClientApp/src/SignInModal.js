import React from "react";

const SignInModal = ({ formState, signIn, formChange, showRegisterModal }) => {
    return (
        <div>
            <form action="submit" onSubmit={signIn}>
                <div className="row">
                    <div className="input-group mb-3">
                        <span className="input-group-text">User Name:</span>
                        <input
                            type="text"
                            value={formState.userName}
                            onChange={formChange}
                            name="userName"
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
                            value={formState.userPassword}
                            onChange={formChange}
                            name="userPassword"
                            className="form-control"
                            placeholder="Minimum 4 digits"
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-default"
                            required
                        />
                    </div>
                </div>
                <div className="row align-items-baseline">
                    <div className="col-auto pe-0">
                        <label className="form-check-label" htmlFor="NewUser">
                            New User?
                        </label>
                    </div>
                    <div className="col-auto">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            value={formState.newUser}
                            onChange={formChange}
                            name="newUser"
                            id="NewUser"
                        />
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-auto mb-4">
                        <button type="submit" className="btn btn-outline-success">
                            Sign In
                        </button>
                    </div>
                </div>
                <div className="row justify-content-center mb-0 pb-0 mt-4 pt-4 h6 text-primary">
                    <button type="button" className="btn btn-outline-success" onClick={showRegisterModal}>
                        Register
                    </button>
                </div>
            </form>
        </div>
    );
};
export default SignInModal;
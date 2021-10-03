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
                <div className="row justify-content-center mb-0 pb-0 mt-4 pt-4 h6">
                    <div className="row justify-content-center">
                        <div className="col-auto">
                            Click off form to chat as guest
                        </div>
                    </div>
                    <button type="button" className="btn btn-outline-primary border-0" onClick={showRegisterModal}>
                        Register As New User
                    </button>
                </div>
            </form>
        </div>
    );
};
export default SignInModal;
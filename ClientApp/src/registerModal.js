import React from "react";

const RegisterModal = ({ registerNewUser, formState, formChange, showSignInModal }) => {
    return (
        <div>
            <form action="submit" onSubmit={registerNewUser}>
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
                <div className="row">
                    <div className="input-group mb-3">
                        <span className="input-group-text">Confirm Password:</span>
                        <input
                            type="password"
                            value={formState.userPassword}
                            onChange={formChange}
                            name="ConfirmUserPassword"
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
                            Register
                        </button>
                    </div>
                </div>
                <div className="row justify-content-center mb-0 pb-0 mt-4 pt-4 h6 text-primary">
                    <button type="button" className="btn btn-outline-primary border-0" onClick={showSignInModal}>
                        Sign In As Existing User
                    </button>
                </div>
            </form>
        </div>
    )
}

export default RegisterModal;
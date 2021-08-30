﻿import React from "react";

const registerModal = () => {
    return (
        <div>
            <form action="submit" onSubmit={signIn}>
                <div className="row">
                    <div class="input-group mb-3">
                        <span class="input-group-text">User Name:</span>
                        <input
                            type="text"
                            value={formState.userName}
                            onChange={formChange}
                            name="userName"
                            class="form-control"
                            placeholder="20 Character Maximum"
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-default"
                            required
                        />
                    </div>
                </div>
                <div className="row">
                    <div class="input-group mb-3">
                        <span class="input-group-text">Password:</span>
                        <input
                            type="password"
                            value={formState.userPassword}
                            onChange={formChange}
                            name="userPassword"
                            class="form-control"
                            placeholder="Minimum 4 digits"
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-default"
                            required
                        />
                    </div>
                </div>
                <div className="row">
                    <div class="input-group mb-3">
                        <span class="input-group-text">Confirm Password:</span>
                        <input
                            type="password"
                            value={formState.userPassword}
                            onChange={formChange}
                            name="userPassword"
                            class="form-control"
                            placeholder="Minimum 4 digits"
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-default"
                            required
                        />
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-auto mb-4">
                        <button type="submit" className="btn btn-outline-success">
                            Register
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default registerModal;


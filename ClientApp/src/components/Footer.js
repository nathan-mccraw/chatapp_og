import React from "react";
import Modal from "react-bootstrap/Modal";
import RegisterModal from "./RegisterModal";
import SignInModal from "./SignInModal";

const Footer = ({ user, signIn, registerNewUser, modalStates, formState, formChange }) => {
    return (
        <div className="row mt4 justify-content-center align-items-baseline">
            <div className="col-auto p-1">sending message as:</div>
            <div className="col-auto p-1 h5 text-primary">
                {user && user.username}
            </div>
            <div className="col-auto p-1">
                <button
                    type="button"
                    className="btn btn-sm btn-outline-primary  rounded-pill m-2"
                    onClick={modalStates.showSignInModal}
                >
                    Sign-in
                </button>
            </div>
            <Modal
                show={modalStates.isSignInOpen}
                onHide={modalStates.hideSignInModal}
                dialogClassName={"SignInModal"}
            >
                <Modal.Header className="justify-content-center">
                    <h3>Sign In</h3>
                </Modal.Header>
                <Modal.Body>
                    <SignInModal signIn={signIn} formState={formState} formChange={formChange} showRegisterModal={modalStates.showRegisterModal} />
                </Modal.Body>
            </Modal>
            <Modal
                show={modalStates.isRegisterOpen}
                onHide={modalStates.hideRegisterModal}
                dialogClassName={"RegisterModal"}
            >
                <Modal.Header className="justify-content-center">
                    <h3>Register New User</h3>
                </Modal.Header>
                <Modal.Body>
                    <RegisterModal registerNewUser={registerNewUser} formState={formState} formChange={formChange} showSignInModal={modalStates.showSignInModal} />
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default Footer;
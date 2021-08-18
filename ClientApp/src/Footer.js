import React from "react";
import Modal from "react-bootstrap/Modal";
import SignInModal from "./SignInModal";

const Footer = ({ user,
    showSignInModal,
    hideSignInModal,
    IsSignInModalOpen,
    formState,
    formChange,
    signIn }) => {
    return (
        <div className="row mt4 justify-content-center align-items-baseline">
            <div className="col-auto p-1">sending message as:</div>
            <div className="col-auto p-1 h5 text-primary">
                {user && user.userName}
            </div>
            <div className="col-auto p-1">
                <button
                    type="button"
                    class="btn btn-sm btn-outline-primary  rounded-pill m-2"
                    onClick={showSignInModal}
                >
                    Sign-in
                     </button>
            </div>
            <Modal
                show={IsSignInModalOpen}
                onHide={hideSignInModal}
                dialogClassName={"SignInModal"}
            >
                <Modal.Header className="justify-content-center">
                    <h3>Sign In</h3>
                </Modal.Header>
                <Modal.Body>
                    <SignInModal signIn={signIn} formState={formState} formChange={formChange} />
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default Footer;
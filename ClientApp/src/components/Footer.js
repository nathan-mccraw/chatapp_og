import React from "react";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import ModifyUserModal from "./ModifyUserModal";
import RegisterModal from "./RegisterModal";
import SignInModal from "./SignInModal";
import SignOutModal from "./SignOutModal";

const Footer = ({ user, setUser }) => {
    const [modalStates, setModalStates] = useState({
        isSignInOpen: true,
        isRegisterOpen: false,
        isModifyUserOpen: false,
        isSignOutOpen: false,
        showSignInModal: function () { setModalStates({ ...modalStates, isSignInOpen: true, isRegisterOpen: false, isModifyUserOpen: false, isSignOutOpen: false }) },
        hideSignInModal: function () { setModalStates({ ...modalStates, isSignInOpen: false, isRegisterOpen: false, isModifyUserOpen: false, isSignOutOpen: false }) },
        showRegisterModal: function () { setModalStates({ ...modalStates, isSignInOpen: false, isRegisterOpen: true, isModifyUserOpen: false, isSignOutOpen: false }) },
        hideRegisterModal: function () { setModalStates({ ...modalStates, isSignInOpen: false, isRegisterOpen: false, isModifyUserOpen: false, isSignOutOpen: false }) },
        showModifyUserModal: function () { setModalStates({ ...modalStates, isSignInOpen: false, isRegisterOpen: false, isModifyUserOpen: true, isSignOutOpen: false }) },
        hideModifyUserModal: function () { setModalStates({ ...modalStates, isSignInOpen: false, isRegisterOpen: false, isModifyUserOpen: false, isSignOutOpen: false }) },
        showSignOutModal: function () { setModalStates({ ...modalStates, isSignInOpen: false, isRegisterOpen: false, isModifyUserOpen: false, isSignOutOpen: true }) },
        hideSignOutModal: function () { setModalStates({ ...modalStates, isSignInOpen: false, isRegisterOpen: false, isModifyUserOpen: false, isSignOutOpen: false }) },
    });

    const signOut = () => {
        setUser({
            userId: "1",
            username: "Guest",
            firstName: "Guest",
            lastName: "Guest",
            DateCreated: "2021-09-24T00:28:21",
        })
    };

    return (
        <div className="row mt4 justify-content-center align-items-baseline">
            <div className="col-auto p-1">sending message as:</div>
            <div className="col-auto p-1 h5 text-primary">
                <button
                    type="button"
                    className="btn btn-sm btn-outline-primary  rounded-pill m-2"
                    onClick={modalStates.showModifyUserModal}
                >
                    {user.username}
                </button>
            </div>
            {user.username === "Guest" &&
                <div className="col-auto p-1">
                    <button
                        type="button"
                        className="btn btn-sm btn-outline-primary  rounded-pill m-2"
                        onClick={modalStates.showSignInModal}
                    >
                        Sign-in
                    </button>
                </div>}
            {user.username !== "Guest" &&
                <div className="col-auto p-1">
                    <button
                        type="button"
                        className="btn btn-sm btn-outline-primary  rounded-pill m-2"
                        onClick={modalStates.showSignOutModal}
                    >
                        Sign Out
                    </button>
                </div>}
            <Modal
                show={modalStates.isSignInOpen}
                onHide={modalStates.hideSignInModal}
                dialogClassName={"SignInModal"}
            >
                <Modal.Header className="justify-content-center">
                    <h3>Sign In</h3>
                </Modal.Header>
                <Modal.Body>
                    <SignInModal setUser={setUser} showRegisterModal={modalStates.showRegisterModal} />
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
                    <RegisterModal showSignInModal={modalStates.showSignInModal} />
                </Modal.Body>
            </Modal>
            <Modal
                show={modalStates.isModifyUserOpen}
                onHide={modalStates.hideModifyUserModal}
                dialogClassName={"ModifyUserModal"}
            >
                <Modal.Header className="justify-content-center">
                    <h3>Modify Profile</h3>
                </Modal.Header>
                <Modal.Body>
                    <ModifyUserModal user={user} signOut={signOut} />
                </Modal.Body>
            </Modal>
            <Modal
                show={modalStates.isSignOutOpen}
                onHide={modalStates.hideSignOutModal}
                dialogClassName={"SignOutModal"}
            >
                <Modal.Header className="justify-content-center">
                    <h3>Sign Out?</h3>
                </Modal.Header>
                <Modal.Body>
                    <SignOutModal signOut={signOut} hideSignOutModal={modalStates.hideSignOutModal} />
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default Footer;
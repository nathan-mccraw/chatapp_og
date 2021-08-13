import React from "react";
import Modal from "react-bootstrap/Modal";
import SignInModal from "./SignInModal";

const ChatInput = ({
    submitMessage,
    chatMessage,
    setChatMessage,
    user,
    showSignInModal,
    hideSignInModal,
    IsSignInModalOpen,
    formState,
    formChange,
    signIn,
}) => {
    return (
        <div className="col">
            <form action="submit" onSubmit={submitMessage}>
                <div className="row m-3 mt-4 mb-4 justify-content-center align-items-center">
                    <div className="col-9">
                        <textarea
                            className="form-control"
                            rows="3"
                            placeholder="Chat..."
                            value={chatMessage}
                            onChange={(e) => setChatMessage(e.target.value)}
                            required
                        ></textarea>
                    </div>
                    <div className="col-auto">
                        <button type="submit" className="btn btn-outline-secondary">
                            Send
            </button>
                    </div>
                </div>
            </form>
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
        </div>
    );
};

export default ChatInput;
import React from "react";

const ChatInput = ({ submitMessage, ChatMessage, setChatMessage }) => {
  return (
    <div className="col">
      <div className="row m-3 mt-4 justify-content-center align-items-center m-0">
        <div className="col-9">
          <textarea
            className="form-control"
            rows="3"
            placeholder="Chat..."
            value={ChatMessage}
            onChange={(e) => setChatMessage(e.target.value)}
          ></textarea>
        </div>
        <div className="col">
          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={submitMessage}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatInput;

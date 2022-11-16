import Modal from "./Modal";
import Backdrop from "./Backdrop";
import { useState } from "react";

function Todo(props) {
  const [showModal, setShowModal] = useState(false);

  function deleteHandler() {
    showModalFunction();
  }

  function showModalFunction() {
    setShowModal(true);
  }

  function closeModal() {
    setShowModal(false);
  }

  return (
    <div>
      <div className="card">
        <h2>{props.text}</h2>
        <div className="actions">
          <button onClick={deleteHandler} className="btn">
            Delete
          </button>
        </div>
      </div>
      <div>
        {showModal && (
          <Modal onConfirmClick={closeModal} onCancelClick={closeModal} />
        )}
        {showModal && <Backdrop onClick={closeModal} />}
      </div>
    </div>
  );
}

export default Todo;

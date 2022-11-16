function Modal(props) {
  return (
    <div className="modal">
      <p>Are you sure?</p>
      <button className="btn btn--alt" onClick={props.onCancelClick}>
                Cancel
      </button>
      <button className="btn" onClick={props.onConfirmClick}>
                Confirm
      </button>
    </div>
  );
}

export default Modal;

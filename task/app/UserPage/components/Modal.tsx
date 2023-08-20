import React from "react";
import ReactModal from "react-modal";

interface ModalProps {
  children: React.ReactNode;
  isOpen: any;
  onClose: any;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="modal fixed inset-0 flex items-center justify-center"
      overlayClassName="overlay fixed inset-0 bg-black bg-opacity-50"
      ariaHideApp={false}
    >
      <div className="bg-white p-6 rounded-lg shadow-md ">
        {children}
        <button
          className="mt-4 mr-5 text-white px-4 py-2 rounded bg-indigo-600"
          onClick={onClose}
          type="submit"
        >
          Хадгалах
        </button>
      </div>
    </ReactModal>
  );
};

export default Modal;

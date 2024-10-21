import React from "react";
import Modal from "react-modal";

const ModalComponent = ({ isOpen, closeModal, title, items, newItemText }) => {
  const itemCount = items.length;

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel={title}
      className={`w-[350px] m-2 extraSm:w-full max-w-lg bg-white rounded-lg shadow-lg p-6 relative border-none outline-none`}
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center backdrop-blur-sm"
      ariaHideApp={false}
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">{title} ({itemCount})</h2>
        <button onClick={closeModal} className="text-gray-500 text-xl">&times;</button>
      </div>

      <div className="space-y-4 h-[165px] overflow-y-auto">
        {items.map((item, index) => (
          <div key={index} className="flex items-center space-x-4 hover:bg-blue-100">
            <img src={item.image} alt={item.name} className="w-10 h-10 rounded-full" />
            <div className="flex flex-col">
              <p>{item.name}</p>
              <p className="text-sm text-gray-500">{item?.author}</p>
            </div>
          </div>
        ))}
      </div>

      {newItemText && <button className="mt-6 w-full bg-blue-500 text-white py-2 rounded">
        {newItemText}
      </button>}
    </Modal>
  );
};

export default ModalComponent;


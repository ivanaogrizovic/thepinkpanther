import "./modal.scss";

type ModalProps = {
  closeModal: () => void;
  selectedImage: string;
};

export default function Modal({ closeModal, selectedImage }: ModalProps) {
  return (
    <div className="pinkpanther-modal-overlay" onClick={closeModal}>
      <div
        className="pinkpanther-modal-content -zoom-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        <img src={selectedImage} alt="" className="pinkpanther-modal-image" />
        <button className="pinkpanther-modal-close" onClick={closeModal}>
          ✕
        </button>
      </div>
    </div>
  );
}

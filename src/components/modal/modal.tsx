import { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import "./modal.scss";

type ModalProps = {
  closeModal: () => void;
  selectedImage: string;
};

export default function Modal({ closeModal, selectedImage }: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const focusableElements = modalRef.current?.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    );
    const firstEl = focusableElements?.[0];
    const lastEl = focusableElements?.[focusableElements.length - 1];

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      }

      if (e.key === "Tab" && firstEl && lastEl) {
        if (e.shiftKey && document.activeElement === firstEl) {
          e.preventDefault();
          lastEl.focus();
        } else if (!e.shiftKey && document.activeElement === lastEl) {
          e.preventDefault();
          firstEl.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    firstEl?.focus();

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [closeModal]);

  return ReactDOM.createPortal(
    <div
      className="pinkpanther-modal-overlay"
      onClick={closeModal}
      role="presentation"
    >
      <div
        className="pinkpanther-modal-content -zoom-fade-in"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        ref={modalRef}
      >
        <img
          src={selectedImage}
          alt="Enlarged product"
          className="pinkpanther-modal-image"
        />
        <button
          className="pinkpanther-modal-close"
          onClick={closeModal}
          aria-label="Close modal"
        >
          ✕
        </button>
      </div>
    </div>,
    document.body,
  );
}

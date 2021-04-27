export default function SuccessPopup (props) {

    const {
        isOpen,
        onClose,
    } = props;

    const handleOverlayClose = (evt) => {
        if (evt.target.classList.contains('success-popup_opened')) {
            onClose();
        }
    }
  
    return (
        <section className={`success-popup ${isOpen && 'success-popup_opened'}`} onMouseDown={handleOverlayClose}>
            <div className="success-popup__background">
                <h4 className="success-popup__title">Form sent. Thank you!</h4>
                <p className="success-popup__description">We will call you back in a few minutes.</p>
                <button onClick={onClose} className="success-popup__button">Ok</button>
            </div>
        </section>
    )
  }
  
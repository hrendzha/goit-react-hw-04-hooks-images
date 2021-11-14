import { useEffect } from 'react';
import PropTypes from 'prop-types';
import s from './Modal.module.css';

Modal.propTypes = {
    largeImageUrl: PropTypes.string.isRequired,
    onModalClose: PropTypes.func.isRequired,
};

function Modal({ largeImageUrl, onModalClose }) {
    useEffect(() => {
        const handleKeyDown = e => {
            if (e.code === 'Escape') {
                onModalClose();
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [onModalClose]);

    const handleOverlayClick = ({ target, currentTarget }) => {
        if (target === currentTarget) {
            onModalClose();
        }
    };

    return (
        <div className={s.overlay} onClick={handleOverlayClick}>
            <div className={s.modal}>
                <img src={largeImageUrl} alt="" />
            </div>
        </div>
    );
}

export default Modal;

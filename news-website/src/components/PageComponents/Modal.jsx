import './Modal.css'
import { useState, useEffect } from 'react';

function Modal({show, onClose, children}) {
    const [isRendered, setIsRendered] = useState(false);

    useEffect(() => {
        if (show) {
            setIsRendered(true);
        } 
        else {
            const timer = setTimeout(() => setIsRendered(false), 300);
            return () => clearTimeout(timer);
        }
    }, [show]);

    if (!isRendered) return null;

    return (        
        <div className={`modal-overlay ${show ? 'show' : 'hide'}`}>
            <div className="modal">
                <button className="close-button" onClick={onClose}>X</button>
                {children}
            </div>
        </div>        
    );
}

export default Modal;
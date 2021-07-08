import React, { useEffect, useRef } from 'react'
import { Modal as BootstrapModal } from 'bootstrap';

export default function Modal({ isOpen, title, actionButtonText, onActionButtonClick, onClose, children }) {

    const modal = useRef(null);

    useEffect(() => {
        const bootstrapModal = BootstrapModal.getOrCreateInstance(modal.current);
        (isOpen) ? bootstrapModal.show() : bootstrapModal.hide();
    }, [isOpen])

    return (
        <div className="modal" tabIndex="-1" ref={modal}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{ title }</h5>
                        <button type="button" className="btn-close" aria-label="Close" onClick={onClose}></button>
                    </div>
                    <div className="modal-body">
                        { children }
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={onClose}>Close</button>
                        <button type="button" className="btn btn-primary" onClick={onActionButtonClick}>
                            { actionButtonText }
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
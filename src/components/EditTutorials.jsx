import React, { useState, useEffect } from 'react'

const EditTutorials = ({ editItem, editTutorial }) => {
    const [title, setTitleEdit] = useState(editItem.title);
    const [desc, setDescEdit] = useState(editItem.description);
    useEffect(() => {
        setTitleEdit(editItem.title);
        setDescEdit(editItem.description);
    }, [editItem.title, editItem.description]);

    const handleSave = (e) => {
        e.preventDefault();
        editTutorial(editItem.id, title, desc);
        setTitleEdit("");
        setDescEdit("");

    };
    return (
        <div className="modal" tabIndex="-1" id="edit-modal">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Edit Your Tutorial</h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="modal-body">
                        <div className="mb-3">
                            <label htmlFor="title" className="form-label">
                                Title
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="title"
                                placeholder="Enter your Title..."
                                value={title || " "}
                                onChange={(e) => setTitleEdit(e.target.value)}
                                required

                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="desc" className="form-label">
                                Description
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="desc"
                                placeholder={desc}
                                value={desc || " "}
                                onChange={(e) => setDescEdit(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" data-bs-dismiss="modal" className="btn btn-primary" onClick={handleSave}>
                            Save changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditTutorials
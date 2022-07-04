import React from 'react'

const EditTutorials = () => {
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
                                // value={title}
                                // onChange={(e) => setTitle(e.target.value)}
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
                                placeholder="Enter your Description..."
                                // value={desc}
                                // onChange={(e) => setDesc(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                        >
                            Close
                        </button>
                        <button type="button" className="btn btn-primary">
                            Save changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditTutorials
import React from "react";
import { useState } from "react";

const AddTutorial = ({ addTutorail }) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        addTutorail({ title: title, description: desc });
        setDesc("");
        setTitle("");
    }
    return (
        <div className="container text-center mt-4">
            <h1 className="display-6 text-danger">Add Your Tutorials</h1>
            <form onSubmit={handleSubmit}>
                <div class="mb-3">
                    <label htmlFor="title" class="form-label">
                        Title
                    </label>
                    <input
                        type="text"
                        class="form-control"
                        id="title"
                        placeholder="Enter your Title..."
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required

                    />
                </div>
                <div class="mb-3">
                    <label htmlFor="desc" class="form-label">
                        Description
                    </label>
                    <input
                        type="text"
                        class="form-control"
                        id="desc"
                        placeholder="Enter your Description..."
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                        required
                    />
                </div>
                <button class="btn btn-danger mb-4">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default AddTutorial;

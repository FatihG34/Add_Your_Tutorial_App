import React from "react";
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import EditTutorials from "./EditTutorials";

const TutorialList = ({ tutorials, deleteTutorial, editTutorial }) => {
    //! tutorials boş geliyor bunu anlamadım ve çözemedim
    return (
        <div className="container mt-4">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#id</th>
                        <th scope="col">Title</th>
                        <th scope="col">Description</th>
                        <th scope="col" className="text-center">
                            Edit-Delete
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {tutorials?.map((item) => {
                        // console.log(typeof item);
                        const { id, title, description } = item;
                        return (
                            <tr key={id}>
                                <th>{id}</th>
                                <td>{title}</td>
                                <td>{description}</td>
                                <td className="text-center text-nowrap">
                                    <FaEdit
                                        size={20}
                                        className="me-4 text-warning"
                                        role="button"
                                        data-bs-toggle="modal"
                                        data-bs-target="#edit-modal"
                                        onClick={() => editTutorial({ id, title, description })} />
                                    <AiFillDelete
                                        size={21}
                                        className="text-danger"
                                        role="button"
                                        onClick={() => deleteTutorial(id)} />
                                </td>
                            </tr>
                        );
                    })
                    }
                </tbody>
            </table>

            <EditTutorials />
        </div>
    );
};

export default TutorialList;

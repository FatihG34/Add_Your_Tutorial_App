import React from "react";
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";

const TutorialList = ({ tutorials }) => {
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
                    {/* {tutorials?.map((item) => { */}
                    {/* const [id, title, description] = item; */}
                    {/* return ( */}
                    <tr key={1}>
                        <th>{ }</th>
                        <td>{ }</td>
                        <td>{ }</td>
                        <td className="text-center text-nowrap">
                            <FaEdit
                                size={20}
                                className="me-4 text-warning"
                                role="button" />
                            <AiFillDelete
                                size={21}
                                className="text-danger"
                                role="button" />
                        </td>
                    </tr>
                    {/* ); */}
                    {/* }) */}
                    {/* } */}
                </tbody>
            </table>
        </div>
    );
};

export default TutorialList;

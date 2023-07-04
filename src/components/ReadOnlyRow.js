import React from 'react'

const ReadOnlyRow = ({st, handleEditClick}) => {
    return (
        <>
        <tr>
            <td>{st.subject_name}</td>
            <td>{st.subject_id}</td>
            <td>{st.term_work}</td>
            <td>{st.oral}</td>
            <td>{st.prac}</td>
            <td>{st.theory}</td>
            <td>
                {/* <button type='button' onClick={(event)=>handleEditClick(event, st)}>Edit</button> */}
                <button type='button' className="edit" onClick={(event)=>handleEditClick(event, st)}>Edit</button>
            </td>
        </tr>
        </>
    )
}

export default ReadOnlyRow;

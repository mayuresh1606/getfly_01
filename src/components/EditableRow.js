import React from 'react'

const EditableRow = ({st,editFormData, handleEditFormChange, handleCancelClick}) => {
    return (
        <tr>
            <td>{st.subject_name}</td>
            <td>{st.subject_id}</td>
            <td> <input type='text' required placeholder='20' value={editFormData.term_work} onChange={handleEditFormChange} name='term_work' /> </td>
            <td> <input type='text' required placeholder='25' value={editFormData.oral} onChange={handleEditFormChange} name='oral' /> </td>
            <td> <input type='text' required placeholder='25' value={editFormData.prac} onChange={handleEditFormChange} name='prac' /> </td>
            <td> <input type='text' required placeholder='80' value={editFormData.theory} onChange={handleEditFormChange} name='theory' /> </td>
            <td><button type='submit' className='edit'>Save</button>
            <button type='button' className='editcancel' onClick={handleCancelClick}>Cancel</button></td>
        </tr>
    )
}

export default EditableRow;

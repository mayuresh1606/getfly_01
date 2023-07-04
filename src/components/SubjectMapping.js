import React, { useState, Fragment } from 'react';
import './SubjectMapping'
import semesterdata from './SubjectMapping.json'; 
import ReadOnlyRow from './ReadOnlyRow';
import EditableRow from './EditableRow';



function SubjectMapping() {
    // const [inputarr, setInputarr] = useState([])

    const [semesterid, setSemesterid] = useState('');
    const [subject, setSubject] = useState(semesterdata);
    // const [subjectid, setSubjectid] = useState({
    //     semester_id: null,
    //     subject_id: null
    // });

    const handlesem = (e) => {
        const selectedValue = e.target.value;
        const shouldDisplay = (selectedValue && true) || false;
        setState({
          shouldDisplay,
          selectedValue
        })
        const getsemesterId = e.target.value;
        const getSubjectdata = semesterdata.find(semester => semester.semester_id === getsemesterId).subjects;
        setSubject(getSubjectdata);
        setSemesterid(getsemesterId);
        console.log(getsemesterId);
    }

    // const handlestate = (e) => {
    //     const subjectid = e.target.value;
    //     console.log(subjectid);
    //     setSubjectid(subjectid);
    // }

    // let { semester_id, subject_id } = subjectid;

    // const handleSubmit = (e) => {
    //     setInputarr([...inputarr, { semester_id, subject_id }])
    //     console.log('Data:', subjectid);
    //     console.log(inputarr);
    // }

    const [editSubjectId, setEditSubjectId]=useState(null);
    const [editSubjectNameId, setEditSubjectNameId] = useState(null);

    const [editFormData, setEditFormData ]= useState({
        term_work: "",
        oral: "",
        prac:"",
        theory:"",
    })

    const handleEditFormChange=(event)=>{
        event.preventDefault();

        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;
        
        const newFormData = { ...editFormData };
        newFormData[fieldName] = fieldValue;
    
        setEditFormData(newFormData);
        // if(!newFormData[fieldName]){
        //   delete newFormData[fieldName];
        // }else{
    }

    const handleEditClick = (event , st)=>{
        event.preventDefault();
        setEditSubjectId(st.subject_id);
        setEditSubjectNameId(st.subject_name);

        // const FormValue = {
        //     term_work: st.term_work,
        //     oral: st.oral,
        //     prac: st.prac,
        //     theory: st.theory,
        // }
    } 

    const handleEditFormSubmit = (event) =>{
        event.preventDefault();

        const editedSubject = {
            subject_id: editSubjectId,
            subject_name: editSubjectNameId,
            term_work: editFormData.term_work,
            oral: editFormData.oral,
            prac: editFormData.prac,
            theory: editFormData.theory,
        }

        const newdata =[...subject];

        const index = subject.findIndex((st)=> st.subject_id === editSubjectId);

        newdata[index] = editedSubject;
        setSubject(newdata);
        setEditSubjectId(null);
    };

    const handleCancelClick = () => {
        setEditSubjectId(null);
      };

    const [tableState, setState] = useState({
        shouldDisplay: false,
        selectedValue: ""
      });

      const handleSave=()=>{
        alert("Data Saved");
      }

    return (
        <div className="mainContent">
            <div className="mapping">
                <p className="font-weight-800">Subject Mapping</p>
                <div className="col-div1">
                    <div className="s1">
                        <span className="fontSizeSmall">Select Semester</span>

                        <select name='semester' className='form-control' onChange={(e) => handlesem(e)}>
                            <option value="">--Select Semester--</option>
                            {
                                semesterdata.map((getsemester, index) => (
                                    <option value={getsemester.semester_id} key={index}>{getsemester.semester_name}</option>
                                ))

                            }
                        </select>

                    </div>

                    <div className="s1">
                        {/* <span className="fontSizeSmall">Select Subject</span>
                        <select name='subjects' className='form-control' onChange={(e) => handlestate(e)}>
                            <option value="">--Select Subject--</option>
                            {
                                subject.map((getsubject, index) => (
                                    <option value={getsubject.subject_id} key={index}>{getsubject.subject_name}</option>
                                ))
                            }


                        </select> */}
                    </div>

                    {/* <button
                        className='btn btn-primary btn-sm mt-2'
                        onClick={handleSubmit}>
                        Submit
                    </button> */}
                </div>
            </div>

            {tableState.shouldDisplay && (
            <div className="tableContent">
                {/* <button className="edit">Edit</button> */}
                <form onSubmit={handleEditFormSubmit}>
                <table>
                    <thead>
                        <tr>
                            <th>Subject Name</th>
                            <th>Subject Code</th>
                            <th>Term Work</th>
                            <th>Oral</th>
                            <th>Practical</th>
                            <th>Theory</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            subject.map((st) => (
                                <Fragment key={st.subject_id}>
                                    {editSubjectId === st.subject_id? (<EditableRow editFormData={editFormData} handleEditFormChange={handleEditFormChange} handleCancelClick={handleCancelClick} st={st} />) : 
                                    (<ReadOnlyRow st={st} handleEditClick={handleEditClick}/>)}
                                </Fragment>
                            )
                            )

                        }
                    </tbody>
                </table>
                </form>
            </div>
            )}
            <button className="save btn" onClick={handleSave}>Save</button>
        </div>

    )
};


export default SubjectMapping;
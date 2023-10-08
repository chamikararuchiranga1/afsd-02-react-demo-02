import Box from '@mui/material/Box';
import AddStudent from "../../component/addStudent/AddStudent.jsx";
import ViewStudent from "../../component/viewStudent/ViewStudent.jsx";
import {useState} from 'react'

export default function Student() {

    const [data, setData] = useState([]);

    const studentDataSave = (value) => {
        const arr = [...data];
        arr.push(value);
        setData(arr)
    }

    const deleteStudent = (id) => {
        const arr = [...data];
        arr.splice(id, 1)
        setData(arr);
    }
    return (
        <div>
            <Box sx={{marginBottom: 2, backgroundColor: '#e5e4e4', display: 'flex', justifyContent: 'center', borderRadius: 3}}>
                <AddStudent saveStudentData={(val)=> studentDataSave(val)}/>
            </Box>
            <Box sx={{backgroundColor: '#e5e4e4', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', borderRadius: 3}}>
                {data.map((val, index)=> (
                    <ViewStudent index={index} data={val} key={index} deleteStudent={(val)=> deleteStudent(val)}/>
                ))}
            </Box>
        </div>
    )
}

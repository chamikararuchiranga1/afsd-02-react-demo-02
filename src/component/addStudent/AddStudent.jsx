import {Button, CardActions} from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import {useState} from "react";

export default function AddStudent({saveStudentData}) {

    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [age, setAge] = useState('');
    const [id, setId] = useState('');

    const saveStudent = () => {
        if(name !== '' && address !== '' && age !== '' && id !== ''){
            saveStudentData({name: name, address: address, age: age, id: id})
            setName('')
            setAddress('')
            setAge('')
            setId('')
        }else {
            alert('fill your details..!')
        }
    }

    return (
        <Card sx={{maxWidth: 345, margin: 2}}>
            <CardContent>
                <Typography sx={{textAlign: 'center'}} gutterBottom variant="h5" component="div">
                    Add Student
                </Typography>
                <Box component="form" noValidate autoComplete="off">
                    <TextField
                        onChange={(val)=> setName(val.target.value)}
                        value={name}
                        margin={'dense'}
                        fullWidth={true}
                        id="name"
                        label="Student Name"
                        variant="outlined"
                    />
                    <TextField
                        onChange={(val)=> setAddress(val.target.value)}
                        value={address}
                        margin={'dense'}
                        fullWidth={true}
                        id="address"
                        label="Address"
                        variant="outlined"
                    />
                    <TextField
                        onChange={(val)=> setAge(val.target.value)}
                        value={age}
                        margin={'dense'}
                        fullWidth={true}
                        id="age"
                        label="Age"
                        variant="outlined"
                    />
                    <TextField
                        onChange={(val)=> setId(val.target.value)}
                        value={id}
                        margin={'dense'}
                        fullWidth={true}
                        id="id"
                        label="NIC"
                        variant="outlined"
                    />
                </Box>
            </CardContent>

            <CardActions sx={{display: 'flex', justifyContent: 'end'}}>
                <Button onClick={()=> saveStudent()} variant="contained">Save Student</Button>
            </CardActions>
        </Card>
    )
}

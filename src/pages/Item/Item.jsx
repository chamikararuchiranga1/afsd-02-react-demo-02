import {useEffect, useState} from "react";
import UserCard from "../../component/userCard/UserCard.jsx";
import Box from "@mui/material/Box";
import instance from '../../services/AxiosOrder.jsx'
import Button from "@mui/material/Button";
import {Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";
import TextField from "@mui/material/TextField";

export default function Item() {

    const [data, setData] = useState([]);
    const [loader, setLoader] = useState(false);
    const [open, setOpen] = useState(false);
    const [id, setId] = useState('');
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    useEffect(() => {
        setLoader(true)
        getAllData();
    }, []);

    const handleClose = () => {
        setOpen(false);
    };

    function getAllData() {
        instance.get('/posts')
            .then(function (response) {
                setData(response.data);
                setLoader(false);
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    function saveData () {
        const data = {
            title: title,
            body: body,
            userId: id,
        }
        instance.post('/posts', data)
            .then(function (response) {
                console.log(response)
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    return (
        <div>
            <Box sx={{display: 'flex', justifyContent: 'end'}}>
                <Button variant="contained" onClick={() => setOpen(true)}>Add Data</Button>
            </Box>
            {loader ?
                <Box sx={{display: 'flex', justifyContent: 'center'}}>
                    <h1>Loading..</h1>
                </Box>
                :
                <Box sx={{display: 'flex', flexWrap: 'wrap'}}>
                    {data.map((val, index) => (
                        <UserCard key={index} userID={val.id} title={val.title} description={val.body}/>
                    ))}
                </Box>
            }
            <Box>
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Add Data</DialogTitle>
                    <DialogContent>
                        <TextField
                            value={id}
                            onChange={(val)=> {setId(val.target.value)}}
                            margin={'dense'}
                            fullWidth
                            id="outlined-basic"
                            label="User Id"
                            variant="outlined"
                        />
                        <TextField
                            value={title}
                            onChange={(val)=> {setTitle(val.target.value)}}
                            margin={'dense'}
                            fullWidth
                            id="outlined-basic"
                            label="Title"
                            variant="outlined"
                        />
                        <TextField
                            value={body}
                            onChange={(val) => {setBody(val.target.value)}}
                            margin={'dense'}
                            fullWidth
                            id="outlined-basic"
                            label="Body"
                            variant="outlined"
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button variant="contained" onClick={() => handleClose()}>Cancel</Button>
                        <Button variant="contained" onClick={()=> saveData()}>Save</Button>
                    </DialogActions>
                </Dialog>
            </Box>
        </div>
    )
}

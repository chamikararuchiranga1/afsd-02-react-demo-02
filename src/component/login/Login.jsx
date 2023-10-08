import {Button, CardActionArea, CardActions} from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import {useState} from "react";

export default function Login() {

    var uName = "acpt@23"
    var pass = "acpt@23"

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const loginAction = () => {
        if(userName === uName && password === pass){
            alert("login Success..!")
        }else {
            alert("login fail..!")
        }
    }

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardContent>
                    <Typography sx={{textAlign: 'center'}} gutterBottom variant="h5" component="div">
                        Login
                    </Typography>
                    <Box component="form" noValidate autoComplete="off">
                        <TextField
                            onChange={(val)=> {setUserName(val.target.value)}}
                            value={userName}
                            margin={'dense'}
                            fullWidth={true}
                            id="username"
                            label="User Name"
                            variant="outlined"
                        />
                        <TextField
                            onChange={(val)=> {setPassword(val.target.value)}}
                            value={password}
                            margin={'dense'}
                            fullWidth={true}
                            id="password"
                            label="Password"
                            variant="outlined"
                            type={'password'}
                        />
                    </Box>
                </CardContent>
            </CardActionArea>
            <CardActions sx={{display: 'flex', justifyContent: 'end'}}>
                <Button onClick={()=> loginAction()} variant="contained">Login</Button>
            </CardActions>
        </Card>
    )
}

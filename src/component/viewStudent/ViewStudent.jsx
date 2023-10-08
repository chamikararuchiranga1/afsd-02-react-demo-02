import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {CardActions} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete.js";
import Card from "@mui/material/Card";

export default function ViewStudent({data, index, deleteStudent}) {

    return (
        <Card sx={{maxWidth: 345, margin: 2}}>
            <CardContent>
                <Typography sx={{textAlign: 'center', fontWeight: 'bold' }} gutterBottom variant="h5" component="div">
                    View Student
                </Typography>
                <Box component="form" noValidate autoComplete="off">
                    <Typography variant="h6" gutterBottom>
                        Name : {data.name}
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                        Address : {data.address}
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                        Age : {data.age}
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                        NIC : {data.id}
                    </Typography>
                </Box>
            </CardContent>

            <CardActions sx={{display: 'flex', justifyContent: 'end'}}>
                <IconButton onClick={()=> deleteStudent(index)} aria-label="delete" color="error">
                    <DeleteIcon />
                </IconButton>
            </CardActions>
        </Card>
    )
}

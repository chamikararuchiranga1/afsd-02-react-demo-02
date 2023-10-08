import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';

export default function Home () {
    return (
        <div>
            <Stack spacing={2} direction="row">
                <Button variant="text">Text</Button>
                <Button variant="contained">Contained</Button>
                <Button variant="outlined">Outlined</Button>
                <Button variant="outlined" startIcon={<DeleteIcon />}>
                    Delete
                </Button>
                <Button variant="contained" endIcon={<SendIcon />}>
                    Send
                </Button>
            </Stack>
        </div>
    )
}

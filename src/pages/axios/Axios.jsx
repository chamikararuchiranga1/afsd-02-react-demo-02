import axios from "axios";
import Button from "@mui/material/Button";

export default function Axios() {

    function getAllData () {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(function (response) {
                // handle success
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            // .finally(function () {
            //     // always executed
            // });
    }

    function getUserById () {
        axios.get('https://jsonplaceholder.typicode.com/posts/99')
            .then(function (response) {
                // handle success
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
        // .finally(function () {
        //     // always executed
        // });
    }

    function postData () {
        axios.post('https://jsonplaceholder.typicode.com/posts', {
            title: 'foo',
            body: 'bar',
            userId: 1,
        },
            {
            'Content-type': 'application/json; charset=UTF-8',
        },)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    function UpdateData () {
        axios.put('https://jsonplaceholder.typicode.com/posts/1', {
            title: 'foo',
            body: 'bar',
            userId: 1,
        },)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    function deleteData () {
        axios.delete('https://jsonplaceholder.typicode.com/posts/1')
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div>
            <h1>Axios</h1>
            <Button variant="contained" onClick={()=> getAllData()}>Get All Data</Button>
            <Button variant="contained" onClick={()=> getUserById()}>Get User By Id</Button>
            <Button variant="contained" onClick={()=> postData()}>Post Data</Button>
            <Button variant="contained" onClick={()=> deleteData()}>Delete Data</Button>
            <Button variant="contained" onClick={()=> UpdateData()}>Update Data</Button>
        </div>
    )
}

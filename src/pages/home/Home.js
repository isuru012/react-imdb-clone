import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import './Home.css';
import { width } from "@mui/system";
import Button from '@mui/material/Button';

function Home() {

    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [tel, setTel] = useState('');
    const [school, setSchool] = useState('');

    const saveStudent = () => {
        console.log(name);
    }

    return (
        <div>
            <h1>Save Student</h1>

            <div>
                <TextField id="outlined-basic" value={name} onChange={(e) => { setName(e.target.value) }} label="Name" variant="outlined" className="txt" margin="normal" placeholder="Enter Name" />
                <br></br>
                <TextField id="outlined-basic" value={address} onChange={(e) => { setAddress(e.target.value) }} label="Address" variant="outlined" className="txt" margin="normal" placeholder="Enter Address" />
                <br></br>
                <TextField id="outlined-basic" label="Tel.No" variant="outlined" className="txt" margin="normal" placeholder="Enter Tel. No" />
                <br></br>
                <TextField id="outlined-basic" label="School" variant="outlined" className="txt" margin="normal" placeholder="Enter School" />

                <br></br>
                <Button onClick={saveStudent} sx={{ marginLeft: 20 }} variant="contained">Save Student</Button>
            </div>
        </div>
    )
}

export default Home;
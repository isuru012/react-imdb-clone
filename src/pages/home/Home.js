import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import './Home.css';
import { width } from "@mui/system";
import Button from '@mui/material/Button';
import StarButton from "../../components/StarButton/StarButton";

function Home() {

    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [tel, setTel] = useState('');
    const [school, setSchool] = useState('');
    const [married, setMarried] = useState(false);
    const [gender, setGender] = useState('');

    const saveStudent = () => {
        console.log(name + " " + married);
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

                <input type={"checkbox"} value={married} onChange={() => { setMarried(!married) }} />

                <input type={"radio"} id="male" name="gender" />
                <label for="male">Male</label>

                <input type={"radio"} id="male" name="gender" />
                <label for="male">Female</label>

                <br></br>
                <Button onClick={saveStudent} sx={{ marginLeft: 20 }} variant="contained">Save Student</Button>
            </div>

            <StarButton name="Click Me" color="green" />
            <StarButton name="Ane Click Karannna" color="red" />
            <StarButton name="Press Me" color="brown" />

        </div>
    )
}

export default Home;
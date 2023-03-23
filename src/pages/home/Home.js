import React, { useEffect, useState } from "react";
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

    //component on-load/on-render
    //without dep array --> call when any state updates
    //with dep array --> call when a specific state updates
    useEffect(()=>{
        console.log("Hiiii I am useEffect");
        //api calling
    })

    const saveStudent = () => {
        console.log(name + " " + married + " " + gender);
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

                <input type={"radio"} id="male" name="gender" onChange={() => { setGender('male') }} />
                <label htmlFor="male">Male</label>

                <input type={"radio"} id="male" name="gender" onChange={() => { setGender('female') }} />
                <label htmlFor="male">Female</label>

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
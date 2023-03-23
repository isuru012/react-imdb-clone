import React, { useState } from 'react'
import './NicCheck.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import lankaNic from 'lanka-nic-2019';

export default function NicCheck() {

    const [nic, setNic] = useState('');
    const [data,setData] = useState({});

    const getData = () => {
        const data = lankaNic.infoNic(nic);
        setData(data);
    }

    return (
        <div>
            <h2 className='title'>NIC Detail Application</h2>
            <TextField id="outlined-basic" value={nic} onChange={(e) => { setNic(e.target.value) }} label="Enter NIC Number" variant="outlined" className="txt" margin="normal" placeholder="Enter NIC Number" />
            <Button color='success' className='btn' onClick={getData} variant="contained">Get Details</Button>

            <h3>Birthday : {data.birthday}</h3>
        </div>
    )
}

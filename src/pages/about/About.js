import React, { useEffect,useState } from 'react'
import './About.css'
import Button from "@mui/material/Button";
import Swal from 'sweetalert2'
import DataTable from 'react-data-table-component';
import StarRating from '../../components/StarRating/StartRating';



export default function About(){
    const [data, setData] = useState([]);
    useEffect(() => {
      fetch('https://imdb-top-100-movies.p.rapidapi.com/', options)
        .then(response => response.json())
        .then(json => setData(json));
    }, []);
      
  
 
//   const savePost=()=>{
//       fetch('https://jsonplaceholder.typicode.com/posts', {
//           method: 'POST',
//           body: JSON.stringify({
//               title: title,
//               body: body,
//               userId: userId,
//           }),
//           headers: {
//               'Content-type': 'application/json; charset=UTF-8',
//           },
//       });
//   }
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a4685f854fmsh70f72c6cf4a4b24p1bfd89jsnc0046e6548f8',
		'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
	}
};



    const columns=[
        
        {
            name:'', 
            selector: (row)=><img width={50}height={50} src={row.thumbnail}/>,

            sortable: true
        },

        {
            name:'Rank&Title',
            selector: row=><div>{row.rank}. <a href="#">{row.title}</a> ({row.year})</div>,
            sortable: true
        },
        
    
        {
            name:"Rating",
            selector: (row)=><StarRating rating={Number(row.rating)} />,
            sortable: true
        },
        
    ];

    


  return (
    <div className='container mt-5'>
        <DataTable
        
            columns={columns}
            data={data}
            pagination
            fixedHeader
          
        />
         
        {/* <input className="text" value={title} onChange={(e) => { setTitle(e.target.value) }} type="text" placeholder="Title"/>
        <br/>
        <input type="text" value={body} onChange={(e) => { setBody(e.target.value) }} placeholder="Body"/>
        <br/>
        <input type="text" value={userId} onChange={(e) => { setUserId(e.target.value) }} placeholder="User Id"/>
        <br/>

        <Button onClick={savePost}>click here</Button> */}
         

    </div>
  )
}

import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {Button} from "@mui/material";
import "./Book.css";
import axios from 'axios';

const Book = (props) => {
  const {_id,name,author,description,price,available,image}=props.book;
  const history=useNavigate();
  const deleteHandler=async()=>{
    await axios.delete(`https://book-store-backend-xix9.onrender.com/books/${_id}`).then(res=>res.data).then(()=>history('/books'));
    document.location.reload();
  }

  return (
    <div className='card'>
      <img src={image} alt={name}/>
      <article>By {author}</article>
      <h3>{name}</h3>
      <p>{description}</p>
      <h3>Rs {price}</h3>
      <p>Available: {available ? "Yes":"No"}</p>
      <Button LinkComponent={Link} to={`/books/${_id}`} sx={{mt:"auto"}} >Update</Button>
      <Button onClick={deleteHandler} sx={{mt:"auto"}} >Delete</Button>
    </div>
  )
}

export default Book;
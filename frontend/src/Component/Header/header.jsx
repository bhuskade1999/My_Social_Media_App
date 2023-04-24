import React from "react"
import { useState } from "react";
import "./Header.css"
import { Link } from "react-router-dom"
import {useSelector } from "react-redux"
import {
  Home,
  HomeOutlined,
  Add,
  AddOutlined,
  SearchOutlined,
  Search,
  AccountCircle,
  AccountCircleOutlined,
 
} from "@mui/icons-material";
import { Avatar, Typography } from "@mui/material";



const Header = () => {

  const { user } = useSelector((state) => state.user)

  const [tab, setTab] = useState(window.location.pathname)

 

  return (
    <div className ="one"> 
  
    <div className="header">
      <Link to="/" onClick={() => setTab("/")}>
        {
          tab === "/" ? <Home style={{ color: "black" }} /> : <HomeOutlined />
        }
      </Link>


      <Link to="/newPost" onClick={() => setTab("/newPost")} >
        {
          tab === "/newPost" ? <Add style={{ color: "black" }} /> : <AddOutlined />
        }
      </Link>


      <Link to="search" onClick={() => setTab("/search")} >
        {
          tab === "/search" ? <Search style={{ color: "black" }} /> : <SearchOutlined />
        }
      </Link>

      <Link to="account" onClick={() => setTab("/account")}>
        {
          tab === "/account" ? <AccountCircle style={{ color: "black" }} /> : <AccountCircleOutlined />
        }

      </Link>
      

    </div>


    <div className="icons">
      <Avatar className ="avatar" src={user.avatar.url}
                sx={{ height: "2vmax", width: "2vmax" }}  alt={user.name}/> &nbsp;&nbsp; &nbsp;&nbsp;

       <Typography className="userName" variant ="h6"> {user.name} </Typography>

      </div>

    </div>
    
  )
}


export default Header
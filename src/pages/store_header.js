/*import React, { useContext, useState } from "react";
import { CartContext } from "../helpers/CartProvider";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import InputBase from "@material-ui/core/InputBase";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import Searchbar from "./Furniture/searchbar";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#ffff",
    

  },
  inputStyle: {
    width: "600px",
    border: "2px solid #7BBD42",
    margin: " 5px auto",
    borderRadius: "50px",
  },
  inputBaseStyle: {
    paddingLeft: "16px",
    "& .MuiSvgIcon-root": {
      color: "#7BBD42",
      paddingRight: "10px",
    },
  },
  badgeStyle: {
    "& .MuiBadge-badge": {
      background: "#7BBD42",
    },
  },
  navBarStyle: {
    width: "100%",
    height: "50px",
    background: "#7BBD42",
  },
  listStyle: {
    display: "flex",
    listStyleType: "none",
  },
  listChildStyle: {
    padding: " 0 10px",
    fontWeight: "700",
    fontSize: "15px",
  },
  buttonStyle: {
    "& .MuiButton-root": {
      textTransform: "initial",
      color: "#ffff",
      marginTop: "8px",
      disableRipple: true,
    },
  },
}));

export default function StoreHeader() {
  const classes = useStyles();
  const { totalCartItems } = useContext(CartContext);

  return (
    <>
      <AppBar className={classes.root}>
        <Toolbar>
          <Container>
            <Grid container alignItems="center">
              <Grid item>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <img src="/images/logo.png" />
                </Link>
              </Grid>
              <Grid item sm>
                <div className={classes.inputStyle}>
                  <InputBase
                    startAdornment={<SearchOutlinedIcon />}
                    className={classes.inputBaseStyle}
                    placeholder="Search for Products"
                    
                  />
                  
                </div>
              </Grid>
              <Grid item>
                <IconButton>
                  <FavoriteBorderIcon fontSize="small" />
                </IconButton>
                <IconButton>
                  <PersonOutlineOutlinedIcon fontSize="small" />
                </IconButton>
                <IconButton>
                  <Link to="/cart" style={{ textDecoration: "none" }}>
                    <Badge
                      badgeContent={totalCartItems}
                      className={classes.badgeStyle}
                    >
                      <LocalMallOutlinedIcon fontSize="small" />
                    </Badge>
                  </Link>
                </IconButton>
              </Grid>
            </Grid>
          </Container>
        </Toolbar>
        <Grid container className={classes.navBarStyle}>
          <Container className={classes.buttonStyle}>
            <Link to="/collection" style={{ textDecoration: "none" }}>
              <Button> Furniture </Button>
            </Link>
            
          </Container>
        </Grid>
      </AppBar>
    </>
  );
}
*/


import React from 'react'
import {Link} from "react-router-dom"

import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { Navbar } from 'react-bootstrap';
import Grid from "@material-ui/core/Grid";
import productsDb from '../data/products';

import {CartContext} from '../helpers/CartProvider'
import { useContext } from "react";
import { useState } from 'react';
import "../App.css"



export default function StoreHeader() {
  const[searchItem, setSearchItem] = useState("")
  const {totalCartItems} = useContext(CartContext);
  
    return (
      <div className="Wrapper">
      <div className="multi_color_border">
        <div className="top_nav">
          <div className="left">
            <Grid item>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <img src="/images/logo.png" />
                </Link>
              </Grid>
             <div className="search_bar">
            
              <input type="text" placeholder="Search the Furniture" onChange={event=>{setSearchItem(event.target.value)}}/>
              {
                productsDb.map((val, key)=>{
                  return<div><p>{val.title}</p></div>
                })
              }
            </div>
          </div>
          <div className="right">
            <ul>
              <li><a href="#">Login</a></li>
              <li><a href="#">Login</a></li>
              <li><a href="#">Login</a></li>

            </ul>
          </div>
        </div>
        <div className="bottom_nav">
          <ul>
           
           <Link className="Nav_Link" to="/">Home</Link>
           <Link className="Nav_Link" to="/collection">Furniture</Link>
           <Link className="Nav_Link" to="/services">Services</Link>
           <Link className="Nav_Link" to="/ourProject">Our Project</Link>
           <Link className="Nav_Link" to="/about">About Us</Link>
           <Link className="Nav_Link" to="/contact">Contact Us</Link>
           </ul>
           
          
        </div>
      </div>

      </div>
     /* <div className="App">
      <Navbar bg="success" variant="dark" sticky="top">
        <Navbar.Brand>
           Gulshan Steel
        </Navbar.Brand>
         <ul className="Link_style" >
              <Link className="Nav_Link" to="/">Home</Link>
           <Link className="Nav_Link" to="/collection">Furniture</Link>
           <Link className="Nav_Link" to="/services">Services</Link>
           <Link className="Nav_Link" to="/ourProject">Our Project</Link>
           <Link className="Nav_Link" to="/about">About Us</Link>
           <Link className="Nav_Link" to="/contact">Contact Us</Link>
           </ul>
           <ul className="Button_style">
           <Link to="/cart">
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={totalCartItems}
              showZero={false}
              color="secondary">
                <AddShoppingCartIcon />
              </Badge>
            </IconButton>
          </Link>
             
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <FavoriteIcon />
              </Badge>
            </IconButton>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <AccountCircle />
            </IconButton>
           </ul>
         
      </Navbar>
      </div>
        */
    )
}

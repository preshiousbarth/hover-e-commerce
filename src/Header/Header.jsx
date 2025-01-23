import React from 'react'
import { Link, NavLink, useNavigate } from "react-router-dom";
import styles from "./Header.module.scss";
import { toast } from "react-toastify";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { FaShoppingCart, FaTimes, FaUserCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  return (
    <div>
      <h2>Header </h2>
    </div>
  )
}

export default Header

import React from "react";
import { Link, Outlet } from "react-router-dom";

const BookLayout = () => {
    return (
        <>
      <ul>
      <li><Link to="/books/1">Book 1</Link></li>
      <li><Link to="/books/2">Book 2</Link></li>
      <li><Link to="/books/new">New Book</Link></li>
      </ul>
      <Outlet/>
      </>
    );
  };
  export default BookLayout;
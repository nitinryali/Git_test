import {Routes,Route,Link, Navigate} from "react-router-dom";
// import Home from "./components/Home";
// import Book from "./components/Book";
// import BookList from "./components/BookList";
// import BookLayout from "./components/BookLayout";
import { lazy,Suspense } from "react";
const Home = lazy(()=>import("./components/Home"));
const Book = lazy(()=>import("./components/Book"));
const BookList = lazy(()=>import("./components/BookList"));
const BookLayout = lazy(()=>import("./components/BookLayout"));
export default function App(){
    return (
    <>
    <Suspense>
            <Routes>
    <Route path="/books" element={<h1>Extra content</h1>}/>
    </Routes>
    <nav>
        <li><Link to="/" reloadDocument>Home</Link></li>
        <li><Link to="/books">Books</Link></li>
    </nav>
    <Routes>
        <Route path="/" element={<Home/>}/>
        {/* <Route path="/books" element={<BookList/>}/> */}
        <Route path="/books" element={<BookLayout/>}>
            <Route index element={<BookList/>}/>
            <Route path=":id" element={<Book/>}/>
            <Route path="new" element={<div><br/>New book</div>}/>
        </Route>
        {/* <Route path="/books/:id" element={<Book/>}/>
        <Route path="/books/new" element={<div><br/>New book</div>}/> */}
        {/* <Route path="*" element={<div><br/>Page not found</div>}/> */}
        <Route path="*" element={<Navigate to="/"/>}/>
    </Routes>
    </Suspense>

    </>
    );
}
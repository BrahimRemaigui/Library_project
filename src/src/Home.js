import { useState } from "react";
import { useEffect } from "react";
import useFetch from "./useFetch";
import img from './library.jpg'
import Blogs from "./Blogs";
const Home = () => {

    /*
    const handelDele = (id) =>{
        const newblogs = blogs.filter(blog => blog.Id !== id);
        setBlogs(newblogs);
    }*/
    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');

    return (
        <div className='Home'>
            <div className="content">
                <div className="witing">
                    <h2>welcom to you in the web site of brahim library </h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam odio magni eligendi. Voluptatibus aliquid doloremque quae porro beatae consequatur deserunt! Quaerat, obcaecati molestias explicabo, perspiciatis soluta sequi odio aliquam deleniti sit animi voluptatem earum. Iste explicabo dolor, reiciendis ducimus incidunt minus delectus velit aliquam assumenda sapiente obcaecati, ratione, facilis qui?</p>
                </div>
                <img src={img}></img>
            </div>
            
        </div>
    );
}

export default Home;

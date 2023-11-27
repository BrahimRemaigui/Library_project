import { useState } from "react";
import { useEffect } from "react";
import useFetch from "./useFetch";
import img from './library.jpg'
import img2 from './imgs/gallery-05.jpg'
import img3 from './imgs/gallery-06.png'
import img4 from './imgs/gallery-02.png'
import img5 from './imgs/gallery-01.png'
import img6 from './imgs/gallery-03.jpg'
import im1 from './imgs/discount.png'
import './dis.css'
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
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam odio magni eligendi. Voluptatibus aliquid doloremque quae porro beatae consequatur deserunt! Quaerat, obcaecati molestias explicabo, perspiciatis soluta sequi odio aliquam deleniti sit animi voluptatem earum. Iste explicabo dolor, reiciendis ducimus incidunt minus delectus velit aliquam assumenda sapiente obcaecati, ratione, facilis qui
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam odio magni eligendi. Voluptatibus aliquid doloremque quae porro beatae consequatur deserunt! Quaerat, obcaecati molestias explicabo, perspiciatis soluta sequi odio aliquam deleniti sit animi voluptatem earum. Iste explicabo dolor, reiciendis ducimus incidunt minus delectus velit aliquam assumenda sapiente obcaecati, ratione, facilis qui
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam odio magni eligendi. Voluptatibus aliquid doloremque quae porro beatae consequatur deserunt! Quaerat, obcaecati molestias explicabo, perspiciatis soluta sequi odio aliquam deleniti sit animi voluptatem earum. Iste explicabo dolor, reiciendis ducimus incidunt minus delectus velit aliquam assumenda sapiente obcaecati, ratione, facilis qui?</p>
                </div>
            </div>
            <div className="Landing">
                <img src={img}></img>
                <img src={img2}></img>
                <img src={img3}></img>
                <img src={img4}></img>
                <img src={img5}></img>
                <img src={img6}></img>
            </div>
            <div className=''>
                <div class="discount" >
                    <div class="image">
                        <div class="content1">
                            <h2>We Have A Discount</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi asperiores consectetur, recusandae
                                ratione provident necessitatibus, cumque delectus commodi fuga praesentium beatae. Totam vel similique
                                laborum dicta aperiam odit doloribus corporis.
                            </p>
                            <img src={im1} alt="" />
                        </div>
                    </div>
                    <div class="form">
                        <div class="content1">
                            <h2>Request A Discount</h2>
                            <form action="">
                                <input class="input" type="text" placeholder="Your Name" name="name" />
                                <input class="input" type="email" placeholder="Your Email" name="email" />
                                <input class="input" type="text" placeholder="Your Phone" name="mobile" />
                                <textarea class="input" placeholder="Tell Us About Your Needs" name="message"></textarea>
                                <input type="submit" value="Send" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;

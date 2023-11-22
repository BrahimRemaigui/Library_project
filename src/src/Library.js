import React from 'react'
import Blogs from './Blogs';
import useFetch from "./useFetch";
export default function Library() {

    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');
    return (

        <div className='container-lib'>
            <div >
            <h2 className='listBlog'>List Of Blogs</h2>
            </div>
            {error && <div>{error}</div>}
            {isPending && <div className="loading">loading...</div>}
            {blogs && <Blogs blogs={blogs} title="Props" />}
        </div>
    )
}

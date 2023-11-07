import React from 'react'
import Blogs from './Blogs';
import useFetch from "./useFetch";
export default function Library() {

    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');
    return (

        <div className='Home'>
            <h2>kamel</h2>
            {error && <div>{error}</div>}
            {isPending && <div className="loading">loading...</div>}
            {blogs && <Blogs blogs={blogs} title="Props" />}
        </div>
    )
}

import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom";
const BlogsDatails = () => {
    const {id}=useParams()
    const history = useHistory();
    console.log(id)
    const {data:blog,isPending,error}=useFetch('http://localhost:8000/blogs/' + id)
    const handleDeleta=()=>{
        fetch('http://localhost:8000/blogs/'+blog.id,{
            method: 'DELETE'
        }).then(()=>
        history.push('/')
        )
    }
    return ( 
        <div className="Blogs_det">
            {isPending&&<div className="loading">loading</div>}
            {error&&<div>{error}</div>}
            {blog&&(
                <article>
                    <h2>The title is :{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleDeleta}>Delete</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogsDatails;
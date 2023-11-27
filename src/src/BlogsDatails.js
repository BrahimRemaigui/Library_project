import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";
import imgg from './imgs/gallery-01.png'
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
                    <h5>Written by :{blog.author}</h5>
                    <h5>Abstaract:</h5> 
                    <div className="box"> 
                    <div>{ blog.body}</div>
                    </div>
                    <img src={imgg}></img>
                    <button className="Btn_dele" onClick={handleDeleta}>Delete</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogsDatails;
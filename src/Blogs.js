import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Blogs = ({blogs, title}) => {


    return ( 
     <div className="blog-list">
      <div className="container">
      
     {blogs.map((blog)=>
        (<div className="box">
         <Link to ={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
         </Link>
         </div>
        ))}
        </div>
       
        </div>
     );
}
 
export default Blogs;
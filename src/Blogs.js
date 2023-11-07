import { Link } from "react-router-dom/cjs/react-router-dom.min";
import img from './library.jpg'

const Blogs = ({ blogs, title }) => {


   return (
      <div className="blog-list">
         <div className="container">

            {blogs.map((blog) =>
            (<>
               <div className="box">
                  <img src={img}/>
                {  <Link to={`/blogs/${blog.id}`}>
                     <div class="content">
                        <h3>{blog.title}</h3>
                        <p>Written by {blog.author}</p>
                     </div>
                  </Link>
               }
                  <div class="info">
                     <a href="">Read More</a>
                     <i class="fas fa-long-arrow-alt-right"></i>
                  </div>
               </div>
            </>
            ))}
         </div>

      </div>
   );
}

export default Blogs;
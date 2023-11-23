import { useState } from "react";
import { useHistory } from "react-router-dom";
const Contact = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('brahim');
    const history = useHistory();
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const blog = { title, body, author };
  
      
      fetch('http://localhost:8000/blogs/', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blog)
      }).then(() => {
        // history.go(-1);
        history.push('/');
      })
    }
  
    return (
      <div className="create">
        
        <form onSubmit={handleSubmit}>
        <h2>Add a New Blog</h2>
          <input 
            type="text" 
            placeholder="The Title"
            required 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            required
            placeholder="The Abstract"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
          <select
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          >
            <option value="barhim">barhim</option>
            <option value="aymen">aymen</option>
          </select>
          <button >Add Blog</button>
        </form>
      </div>
    );
}
 
export default Contact;
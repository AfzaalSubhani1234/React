import { useState } from "react";
function AddStudent() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("");
    const [course, setCourse] = useState("");
    return (
        <div>
            <h2>Add Student</h2>
            <input type='text' placeholder='Enter your name' value={name} onChange={(e) => setName(e.target.value)} />
            <input type='text' placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type='text' placeholder='Enter your course' value={course} onChange={(e) => setCourse(e.target.value)} />
            <button onSubmit={ }>Submit</button>
        </div>
    );
}

export default AddStudent;
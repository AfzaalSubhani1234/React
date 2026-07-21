import StudentCard from "../components/StudentCard";
import { useState } from "react";

function Dashboard() {
    const [count, setCount] = useState(3);
    const [showStudents, setShowStudents] = useState(true);

    const students = [
        {
            id: 1,
            name: "Ali",
            rollNo: "101",
            department: "Computer Science",
        },
        {
            id: 2,
            name: "Ahmed",
            rollNo: "102",
            department: "Software Engineering",
        },
        {
            id: 3,
            name: "Sara",
            rollNo: "103",
            department: "Information Technology",
        },
    ];

    return (
        <>
            <h2>Total Students: {count}</h2>

            <button onClick={() => setShowStudents(!showStudents)}>
                {showStudents ? "Hide Students" : "Show Students"}
            </button>

            {showStudents &&
                students.map((student) => (
                    <StudentCard
                        key={student.id}
                        name={student.name}
                        rollNo={student.rollNo}
                        department={student.department}
                    />
                ))}
        </>
    );
}

export default Dashboard;
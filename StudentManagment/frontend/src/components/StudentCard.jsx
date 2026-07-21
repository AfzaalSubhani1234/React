function StudentCard({ name, rollNo, department }) {
    return (
        <div
            style={{
                border: "1px solid black",
                padding: "15px",
                width: "220px",
                margin: "10px",
            }}
        >
            <h3>{name}</h3>
            <p>Roll No: {rollNo}</p>
            <p>Department: {department}</p>
        </div>
    );
}

export default StudentCard;
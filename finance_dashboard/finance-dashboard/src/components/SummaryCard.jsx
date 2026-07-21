import "../components/SummaryCard"

function SummaryCard(props) {
    return (
        <div className="card">
            <h2>{props.icon}</h2>

            <h3>{props.title}</h3>

            <h1>{props.amount}</h1>
        </div>
    );
}

export default SummaryCard;
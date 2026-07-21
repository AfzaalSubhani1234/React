import '../components/Sidebar.css'
function Sidebar() {
    return (
        <aside className="sidebar">

            <h2>Menu</h2>

            <ul>

                <li>🏠 Dashboard</li>

                <li>💵 Transactions</li>

                <li>📊 Reports</li>

                <li>💰 Budget</li>

                <li>⚙️ Settings</li>

            </ul>

        </aside>
    );
}

export default Sidebar;
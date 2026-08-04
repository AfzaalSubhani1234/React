import Sidebar from "../components/Sidebar/Sidebar";

function DashboardLayout({ children }) {
    return (
        <div style={{ display: "flex", }}>
            <Sidebar />

            <main style={{ flex: 1, padding: "30px", }} >
                {children}
            </main>
        </div>
    );
}

export default DashboardLayout;
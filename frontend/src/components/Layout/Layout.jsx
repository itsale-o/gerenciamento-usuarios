import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import "./Layout.css";

function Layout() {
    return (
        <div className="layout">
            <Header />
            <div className="layout-main">
                <Sidebar />

                <main className="layout-content">
                    <Outlet />
                </main>
            </div>
        </div>
    )
}

export default Layout;
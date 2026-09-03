import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { getTenantBranding } from "../../services/brandingService";
import "./Layout.css";

function Layout() {
    const [branding, setBranding] = useState(null);

    useEffect(() => {
        let isMounted = true;

        getTenantBranding().then((data) => {
            if (isMounted) setBranding(data);
        });

        return () => {
            isMounted = false;
        };
    }, []);

    return (
        <div className="layout">
            <Sidebar branding={branding} />
            <div className="layout-main">
                <Header />

                <main className="layout-content">
                    <Outlet />
                </main>
            </div>
        </div>
    )
}

export default Layout;
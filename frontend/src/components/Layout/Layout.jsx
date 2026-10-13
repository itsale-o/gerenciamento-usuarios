import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { getTenantBranding } from "../../services/brandingService";
import PageHeader from "../PageHeader/PageHeader";
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

    const themeVars = branding ? {
        '--primary-color': branding.colors.primary,
        '--primary-hover-color': branding.colors.primaryHover,
        '--accent-color': '#3B82A0',
        '--login-btn': branding.colors.primary,
        '--login-btn-hover': branding.colors.primaryHover,
    } : undefined;

    return (
        <div className="layout" style={themeVars}>
            <Sidebar branding={branding} />
            <div className="layout-main">
                <Header />

                <main className="layout-content">
                    <PageHeader />
                    <Outlet />
                </main>
            </div>
        </div>
    )
}

export default Layout;
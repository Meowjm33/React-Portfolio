import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

//yo Layout.jsx le hamro screen ma k k display kata huncha bhanera denote garcha!!
const Layout = () => {
    return (
        <div className="flex min-h-screen">
            {/* Sidebar fixed width */}
            <div className="w-64 shrink-0">
                <Sidebar />
                {/* yeta Sidebar call gare pachi App.jsx ma Sidebar call garirakhna pardaina (because sidebar ko position fixed rakhdeko cha) */}
            </div>

            {/* Main Content Area */}
            <div className="flex-1 bg-white">
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;
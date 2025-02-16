"use client";

import React from 'react';
import Link from 'next/link';
import { FaHome, FaClipboardList, FaRedo, FaExclamationTriangle, FaGavel, FaEnvelope, FaChartBar, FaDollarSign } from 'react-icons/fa';

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="dashboard">
            <aside className="sidebar">
                <nav>
                    <ul>
                        <li><Link href="/dashboard/available"><FaHome /> Available</Link></li>
                        <li><Link href="/dashboard/current"><FaClipboardList /> Current</Link></li>
                        <li><Link href="/dashboard/revisions"><FaRedo /> Revisions</Link></li>
                        <li><Link href="/dashboard/dispute"><FaExclamationTriangle /> Dispute</Link></li>
                        <li><Link href="/dashboard/bids"><FaGavel /> Bids</Link></li>
                        <li><Link href="/dashboard/messages"><FaEnvelope /> Messages</Link></li>
                        <li><Link href="/dashboard/statistics"><FaChartBar /> Statistics</Link></li>
                        <li><Link href="/dashboard/finance"><FaDollarSign /> Finance</Link></li>
                    </ul>
                </nav>
            </aside>
            <div className="main-content">
                <header className="navbar">
                    <div className="navbar-left">
                        <h1>Dashboard</h1>
                    </div>
                    <div className="navbar-right">
                        <div className="user-avatar">
                            <img src="/path-to-avatar.jpg" alt="User Avatar" />
                            <div className="dropdown">
                                <button className="dropdown-button">Profile</button>
                                <div className="dropdown-content">
                                    <Link href="/profile">Profile</Link>
                                    <Link href="/logout">Logout</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <main>
                    {children}
                </main>
            </div>
            <style jsx>{`
                .dashboard {
                    display: flex;
                }
                .sidebar {
                    width: 250px;
                    background: #2c3e50;
                    color: white;
                    height: 100vh;
                    padding: 20px;
                }
                .sidebar nav ul {
                    list-style: none;
                    padding: 0;
                }
                .sidebar nav ul li {
                    margin: 20px 0;
                    display: flex;
                    align-items: center;
                }
                .sidebar nav ul li a {
                    color: white;
                    text-decoration: none;
                    display: flex;
                    align-items: center;
                }
                .sidebar nav ul li a svg {
                    margin-right: 10px;
                }
                .main-content {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                }
                .navbar {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 10px 20px;
                    background: #34495e;
                    color: white;
                }
                .user-avatar {
                    position: relative;
                }
                .user-avatar img {
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                }
                .dropdown {
                    position: absolute;
                    top: 50px;
                    right: 0;
                    display: none;
                    background: white;
                    color: black;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                }
                .dropdown-button:hover + .dropdown,
                .dropdown:hover {
                    display: block;
                }
                .dropdown-content a {
                    display: block;
                    padding: 10px;
                    text-decoration: none;
                    color: black;
                }
                .dropdown-content a:hover {
                    background: #f1f1f1;
                }
                main {
                    padding: 20px;
                    background: #ecf0f1;
                    flex: 1;
                }
            `}</style>
        </div>
    );
};

export default DashboardLayout;
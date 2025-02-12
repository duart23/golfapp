"use client";
import React from "react";
import Link from "next/link";
import './Dashboard.css';

export const Dashboard = () => {

    return (
        <div className="dashboard w-60 h-screen bg-blue-500 text-white text-xl fixed top-0 left-0  p-6">
          <h1 className="text-2xl font-bold mb-6 text-center">Welcome!</h1>
          <ul className="space-y-4">
            <li>
              <Link href="/profile" className="block p-2 rounded-lg hover:bg-blue-600 transition">
                Profile
              </Link>
            </li>
            <li>
              <Link href="/about" className="block p-2 rounded-lg hover:bg-blue-600 transition">
                Games
              </Link>
            </li>
            <li>
              <Link href="/stats" className="block p-2 rounded-lg hover:bg-blue-600 transition">
                Statistics
              </Link>
            </li>
            <li>
              <Link href="/settings" className="block p-2 rounded-lg hover:bg-blue-600 transition">
                Settings
              </Link>
            </li>
          </ul>
        </div>
      );
    };

export default Dashboard;

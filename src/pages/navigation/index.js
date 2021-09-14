import React from 'react'
import {
    BrowserRouter,
} from "react-router-dom";
import SideBar from '../../components/Sidebar';
import AppRouter from './Routes'
export default function App() {
    return (
        <BrowserRouter>
            <SideBar>
                <AppRouter />
            </SideBar>
        </BrowserRouter>
    )
}
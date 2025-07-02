import { Outlet } from "@remix-run/react";

export default function Dashboard(){
    return(
        <>
            <h2>Dashboard</h2>
            <Outlet/>
        </>
    )
}
import { Link, Outlet } from "@remix-run/react";

export default function Market(){
    return(
        <>
            <h2>Dashboard</h2>
            <Link to='add'>Add</Link>
            <Outlet/>
        </>
    )
}
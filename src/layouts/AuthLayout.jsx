import { Outlet } from "react-router-dom";

function AuthLayout() {
    return (
        <div className=" text-3xl font-bold">
            Auth Layout
            <Outlet />
        </div>
    );
}

export default AuthLayout;
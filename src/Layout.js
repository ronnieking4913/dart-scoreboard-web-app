import { Outlet } from "react-router-dom";

function Layout() {
    return(
        <>
            {
                <div className={ "outlet-container" } >
                    <Outlet />
                </div>
            }
        </>
    );
}

export default Layout;

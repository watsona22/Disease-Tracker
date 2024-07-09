import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
// import "../styles/header.css";
// import AuthService from "../utils/auth.js";
import { useQuery } from "@apollo/client";

function Header() {
    const currentPage = useLocation().pathname;

    // const [search, setSearch] = useState("");
    //   const { loading, data } = useQuery(GET_USER);
    // if statement below allows page to render even when loading
    // if (loading) {
    //     return (<p>...</p>);
    // }


    return (
        <div className="header-container">
            <Link to="/">
                <h1>Disease Tracker</h1>
            </Link>
            <Link
                to="/Data"
                // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                className={currentPage === '/Data' ? 'nav-link active' : 'nav-link'}
            >
                <div className="w-100 mt-auto text-dark p-4">
                    <p>Data</p>
                </div>

            </Link>
            {/* <div className="login-container">
                {!AuthService.loggedIn() ? (
                    <>
                        <Link to="login">
                            <h3>Login</h3>
                        </Link>
                        <Link to="/sign-up">
                            <h3>Sign-Up</h3>
                        </Link>
                    </>
                ) : (
                    <>
                        {" "}
                        <h3>Welcome, {data.user.firstName}</h3>
                        <h3 onClick={AuthService.logout}>Logout</h3>
                    </>
                )}
            </div> */}
        </div>
    );
}

export default Header;

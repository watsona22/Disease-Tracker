import { useState } from "react";
import { Link } from "react-router-dom";
// import "../styles/header.css";
// import AuthService from "../utils/auth.js";
import { useQuery } from "@apollo/client";

function Header() {
    const [search, setSearch] = useState("");
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

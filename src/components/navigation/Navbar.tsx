import * as React from "react"
import { Link } from "react-router-dom"
import { MdMenu } from "react-icons/md"

export default class Navbar extends React.Component {
    render() {
        return (
            <div className="page-section navbar-container">
                <div className="menu-go-home-btns-container">
                    <div className="menu-btn-container">
                        <MdMenu size="1.5em" className="menu-btn" />
                    </div>
                    <div className="go-home-btn-container">
                        <Link
                            to="/"
                            className="go-home-link"
                            title="Go to the homepage."
                        >
                            <img
                                src="/moviehunt-logo-icon-only.png"
                                alt="MovieHunt logo"
                                className="moviehunt-logo"
                            />
                            <span className="app-name">MovieHunt</span>
                        </Link>
                    </div>
                </div>
                <div className="nav-btns-container">
                    <div className="tab-chooser-container">
                        <ul className="tabs-list">
                            <li className="tabs active">
                                <span className="tab-title">Top rated</span>
                            </li>
                            <li className="tabs disabled-btn">
                                <span className="tab-title">Movies</span>
                            </li>
                            <li className="tabs disabled-btn">
                                <span className="tab-title">Discover</span>
                            </li>
                        </ul>
                    </div>
                    <div className="user-account-actions-container">
                        <div className="left-divider-container">
                            <div className="divider"></div>
                        </div>
                        <div className="login-btn">
                            <span className="login-text">Login</span>
                        </div>
                        <div className="sign-up-btn">
                            <span className="sign-up-text">Sign up</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

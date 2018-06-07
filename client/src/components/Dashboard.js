import React from "react";
import { NavLink } from "react-router-dom";

const Dashboard = () => {
    return (<div>
        <div className="fixed-action-btn">
            <NavLink className="btn-floating btn-large red" to="/surveys/new">
                <i className="material-icons">+</i>
            </NavLink>
        </div>
    </div>);
}

export default Dashboard;
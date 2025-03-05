import React from "react";
import { Link } from "react-router-dom";

function UserList() {
    const users = ['Manya', 'Akshat', 'Anshita', 'Hrishabh'];
    return (
        <div>
            <ul>
                {users.map(user => (
                    <li key={user}>
                        <Link to={`/profile/${user}`}>
                            {user}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default UserList;

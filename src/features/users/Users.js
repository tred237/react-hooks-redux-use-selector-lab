import React from "react";
import { useSelector } from "react-redux";

function Users() {
  const users = useSelector((state) => state.users)

  console.log(users)

  return (
    <div>
      <ul>
        Users!
        <p>{`Total Users: ${users.length}`}</p>
        {/* Write code here that displays the usernames of all users in the Redux store */}
        {/* In addition, display the total number of users curently in the store */}
        {users.map(e => <li key={e.username}>{e.username}</li>)}
      </ul>
    </div>
  );
}

export default Users;

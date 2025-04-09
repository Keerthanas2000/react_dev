import React from 'react';

function UserList(props) {
  return (
    <ul>
      {props.users.map((user, index) => (
        <li key={index}>{user}</li>
      ))}
    </ul>
  );
}

export default UserList;

import React, { useState, useEffect } from 'react';
import UserList from './UserList';
import withLoading from './withLoading';

const UserListWithLoading = withLoading(UserList);

function HOCFUNC() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setUsers(["Keerthana", "Suresh", "John"]);
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      <h2>Users</h2>
      {/* This component now supports loading logic thanks to HOC */}
      <UserListWithLoading isLoading={loading} users={users} />
    </div>
  );
}

export default HOCFUNC;

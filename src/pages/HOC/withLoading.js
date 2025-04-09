import React from 'react';

// HOC function: takes a component and returns a new one
function withLoading(UserList) {
  return function EnhancedComponent({ isLoading, ...props }) {
    if (isLoading) {
      return <h3>User list  Loading...</h3>;
    }
    return <UserList {...props} />;
  };
}

export default withLoading;

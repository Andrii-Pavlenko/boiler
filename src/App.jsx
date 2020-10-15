import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getUsers } from "./redux/selectors";
import { loadUsers } from "./redux/actions/loadingUsers";

function App({ loadUsers, getUsers }) {
  useEffect(() => {
    !getUsers?.length && loadUsers();
  }, [getUsers, loadUsers]);
  if (getUsers?.length) {
    return getUsers.map((item) => <div>{JSON.stringify(item, null, 4)}</div>);
  }
  return <></>;
}

export default connect(
  (state) => ({
    getUsers: getUsers(state),
  }),
  (dispatch) => ({
    loadUsers: () => dispatch(loadUsers()),
  })
)(App);

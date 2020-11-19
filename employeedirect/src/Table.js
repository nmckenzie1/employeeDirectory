import React, { useState, useEffect } from "react";

const Table = ({ users }) => {
  const [sortedUsers, updateSortedUsers] = useState([]);

  useEffect(() => updateSortedUsers(users), [users]);

  return (
    <div>
      <table className="table center">
        <thead>
          <tr>
            <th
              scope="col"
              onClick={() => {
                const usersCopy = [...users];
                const updateSort = usersCopy.sort((a, b) => {
                  const nameA = a.name.first;
                  const nameB = b.name.first;

                  if (nameA < nameB) {
                    return -1;
                  }
                  if (nameA > nameB) {
                    return 1;
                  }

                  return 0;
                });

                updateSortedUsers(updateSort);
              }}
            >
              First
            </th>
            <th scope="col">Last</th>
            <th scope="col">email</th>
            <th scope="col">cell</th>
            <th scope="col">city</th>
            <th scope="col">state</th>
           <th scope="col">picture</th>
          </tr>
        </thead>
        <tbody>
          {sortedUsers.map(
            ({
              location: { city, state, },
              picture: { thumbnail },
              cell,
              email,
              name: { first, last}
            }) => (
              <tr key={email}>
                <th>{first}</th>
                <td>{last}</td>
                <td>{email}</td>
                <td>{cell}</td>
                <td>{city}</td>
                <td>{state}</td>
                <td>
                <img src={thumbnail} />
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

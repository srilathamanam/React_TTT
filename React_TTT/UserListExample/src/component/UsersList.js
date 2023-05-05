import React from 'react'
import {useEffect} from 'react'
import {useState} from 'react'

function UsersList() {
    const [users, setUsers] = useState([]);
  const [selectUser, setSelectUser] = useState(null);
  const [searchUser, setSearchUser] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  const handleOnClick = (user) => {
    setSelectUser(user);
  }

  const handleClose = () => {
    setSelectUser(null);
  }

  const serachByName = (event) => {
    setSearchUser(event.target.value);
  }

  const filterU= users.filter(user => {
    return user.name.toLowerCase().includes(searchUser.toLowerCase());
  });

  return (
    <div>
    <input type="text" placeholder="Search by name" value={searchUser} onChange={serachByName} />
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        {filterU.map(user => (
          <tr key={user.id} onClick={() => handleOnClick(user)}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
          </tr>
        ))}
      </tbody>
    </table>
    {selectUser && (
      <div>
        <div>{selectUser.name}'s Address:</div>
        <div>Street: {selectUser.address.street}</div>
        <div>Suite: {selectUser.address.suite}</div>
        <div>City: {selectUser.address.city}</div>
        <div>Zipcode: {selectUser.address.zipcode}</div>
        <div>Geo: ({selectUser.address.geo.lat}, {selectUser.address.geo.lng})</div>
        <button onClick={handleClose}>Close</button>
      </div>
    )}
  </div>
);
  
}

export default UsersList

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, deleteUser } from '../features/users';

export const Home = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');

  const userList = useSelector((state) => state.users.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="addUser">
        <input
          type="text"
          placeholder="Name..."
          onChange={(event) => setName(event.target.value)}
        />
        <input
          type="text"
          placeholder="Username..."
          onChange={(event) => setUsername(event.target.value)}
        />
        <button
          onClick={() => {
            dispatch(
              addUser({
                id: userList[userList.length - 1].id + 1,
                name: name,
                username: username,
              })
            );
          }}
        >
          Add User
        </button>
      </div>
      <div className="displayUsers">
        {userList.map((user) => {
          return (
            <div key={user.id}>
              <h1>{user.name}</h1>
              <h2>{user.username}</h2>
              <input
                type="text"
                placeholder="new username"
                onChange={(event) => setUsername(event.target.value)}
              />
              <button>Update username</button>
              <button
                onClick={() => {
                  dispatch(deleteUser({ id: user.id }));
                }}
              >
                Delete user
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

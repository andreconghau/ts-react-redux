import * as React from 'react';
import { useAppSelector } from '../../store/store';

export interface IUserListProps {}

export function UserList(props: IUserListProps) {
  const userList = useAppSelector((state) => state.user.users);
  console.log(userList);
  return (
    <div>
      <h1>This is user list:</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((userItem) => (
            <tr key={userItem.id}>
              <td>{userItem.id}</td>
              <td>{userItem.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

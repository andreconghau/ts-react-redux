import * as React from 'react';
import { useAppSelector } from '../../store/store';

export interface IUserListProps {}

export function UserListThunk(props: IUserListProps) {
  const userList = useAppSelector((state) => state.userThunk.usersThunk);
  console.log(userList);
  return (
    <div>
      <h1>This is user list:</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>FName</th>
            <th>LName</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((userItem) => (
            <tr key={userItem.id}>
              <td>{userItem.id}</td>
              <td>{userItem.email}</td>
              <td>{userItem.first_name}</td>
              <td>{userItem.last_name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

import * as React from 'react';
import { useAppDispatch } from '../../store/store';
import { addUser } from '../../store/features/UserSlice';

export interface IUserAddProps {}

export function UserAdd(props: IUserAddProps) {
  const name = React.useRef<string>('');

  const dispath = useAppDispatch();
  return (
    <div>
      <label htmlFor="User Name">User Name</label>
      <input type="text" onChange={(e) => (name.current = e.target.value)} />
      <button onClick={() => dispath(addUser({ name: name.current }))}>add</button>
    </div>
  );
}

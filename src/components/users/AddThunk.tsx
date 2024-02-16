import * as React from 'react';
import { useAppDispatch } from '../../store/store';
import { addUser } from '../../store/features/UserSlice';

export interface IUserAddProps {}

export function UserAddThunk(props: IUserAddProps) {
  const name = React.useRef<string>('');

  const dispath = useAppDispatch();
  return (
    <div className="border rounded-md p-2 shadow-md m-2">
      <label htmlFor="User Name">User Name</label>
      <input type="text" onChange={(e) => (name.current = e.target.value)} />
      <button
        onClick={() => dispath(addUser({ name: name.current }))}
        className="bg-violet-500  text-white rounded-md px-4 py-2 cursor-pointer hover:bg-violet-600 active:bg-violet-700"
      >
        add
      </button>
    </div>
  );
}

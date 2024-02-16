import { PayloadAction, asyncThunkCreator, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export interface UserThunk {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
}

interface UserThunkState {
  usersThunk: UserThunk[];
}

const initialState: UserThunkState = {
  usersThunk: [],
};

export const userFetch = createAsyncThunk('user/fetch', async (thunkAPI) => {
  const res = await fetch('https://reqres.in/api/users?page=1', {
    method: 'GET',
  });
  const { data, errors } = await res.json();
  console.log('Innto createAsyncThunk', data, errors);
  if (errors) return;
  return data;
});

export const UserThunkSlice = createSlice({
  name: 'userThunk',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<{ name: string }>) => {
      console.log(state, action);
    },
  },
  extraReducers(builder) {
    builder.addCase(userFetch.fulfilled, (state, action) => {
      state.usersThunk = action.payload;
    });
  },
});

export default UserThunkSlice.reducer;
export const { addUser } = UserThunkSlice.actions;

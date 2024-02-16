# ts-react-redux

TypeScript React Redux Sample

## Installation

```bash
npx create-react-app . --template typescript

npm install @reduxjs/toolkit react-redux
```

## Dev & Build
Dev
```
npm run start
```
Build
```
npm run build
```

## Flow to develop Redux
Step1: Create `UserSlice.ts` into folder `store/features`, and define Interface of state, and define the State Slice with `key`, `initialState`, `reducer`, `action` and export them as below
```ts
export const UserSlice = createSlice({
  name: 'user', // unique key
  initialState, // default init value for state
  reducers: {
    addUser: (state, action: PayloadAction<{ name: string }>) => {
      console.log(state, action);
      // update state when call dispatch from Add Component
      state.users.push({
        id: state.users.length,
        name: action.payload.name,
      });
    },
  },
});

export default UserSlice.reducer;
export const { addUser } = UserSlice.actions;
```
Step2: Define Store, create `store/store.ts` as below
```ts
export const store = configureStore({
  reducer: {
    user: UserSlice,
  },
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch; // define func to do dispatch in Comp
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector; // define func to do selector in Comp
```
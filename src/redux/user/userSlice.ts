import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
    id : number;
    firstName: string;
    lastName: string;
    email: string;
    gender: string;
    country: string;
    handicap: number;
}

const initialState: UserState = {
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
    country: '',
    handicap: 0,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<UserState>) => {
            return action.payload;
    },
    clearUser: () => initialState,
    },
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
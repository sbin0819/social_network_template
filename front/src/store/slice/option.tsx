import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../';

interface OptionState {
  onLeft: boolean;
  onRight: boolean;
  rightEvent: boolean;
  onChat: boolean;
}

const initialState: OptionState = {
  onLeft: true,
  onRight: true,
  rightEvent: true,
  onChat: false,
};

export const optionSlice = createSlice({
  name: 'option',
  initialState,
  reducers: {
    onCloseLeftLayout: (state) => ({ ...state, onLeft: false }),
    onOpenLeftLayout: (state) => ({ ...state, onLeft: true }),
    onCloseRightLayout: (state) => ({ ...state, onRight: false }),
    onOpenRightLayout: (state) => ({ ...state, onRight: true }),
    onCloseRightEvent: (state) => ({ ...state, rightEvent: false }),
    onOpenRightEvent: (state) => ({ ...state, rightEvent: true }),
    onCloseChat: (state) => ({ ...state, onChat: false }),
    onOpenChat: (state) => ({ ...state, onChat: true }),
  },
});

const { reducer } = optionSlice;

export const { actions } = optionSlice;

export default reducer;

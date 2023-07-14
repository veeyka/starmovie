import { Action } from "redux";
import { useDispatch } from "react-redux";



export type AsyncAction = (dispatch: (action: Action) => any) => void;
export type Dispatcher = (action: AsyncAction | Action) => void;
export const useAppDispatch: () => Dispatcher = useDispatch as any;
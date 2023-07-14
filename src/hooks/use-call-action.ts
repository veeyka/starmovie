import { useCallback } from "react";
import { useDispatch } from "react-redux";
import actionTypes from "../redux/actions/actionTypes";
import { NestedObject } from "../types/common/common";


export default function useCallAction() {
	const dispatch = useDispatch();

	return useCallback(
		(type: keyof typeof actionTypes, payload?: NestedObject) => {
			return dispatch({ type: actionTypes[type], payload });
		},
		[dispatch]
	);
}

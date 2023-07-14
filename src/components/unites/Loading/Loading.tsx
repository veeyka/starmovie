import React from "react";
import { LoadingContainer } from "./styles";

interface Props {
	className?: string;
	style?:Record<any, any>;
}

export default function Loading(props: Props) {
	const { className = "" ,  style={}} = props;
	return (
		<div className={`w-20 flex place-items-center bg-danger justify-center h-10 mx-auto`} style={style}>
			<LoadingContainer className={className} />
		</div>
	);
}

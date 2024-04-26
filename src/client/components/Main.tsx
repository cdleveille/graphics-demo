import { useEffect } from "react";

import { Game } from "@game";

export const Main = () => {
	useEffect(() => {
		new Game();
	}, []);

	return <div id="ball">hi!</div>;
};

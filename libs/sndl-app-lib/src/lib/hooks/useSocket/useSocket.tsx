import {
	useEffect,
	useMemo,
	useState
} from "react";
import {
	io,
	Socket
} from "socket.io-client";
import { useTypedSelector } from "../../redux";
import { decryptUserInfo } from "../../utils";

export const UseSocket = () => {
	const token = useTypedSelector(store => store.authSlice.jwt);

	const [socket, setSocket] = useState<Socket>();

	const socketConfig = useMemo(
		() => ({
			path: "/websocket",
			reconnectionDelayMax: 10000,
			transports: ["websocket"],
			auth: {
				token: `Bearer ${decryptUserInfo(token)}`
			}
		}),
		[token]
	);

	useEffect(
		() => {
        
			const connection = io(
				`${import.meta.env.VITE_BACKEND_URL}`,
				socketConfig
			);

			setSocket(connection);
		},
		[socketConfig]
	);

	return {
		socket
	};
};
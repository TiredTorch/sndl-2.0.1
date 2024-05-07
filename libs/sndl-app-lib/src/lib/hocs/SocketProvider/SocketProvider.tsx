import {
	createContext,
	FC,
	PropsWithChildren,
	useContext
} from "react";
import { UseSocket } from "../../hooks";
import { SocketProviderProps } from "./SocketProvider.types";

export const SocketContext = createContext<SocketProviderProps | null>(null);

export const useCurrentSocket = () => useContext(SocketContext);

export const SocketProvider: FC<PropsWithChildren<Record<string, unknown>>> = ({
	children
}) => {
	const { socket } = UseSocket();

	return (
		<SocketContext.Provider
			value={{
				socket
			}}
		>
			{children}
		</SocketContext.Provider>
	);
};

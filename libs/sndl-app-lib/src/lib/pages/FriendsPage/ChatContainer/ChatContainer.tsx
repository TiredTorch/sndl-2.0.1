import { SendMessageForm } from "../../../components";
import ChatMessageItem from "./ChatMessageItem/ChatMessageItem";

const ChatContainer = () => {
	return (
        <div>
            <ChatMessageItem/>
            <SendMessageForm/>
        </div>
	);
};

export default ChatContainer;
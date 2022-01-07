import Client from "../client/Client";
import ChatLocation from "./ChatLocation";
import ChatPermissions from "./ChatPermissions";
import ChatPhoto from "./ChatPhoto";
import Message from "./Message";

export default class Chat {
    private client: Client;
    public id: number;
    public type: "private" | "group" | "supergroup" | "channel";

    constructor(chat: ChatData, client: Client) {
        this.id = chat.id;
        this.type = chat.type;

        this.client = client;
    }

    public send(text: string) {
        return new Promise(async (res, rej) => {
            try {
                let data = await this.client.api(`sendMessage?chat_id=${this.id}&text=${text}`);
                res(new Message(data, this.client));
            } catch (e) {
                rej(e);
            }
        });
    }
}

interface ChatData {
    id: number;
    type: "private" | "group" | "supergroup" | "channel";
    title?: string;
    username?: string;
    first_name?: string;
    last_name?: string;
    photo?: ChatPhoto;
    bio?: string;
    description: string;
    invite_link?: string;
    pinned_message: Message;
    permissions: ChatPermissions;
    slow_mode_delay?: number;
    sticker_set_name?: string;
    can_set_sticker_set?: boolean;
    linked_chat_id?: number;
    location: ChatLocation;
}

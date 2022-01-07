import User from "./User";
import Chat from "./Chat";
import Client from "../client/Client";

export default class Message {
    public client: Client;
    public id: number;
    public author: User;
    public chat: Chat;
    public date: Date;
    public text: string;

    constructor(message: any, client: Client) {
        console.log(message)
        this.id = message.message_id;
        this.author = new User(message.from);
        this.chat = new Chat(message.chat, client);
        this.date = new Date(message.date * 1000);
        this.text = message.text;

        this.client = client;
    }

    public reply(text: string) {
        return new Promise(async (res, rej) => {
            try {
                let data = await this.client.api(`sendMessage?chat_id=${this.chat.id}&text=${text}&reply_to_message_id=${this.id}`);
                res(new Message(data, this.client));
            } catch (e) {
                rej(e);
            }
        });
    }
}

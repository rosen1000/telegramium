import axios from "axios";
import EventEmitter = require("events");
import Polling from "../Polling";
import Message from "../structures/Message";
import User from "../structures/User";

export default class Client extends EventEmitter {
    private readonly API_URL = "https://api.telegram.org/bot";
    public user: User | undefined;
    private token: string | undefined;
    private polling: Polling | undefined;
    constructor() {
        super();
    }

    public async login(token: string) {
        return new Promise((res, rej) => {
            axios
                .get(this.API_URL + token + "/getMe")
                .then((d) => {
                    let data = d.data;
                    this.user = new User(data.result);
                    this.token = token;
                    this.polling = new Polling(this);
                    this.polling.loop();

                    this.emit("ready");
                })
                .catch(() => {
                    rej("Invalid token");
                });
        });
    }

    public api(method: string) {
        return new Promise<any>((res, rej) => {
            axios
                .get(this.API_URL + this.token + "/" + method)
                .then((data) => {
                    res(data.data.result);
                })
                .catch(rej);
        });
    }

    public handleUpdates(updates: any) {
        for (let update of updates) {
            if (update.message) {
                this.emit("message", new Message(update.message, this));
            }
        }
    }
}

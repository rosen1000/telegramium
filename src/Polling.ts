import axios from "axios";
import Client from "./client/Client";

export default class Polling {
    private client: Client;
    private offset = 0;

    constructor(client: Client) {
        this.client = client;
    }

    private async *[Symbol.asyncIterator]() {
        while (true) {
            try {
                let updates = await this.client.api(`getUpdates?timeout=50&offset=${this.offset}`);
                let last = updates[updates.length - 1];
                if (last) this.offset = last.update_id + 1;
                yield updates;
            } catch (e) {
                throw e;
            }
        }
    }

    public async loop() {
        for await (const upgrades of this) {
            this.client.handleUpdates(upgrades);
        }
    }
}

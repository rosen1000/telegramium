import EventEmitter = require("events");
import { Message } from "../src";

declare namespace Telegramium {
    export class Client extends EventEmitter {
        
    }
}

declare module 'telegramium' {
    export class Client extends EventEmitter {
        constructor();

        public on<K extends keyof ClientEvents>(event: K, listener: (...args: ClientEvents[K]) => void): this;
        public on<S extends string | symbol>(event: Exclude<S, keyof Client>, listener: (...args: any[]) => void): this

        public once<K extends keyof ClientEvents>(event: K, listener: (...args: ClientEvents[K]) => void): this;
        public once<S extends string | symbol>(event: Exclude<S, keyof ClientEvents>, listener: (...args: any[]) => void): this;
    
        public emit<K extends keyof ClientEvents>(event: K, ...args: ClientEvents[K]): boolean;
        public emit<S extends string | symbol>(event: Exclude<S, keyof ClientEvents>, ...args: any[]): boolean;
    
        public off<K extends keyof ClientEvents>(event: K, listener: (...args: ClientEvents[K]) => void): this;
        public off<S extends string | symbol>(event: Exclude<S, keyof ClientEvents>, listener: (...args: any[]) => void): this;
    
        public removeAllListeners<K extends keyof ClientEvents>(event?: K): this;
        public removeAllListeners<S extends string | symbol>(event?: Exclude<S, keyof ClientEvents>): this;
    }
}

interface ClientEvents {
    ready: [];
    message: [message: Message]
}

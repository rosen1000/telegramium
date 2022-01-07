import Client from "../client/Client";

export default class User {
    public id: number;
    public isBot: boolean;
    public firstName: string;
    public lastName?: string;
    public username?: string;
    public languageCode?: string;
    public canJoinGroups?: boolean;
    public canReadAllGroupMessages?: boolean;
    public supportsInlineQueries?: boolean;

    constructor(data: UserData) {
        this.id = data.id;
        this.isBot = data.is_bot;
        this.firstName = data.first_name;
        this.lastName = data.last_name;
        this.username = data.username;
        this.languageCode = data.language_code;
        this.canJoinGroups = data.can_join_groups;
        this.canReadAllGroupMessages = data.can_read_all_group_messages;
        this.supportsInlineQueries = data.supports_inline_queries;
    }

    public generateInvite() {
        return `https://t.me/${this.username}/`;
    }
}

interface UserData {
    id: number;
    is_bot: boolean;
    first_name: string;
    last_name?: string
    username?: string;
    language_code?: string;
    can_join_groups: boolean;
    can_read_all_group_messages: boolean;
    supports_inline_queries: boolean;
}

export default class ChatPermissions {
    public canSendMessages: boolean;
    public canSendMediaMessages: boolean;
    public canSendPolls: boolean;
    public canSendOtherMessages: boolean;
    public canAddWebPagePreviews: boolean;
    public canChangeInfo: boolean;
    public canInviteUsers: boolean;
    public canPinMessages: boolean;

    constructor(data: ChatPermissionsData) {
        this.canSendMessages = data.can_send_messages;
        this.canSendMediaMessages = data.can_send_media_messages;
        this.canSendPolls = data.can_send_polls;
        this.canSendOtherMessages = data.can_send_other_messages;
        this.canAddWebPagePreviews = data.can_add_web_page_previews;
        this.canChangeInfo = data.can_change_info;
        this.canInviteUsers = data.can_invite_users;
        this.canPinMessages = data.can_pin_messages;
    }
}

interface ChatPermissionsData {
    can_send_messages: boolean;
    can_send_media_messages: boolean;
    can_send_polls: boolean;
    can_send_other_messages: boolean;
    can_add_web_page_previews: boolean;
    can_change_info: boolean;
    can_invite_users: boolean;
    can_pin_messages: boolean;
}

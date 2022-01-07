export default class ChatPhoto {
    public small_file_id: string;
    public small_file_unique_id: string;
    public big_file_id: string;
    public big_file_unique_id: string;
    
    constructor(data: ChatPhotoData) {
        this.small_file_id = data.small_file_id;
        this.small_file_unique_id = data.small_file_unique_id;
        this.big_file_id = data.big_file_id;
        this.big_file_unique_id = data.big_file_unique_id;
    }
}

interface ChatPhotoData {
    small_file_id: string;
    small_file_unique_id: string;
    big_file_id: string;
    big_file_unique_id: string;
}

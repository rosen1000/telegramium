export default class ChatLocation {
    public location: Location;
    public address: string;

    constructor(data: ChatLocationData) {
        this.location = new Location(data.location);
        this.address = data.address;
    }
}

interface ChatLocationData {
    location: LocationData;
    address: string;
}

class Location {
    public longitude: number;
    public latitude: number;
    public horizontalAccuracy?: number;
    public livePeriod?: number;
    public heading?: number;
    public proximityAlertRadius?: number;

    constructor(data: LocationData) {
        this.longitude = data.longitude;
        this.latitude = data.latitude;
        this.horizontalAccuracy = data.horizontal_accuracy;
        this.livePeriod = data.live_period;
        this.heading = data.heading;
        this.proximityAlertRadius = data.proximity_alert_radius;
    }
}

interface LocationData {
    longitude: number;
    latitude: number;
    horizontal_accuracy: number;
    live_period: number;
    heading: number;
    proximity_alert_radius: number;
}

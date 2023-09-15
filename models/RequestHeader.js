export class RequestHeader {

    constructor(
        messageID,
        originatorConversationID,
        channelCode,
        timeStamp
    ) {
        RequestHeader.initialize(this, messageID, originatorConversationID, channelCode, timeStamp);
    }
}
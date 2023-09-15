const notifyBiller = async (req, res, next) => {
    try {
        let load = req.body;
        let messageID = load.header.messageID;
        let originatorConversationID = load.header.originatorConversationID;
        let transactionId = load.requestPayload.additionalData.notificationData.transactionID;

        // create new bill record

        //  acknowledge receipt
        let replyObj = {
            header: {
                messageID,
                originatorConversationID,
                statusCode: "0",
                statusMessage: "Notification received"
            },
            responsePayload: {
                transactionInfo: {
                    transactionId
                }
            }
        }
        res.send(replyObj)
    } catch (error) {
        console.log(error);
        res.send({ code: "1", message: "Customer not found" })
    }
}

module.exports = notifyBiller
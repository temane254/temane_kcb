const BillQuery = async (req, res, next) => {
    try {

        let load = req.body;
        let messageID = load.header.messageID;
        let originatorConversationID = load.header.originatorConversationID;


        // return customer info
        let replyObj = {
            header: {
                messageID,
                originatorConversationID,
                statusCode: "0",
                statusMessage: "Processed Successfully"
            },
            responsePayload: {
                transactionInfo: {
                    transactionId: "38212940",
                    utilityName: "KWS Parking",
                    customerName: "ELIZA ATULIAN",
                    amount: "100.00",
                    currency: "KES",
                    billType: "FIXED",
                    billDueDate: ""
                }
            }
        }

        res.send(replyObj)

    } catch (error) {
        res.send(error)
    }
}

module.exports = BillQuery
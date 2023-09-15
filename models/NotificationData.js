export class NotificationData {

    constructor(
        businessKey, businessKeyType, debitMSISDN,
        transactionAmt, transactionDate, transactionID,
        firstName, middleName, lastName,
        currency, narration, transactionType,
        balance
    ) {

        NotificationData.initialize(this,
            businessKey, businessKeyType, debitMSISDN,
            transactionAmt, transactionDate, transactionID,
            firstName, middleName, lastName, currency,
            narration, transactionType, balance);
    }

}
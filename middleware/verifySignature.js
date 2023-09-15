const crypto = require('crypto');

// Assuming publicKey is the public key in PEM format
const publicKey = '-----BEGIN PUBLIC KEY-----\n' +
    'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA7Sv51YgaKxYYjaxMdkuo\n' +
    'qFNKBM6E8EzZxwQF4sjhkRvuHtmPsS5p+tHAwH4oZzdgFj3SIa16WASKOa+dXPae\n' +
    'MWiimJg8pe76ReYdFOmvVxx2zu3HaXHWKyEbT9oFjLFc2teLbb6IX0IwDM3WOYcT\n' +
    '2fGYdy+LB6xE+zngVFXdWRokGYl3zcv0i6svI9SAFFzzpSaITjnH8zkje2aVQ2XK\n' +
    'AxdwTg86i9CDRbrkrkvgZqqu6mmYsC5/DwpB7H1nWMKXKsBorZlp1tY4GNhsiN5A\n' +
    'Dp695cFYGrolkh4tbyLlBm7Vk9dGDN78OaGx2tmA9UySeqMZ9VmSIJK1qrLSmGUa\n' +
    'OQIDAQAB\n' +
    '-----END PUBLIC KEY-----\n';

const verifySignature = async (req, res, next) => {
    try {
        const signature = req.headers['signature'];
        const verifier = crypto.createVerify('SHA256withRSA');

        // Verify the signature using the public key
        const isVerified = verifier.verify(publicKey, signature, 'base64');
        if (isVerified) {
            console.log('Signature is valid');
            next()
        } else {
            console.log('Signature is not valid');
            res.status(400).send({ message: "Invalid signature" })
        }

    } catch (error) {
        console.log('Signature error', error);
        next(error)
    }
}

module.exports = verifySignature;
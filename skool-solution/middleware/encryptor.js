const SimpleEncryptor = require("simple-encryptor");
const encrytor = SimpleEncryptor(process.env.JWT_ENCRYPTION_KEY);

module.exports = encrypt = (obj) => {
  return encrytor.encrypt(obj);
}

module.exports = decrypt = (encrypted) => {
  return encyptor.decrypt(encrypted);
}
const os = require('os');

const networkInterfaces = os.networkInterfaces();
console.log(networkInterfaces["Wi-Fi"][1].address);
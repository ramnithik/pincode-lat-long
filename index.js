const pincodedata = require('./pincode');

let getlatlong =  (pincode) => {
    return pincodedata[pincode];
}

module.exports.getlatlong = getlatlong;
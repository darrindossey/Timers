// Search json string for key and return value
// Parameters:
//    o = json object to be searched
//    key = string key name to be found
//    cb = callback function to handle search
function findJsonKeyValue(o, key, cb) {
    try {
        if (typeof (o) == "object") {
            for (var keyname in o) {
                if (keyname == key) {
                    cb(o[keyname]);
                    return;
                }
                if (o[keyname] != null && typeof (o[keyname] == "object")) {
                    findJsonKeyValue(o[keyname], key, (value) => {
                        if (value) {
                            cb(value);
                            return;
                        }
                    });
                }
            }
            // Do Nothing
        }
        else {
            // Do Nothing
            cb(null);
        }
    }
    catch (error) {
        // On Error return null
        cb(null);
    }
}

module.exports = {
    findJsonKeyValue
};
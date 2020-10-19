// Search json string for key and return value
// Parameters:
//    o = json object to be searched
//    key = string key name to be found
//    cb = callback function to handle search
function findJsonKeyValue(o, key, cb) {
    try {
        if (typeof (o) == "object") {
            processObject(o, key, (value) => {
                cb(value);
            })
        }
        else {
            // Do Nothing
            cb(null);
        }
    }
    catch (error) {
        // On Error return null
        console.log(error);
        cb(null);
    }
}

function processObject(o, key, cb) {
    for (var keyname in o) {
        if (keyname == key) {
            cb(o[keyname]);
            return;
        }
        (typeof (o[keyname]) == "object") ?
            processObject(o[keyname], key, (value) => {
                if (value) {
                    cb(value);
                    return;
                }
            })
            : null
    }
}

module.exports = {
    findJsonKeyValue
};
// Search json string for key and return value
// Parameters:
//    o = json object to be searched
//    key = string key name to be found
//    cb = callback function to handle search
function findJsonKeyValue(o, key, cb) {
    try {
        for (var keyname in o) {
            let returnvalue =
                (keyname == key) ? o[keyname] :
                    (typeof (o[keyname]) == "object") ?
                        findJsonKeyValue(o[keyname], key, (value) => {
                            cb(value);
                            return;
                        }) : null;
            (returnvalue) ? cb(returnvalue) : null;
        };


        //if (keyname == key) {
        //    cb(o[keyname]);
        //    return;
        //}
        //if (typeof (o[keyname]) == "object") {
        //    findJsonKeyValue(o[keyname], key, (value) => {
        //        if (value) {
        //            cb(value);
        //            return;
        //        }
        //    });
        //}
        //}
        // Do Nothing
        //} else {
        // Do Nothing
        //    cb(null);
        //}
    }
    catch (error) {
        // On Error return null
        cb(null);
    }
}

module.exports = {
    findJsonKeyValue
};
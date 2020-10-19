
function getJsonKeyValue(o, key, cb) {
    try {
        for (var kn in o) {
            console.log(`for loop value ${kn}`);
            if (kn == key) {
                console.log(`found the key named ${key}`);
                cb(o[kn]);
                return;
            } else {
                if (typeof (o[kn]) == "object") {
                    getJsonKeyValue(o[kn], key, (value) => {
                        cb(value);
                    })
                }
            }
        }
    }
    catch (error) {
        // Do nothing
        console.log(error);
        return;
    }
}

module.exports = {
    getJsonKeyValue
}
//alert functions
class Util {
    static alertBox(context, title, msg, type, duration) {
        context.$notify({
            duration: duration,
            type: type,
            group: 'alert',
            title: title,
            text: msg
        });
    }

    //Check empty data
    //check for json null
    static checkJSONValuesNoFalse = function (data) {
        let filtered = [];
        if (typeof (data) === "object" && data !== null) {
            //if is empty return early
            if (Object.keys(data).length < 1) {
                return false;
            }
            //iterate
            for (let key in data) {
                if (data.hasOwnProperty(key) && ((!/^\s*$/.test(data[key])))) {
                    filtered.push(true);
                } else {
                    filtered.push(false);
                }
            }
        } else {
            return false;
        }
        //finalized
        return !filtered.includes(false);
    };
}

export default {Util};

'use strict'

const deepCopy = (obj) => {
    const newObj = {};
    for (let key in obj) {
        if (typeof obj[key] === "object") newObj[key] = deepCopy(obj[key]);
        else newObj[key] = obj[key];
    }
    
    return newObj;
}

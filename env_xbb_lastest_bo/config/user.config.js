const fs=require("fs");

const path = require("path");
let user_path = path.resolve(__dirname, `../run/`);


function getCode(type) {
    try {
        return fs.readFileSync(`${user_path}/${type}.js`) + "\r\n";

    } catch (e) {
        console.log(`${user_path}/${type}.js不存在`)
        return "";
    }
}


module.exports={
    getCode:getCode
}
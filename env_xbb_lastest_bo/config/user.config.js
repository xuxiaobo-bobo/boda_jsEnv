const fs=require("fs");

const path = require("path");
let user_path = path.resolve(__dirname, `../user/`);


function getCode(name, type) {
    try {
        return fs.readFileSync(`${user_path}/${name}/${type}.js`) + "\r\n";

    } catch (e) {
        console.log(`${user_path}/${name}/${type}.js不存在`)
        return "";
    }
}


module.exports={
    getCode:getCode
}
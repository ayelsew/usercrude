const fs = require("fs")

module.exports = {
    devServer:{
        https: true,
        public: "usercrude.web.app:8080",
        key: fs.readFileSync("./ssl/server.key"),
        cert: fs.readFileSync("./ssl/server.crt")
    }
}
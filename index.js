const http = require('http');
const types = {
    "html":"text/html",
    "txt":"text/plain",
    "text":"text/plain",
    "css":"text/css",
    "js":"text/javascript",
    "mjs":"text/javascript",
    "png":"image/png",
    "ico":"image/ico",
    "jpg":"image/jpg",
    "jpeg":"image/jpeg"
};

function serve(req,res) {
    var url = req.url.slice(1);
    try {
    console.log("1")
    res.setHeader("Content-type",types[url.split(".")[url.split(".").length-1]]);
    console.log("2")
    child_process.exec('curl https://hobbyrobot.com/' + url, (err, stdout) => {res.write(stdout);console.log(stdout)})
    } catch {
        res.setHeader("Content-type","text/html");
        res.write("Something went wrong!")
        console.log("err")
    }
    //res.write("Hello!");
    res.end();
}

const server = http.createServer(serve);
server.listen(2048);

const express = require('express')
const bodyParser = require('body-parser');
const SerialPort = require('serialport');
const cors = require('cors');

const expressPort = 8080;
// const comPort = "/dev/ttyACM0";
const comPort = "COM3";
const baudRate = 115200;

const serialPort = new SerialPort(comPort, {

    baudRate: baudRate 
});


const sendCode = (code) => {
    code = `${code}\n`
    console.log(`Writing this code to arduino: ${code}`);
    const success = serialPort.write(`${code}`);
    return success;
}

// Start server
const app = express();
app.use(cors());
app.options('*', cors());
app.use(bodyParser.urlencoded({ extended: false }));  
app.use(bodyParser.json());


app.post('/api/sinterkluis', function(req, res) {
    
        const code = req.body.code;

        if(code) {
            
            const success = sendCode(code);
            if(success) {
                res.status(200).send({"success":"Code doorgestuurd naar Arduino en (waarschijnlijk) ontvangen."});
            } else {
                res.status(500).send({"error":"Code doorgestuurd naar Arduino, maar niet ontvangen."});
            }
        } else {
            res.status(500).send({"error":"wrong input"});
        }
    });

const allowedExt = [
    '.js',
    '.ico',
    '.css',
    '.png',
    '.jpg',
    '.woff2',
    '.woff',
    '.ttf',
    '.svg',
    ];

app.get('*', (req, res) => { 
    if (allowedExt.filter(ext => req.url.indexOf(ext) > 0).length > 0) {
        res.status(200).sendFile(__dirname + '/public/' + req.url);
      } else {
        res.status(200).sendFile(__dirname + '/public/index.html');
    }

});

// app.get("/assets/:name", function(req, res) {
//     var options = {
//         root: __dirname + '/public/',
//         dotfiles: 'deny',
//         headers: {
//             'x-timestamp': Date.now(),
//             'x-sent': true
//         }
//       };

//     var fileName = req.params.name;
//     // var fileName = "index.html";
    
//     res.sendFile(fileName, options, function (err) {
//         if (err) {
            
//             console.error(err);
//         } else {
//             console.log('Sent:', fileName);
//         }
//     });
// });

app.listen(expressPort, () => console.log(`Sinterkluis listening on ${expressPort}`));
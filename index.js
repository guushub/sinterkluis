const express = require('express')
const bodyParser = require('body-parser');
const SerialPort = require('serialport');

const expressPort = 8080;
const comPort = "/dev/ttyACM0"
const baudRate = 115200;

const serialPort = new SerialPort(comPort, {
    baudRate: baudRate 
});


const sendCode = (code) => {
    serialPort.write(code);
}

// Start server
const app = express()
app.use(bodyParser.urlencoded({ extended: false }));  
app.use(bodyParser.json());
app.get('/', function(req, res) {
    
        const code = parseInt(req.query.code);

        if(code) {
            res.send("Code doorgestuurd naar Arduino.");
        } else {
            res.send("Kon request niet verwerken.")
        }
    });

app.listen(expressPort, () => console.log('Sinterkluis listening on ' + expressPort))
const express = require('express');
const http = require('http');
const fs = require('fs');
const path = require('path');


const app = express();
const server = http.createServer(app);

app.get('/download', (req, res) => {
//   const destination = './index.html'; 
  const destination = './easyconnect.exe'; 
  const filePath = path.resolve(__dirname, destination); 
    res.download(filePath,(err)=>{
        if(err){
        console.log(err)
      }
    }
    )
//   fs.access(filePath, fs.constants.R_OK, (err) => {
//     if (err) {
//       console.error(`Cannot access file: ${filePath}`);
//       res.status(404).send('File not found');
//     } else {
//       const fileName = path.basename(filePath);
//       res.setHeader('Content-Disposition', `attachment; filename=${encodeURIComponent(fileName)}`);
//       let stream = fs.createReadStream(filePath);
//       stream.on('error', (streamErr) => {
//         console.log(streamErr)
//         console.error(`Error reading file: ${filePath}`);
//         res.status(500).send('Server Error');
//       });
//       console.log(fileName)
//       stream.on('data', (chunk) => {
//         console.log(chunk)
//         if(!res.write(chunk)){ 
//           stream.pause(); 
//         } 
//       });

//       res.on("drain", function() { 
//         stream.resume(); 
//       });

//       stream.on('end', () => {
//         res.end();
//       });
      
//     }
//   });

});

server.listen(3000, () => {
  console.log('服务器已启动，监听端口 3000');
});
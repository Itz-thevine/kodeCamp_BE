const fs = require('fs');
const path = require('path');


 const createFrontendScaffold = () => {  
    const projectDir = 'frontend-scaffold'
    try {
         fs.mkdirSync(`${projectDir}`);
  
         fs.writeFileSync(`${projectDir}/index.html`, `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <link rel="stylesheet" href="./css/style.css">
                <title>Document</title>
            </head>
            <body>
                <h1>Welcome</h1>
                <script src="./js/script.js"></script>
            </body>
            </html>
        `,  { flag: 'a' });
  
    
         fs.mkdirSync(`${projectDir}/css`);
         fs.writeFileSync(`${projectDir}/css/styles.css`, `
            h1 {
                text-align: center;
            }
        `);
  
         fs.mkdirSync(`${projectDir}/js`);
         fs.writeFileSync(`${projectDir}/js/script.js`, 'alert("Welcome");');
  
         fs.mkdirSync(`${projectDir}/images`);
  
        console.log('Frontend scaffold created successfully!');
    } catch (error) {
      console.error(error);
    }
  }
  
  createFrontendScaffold();
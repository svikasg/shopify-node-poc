const fs = require('fs');

const base64ToPDF = (base64String, outputPath) => {
    const buffer = Buffer.from(base64String, 'base64');
    fs.writeFileSync(outputPath, buffer);
}

module.exports = {
    base64ToPDF
}
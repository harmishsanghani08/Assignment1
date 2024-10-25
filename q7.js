const fs = require('fs');

function unlinkAsync(filePath) {
    return new Promise((resolve, reject) => {
        fs.unlink(filePath, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
    });
}

async function deleteFile(filePath) {
    try {
        await unlinkAsync(filePath);
        console.log(`${filePath} was successfully deleted.`);
    } catch (error) {
        console.error(`Error deleting the file: ${error.message}`);
    }
}

deleteFile('example.txt');  
const fs = require('fs');
const { Transform } = require('stream');

function exportDataLarge(lines: string[],  type: 'csv' | 'json', filename = 'mockManga') {
    return new Promise((resolve, reject) => {
        const transform = new Transform({
            objectMode: true,
            transform(chunk: { [s: string]: unknown; } | ArrayLike<unknown>, encoding: any, callback: () => void) {
                this.push(`${Object.values(chunk).join(',')}\n`);
                callback();
            }
        });
        const writeStream = fs.createWriteStream(filename);
        writeStream.on('finish', resolve);
        writeStream.on('error', reject);
        lines.forEach((item: any) => transform.write(item));
        transform.end();
        transform.pipe(writeStream);
    });
}
async function exportData(lines: string[],  type: 'csv' | 'json', filename = 'mockManga') {
    
    try {
        await exportDataLarge(lines, type, filename);
        console.log('The CSV file was written successfully.');
    } catch (e) {
        console.error('An error occurred while writing the CSV file.', e);
    }
}
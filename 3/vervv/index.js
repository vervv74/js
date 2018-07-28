var pipeStream1 = function pipeStream(file1){
    var fs = require("fs");

// создать поток для чтения данных
    var readerStream = fs.createReadStream(file1);

// создать поток для записи данных
    var writerStream = fs.createWriteStream('input.txt');

// передача данных потока readerStream потоку writerStream
    readerStream.pipe(writerStream);
}
module.exports = pipeStream1;
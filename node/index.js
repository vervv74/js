// var math = require('./math');
var fs = require('fs');
var var1 = require('./var');
/*console.log(math.square(2)+' '+math.cube(2)+' '+math.squareSquare(2));    // вывод функций*/
//задание - записываем переменную из файла var.js в новый файл
/*fs.writeFile('var2.js', var1.text, (err) => {
    if(err) throw err;
    console.log('записали переменную в файл');
});*/
//записываем данные из файла var.js в новый файл var3.js
/*
fs.readFile('var.js', 'utf8', (err, data) => {
    if(err) throw err;
    fs.writeFile('var3.js', data, (err) => {
        if(err) throw err;
        console.log('записали данные из файла var.js в новый файл');
    });
});*/
//записываем данные в конец файла var.js
/*fs.appendFile('var.js', 'записываем этот текст в конец файла', (err) => {
    if(err) throw err;
    console.log('записали текст в конец файла');
});*/
//создаем файлы из массива в файле arr.js
/*var arr = require('./arr');
for (var i = 0; i < arr.arr1.length; i++){
    fs.writeFile(arr.arr1[i], arr.arr1[i], (err) => {
        if(err) throw err;
        console.log('создали файл ');
    })
}*/
//скопировали файл math в math1
/*fs.link('math.js', 'math1.js', (err) => {
    if (err) throw err;
    console.log('скопировали файл');
});*/
//переименуем math в math2
/*
fs.rename('math.js', 'math2.js', (err) => {
    if (err) throw err;
    console.log('Переименовали');
});*/
//проверить существование файла var.js и вывести его размер в мегабайтах
/*
fs.stat('var.js', (err, stats) => {
    if (err) throw err;
    console.log(stats.isFile());
    if (stats.isFile()) {
        console.log('файл существует, его размер '+stats.size/1000000+' МБ');
    }
});*/
// удалить файл
/*fs.unlink('var3.js', (err) => {
    if (err) throw err;
    console.log('удалили');
});*/
//cоздать папку
/*fs.mkdir('path', (err) => {
    if (err) throw err;
    console.log('создали папку');
});*/
//удалить папку
/*fs.rmdir('path', (err) => {
    if (err) throw err;
    console.log('удалили папку');
});*/
//cоздаем папку и перемещаем туда файлы
/*
fs.mkdir('path', (err) => {
    if (err) throw err;
    console.log('создали папку');
});
fs.rename('arr1.js', 'path/arr1.js', (err) => {
    if (err) throw err;
    console.log('Переместили файл');
});
fs.rename('arr2.js', 'path/arr2.js', (err) => {
    if (err) throw err;
    console.log('Переместили файл');
});
*/
//вывести список файлов
fs.readdir('path', (err, items) => {
    if (err) throw err;
    console.log(items);
    for (var i=0; i<items.length; i++) {
        console.log(items[i]);
    }
});





































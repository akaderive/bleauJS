/*jshint node:true*/
'use strict';

//Setting up SQLite DB
var fs = require('fs');
var file = __dirname + '/DB/' + 'DB_SQLite.db';
var exists = fs.existsSync(file);

if (!exists) {
    console.log('Creating DB file.');
    fs.openSync(file, 'w');
}

var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(file);

db.serialize(function() {
    if (!exists) {

        db.run('CREATE TABLE BOULDERS(  ID           INTEGER         PRIMARY KEY,' +
                                        'AREANAME     VARCHAR(100)    NOT NULL,' +
                                        'AREALINK     VARCHAR(30)     NOT NULL,' +
                                        'NAME         VARCHAR(255)    NOT NULL,' +
                                        'GRADE        VARCHAR(10)     NOT NULL,' +
                                        'LINK         VARCHAR(100)    NOT NULL,' +
                                        'CLIMBER      VARCHAR(255),' +
                                        'DESCRIPTION  TEXT,' +
                                        'DETAILTITLE  VARCHAR(100),' +
                                        'DETAIL       TEXT)');
    }
    //Uncomment to get full insertions
    /*var boulders = fs.readFileSync(__dirname + '/DB/' + 'boulders.json');
    var jsonBoulders = JSON.parse(boulders);
    console.log(jsonBoulders.length + " Boulders loaded from Json, preparing insert")

    jsonBoulders.forEach(function(boulder) {
        console.log('Inserting boulder, Name: '+ boulder['name'] + ' Grade: ' + boulder['grade'])
        db.run('INSERT INTO BOULDERS (              AREANAME,\
                                                    AREALINK,\
                                                    NAME,\
                                                    GRADE,\
                                                    LINK,\
                                                    CLIMBER,\
                                                    DESCRIPTION,\
                                                    DETAILTITLE,\
                                                    DETAIL\
                                                ) VALUES (?,?,?,?,?,?,?,?,?)',
                                                    boulder['areaName'],
                                                    boulder['areaLink'],
                                                    boulder['name'],
                                                    boulder['grade'],
                                                    boulder['link'],
                                                    boulder['climber'],
                                                    boulder['description'],
                                                    boulder['detailTitle'],
                                                    boulder['detail']
                                                );
        });

    db.run("SELECT COUNT(*) AS count FROM BOULDERS", function(err, row) {
        console.log("rows inserted: " + row.count);
    });*/
    db.close();
});
//End of DB stuff

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var favicon = require('serve-favicon');
var logger = require('morgan');
var port = process.env.PORT || 8001;
var four0four = require('./utils/404')();

var environment = process.env.NODE_ENV;

app.use(favicon(__dirname + '/favicon.ico'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(logger('dev'));

app.use('/api', require('./routes'));

console.log('About to crank up node');
console.log('PORT=' + port);
console.log('NODE_ENV=' + environment);

switch (environment){
    case 'build':
        console.log('** BUILD **');
        app.use(express.static('./build/'));
        // Any invalid calls for templateUrls are under app/* and should return 404
        app.use('/app/*', function(req, res, next) {
            four0four.send404(req, res);
        });
        // Any deep link calls should return index.html
        app.use('/*', express.static('./build/index.html'));
        break;
    default:
        console.log('** DEV **');
        app.use(express.static('./src/client/'));
        app.use(express.static('./'));
        app.use(express.static('./tmp'));
        // Any invalid calls for templateUrls are under app/* and should return 404
        app.use('/app/*', function(req, res, next) {
            four0four.send404(req, res);
        });
        // Any deep link calls should return index.html
        app.use('/*', express.static('./src/client/index.html'));
        break;
}

app.listen(port, function() {
    console.log('Express server listening on port ' + port);
    console.log('env = ' + app.get('env') +
        '\n__dirname = ' + __dirname  +
        '\nprocess.cwd = ' + process.cwd());
});

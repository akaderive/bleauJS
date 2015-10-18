var router = require('express').Router();
var four0four = require('./utils/404')();
var data = require('./data');

router.get('/people', getPeople);
router.get('/person/:id', getPerson);
router.get('/areas', getAreas);
router.get('/*', four0four.notFoundMiddleware);

module.exports = router;

//Setting up SQLite DB
var fs = require('fs');
var file = __dirname + '/DB/' + 'DB_SQLite.db';
var exists = fs.existsSync(file);

if (!exists) {
    console.log('Error connecting to DB file in routes');
}

var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(file);

//////////////Functions

function getPeople(req, res, next) {
    res.status(200).send(data.people);
}

function getPerson(req, res, next) {
    var id = +req.params.id;
    var person = data.people.filter(function(p) {
        return p.id === id;
    })[0];

    if (person) {
        res.status(200).send(person);
    } else {
        four0four.send404(req, res, 'person ' + id + ' not found');
    }
}

function getAreas(req, res, next) {
    db.all('    SELECT      B.areaname' +
                ',           B.areaLink' +
                ',           COUNT(B.ID) as count' +
                'FROM        BOULDERS B' +
                'WHERE       B.grade NOT LIKE "%1%"' +
                'AND         B.grade NOT LIKE "%2%"' +
                'AND         B.grade NOT LIKE "%3%"' +
                'AND         B.grade NOT LIKE "%4%"' +
                'AND         B.grade NOT LIKE "%5%"' +
                'GROUP BY    B.areaname' +
                ',           B.areaLink'
                , function(err, rows) {
                    var cpt = rows.length;
                    var areas = rows;
                    areas.forEach(function(area) {
                        /*db.all('select count(*) from boulders', function(err, rows){
                                                                                        areas.boulders = ["YOYO"];
                                                                }
                        );*/
                        db.all('    SELECT      B.name' +
                        ',           B.grade' +
                        ',           B.climber' +
                        ',           IFNULL(B.description, "") AS DESCRIPTION' +
                        ',           B.detailTitle' +
                        ',           B.detail' +
                        'FROM        BOULDERS B' +
                        'WHERE       B.grade NOT LIKE "%1%"' +
                        'AND         B.grade NOT LIKE "%2%"' +
                        'AND         B.grade NOT LIKE "%3%"' +
                        'AND         B.grade NOT LIKE "%4%"' +
                        'AND         B.grade NOT LIKE "%5%"' +
                        'AND         B.name NOT LIKE "-"' +
                        'AND         B.areaname = ?' +
                        ',           area.AREANAME'
                        ,   function(err, rows) {
                                area.boulders = rows;
                                finished();
                            }
                        );

                        function finished() {
                            cpt = cpt - 1;
                            if (cpt === 0) {
                                res.status(200).send(areas);
                            }
                        }
                    });
                }
    );
}

/*function onAreasReceived(err, rows){
    rows.forEach(function(area) {
        db.all('    SELECT      B.name\
                    ,           B.grade\
                    ,           B.climber\
                    ,           IFNULL(B.description, "") AS DESCRIPTION\
                    ,           B.detailTitle\
                    ,           B.detail\
                    FROM        BOULDERS B\
                    WHERE       B.areaname = ?'
                    ,           area.areaname
                    ,   function(err, rows) {
                            area.boulders = rows;
                        }
        );
    });
    res.status(200).send(rows);
}*/

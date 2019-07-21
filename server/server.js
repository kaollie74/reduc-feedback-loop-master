const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const pool = require('../server/modules/pool')

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
app.post('/feedback', (req, res) => {
    console.log('Im IN /feedback', req.body);
    const infoToAdd = [req.body.feeling, req.body.understanding, req.body.support, req.body.comments]
    const sqlText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments" )
                  VALUES ($1, $2, $3, $4);`;

    pool.query(sqlText, infoToAdd).then((result) => {
        res.send(201);
    }).catch((error) => {
        console.log('Error with posting to DB', error)
        res.sendStatus(500);
    });
})

/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
    console.log('Listening on port: ', PORT);
});
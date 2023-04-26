const { query } = require("../db/index")

const logger = async (req, res, next) => {
    const time = new Date().toLocaleString();
    const { url, method } = req;
    console.log(("url:" + url, "method:" + method));

const values = {
    date_time: time,
    url: url,
    method: method,
};

try {
    const queryRes = await query(`INSERT INTO logs SET ?;`, [values]);
    if (queryRes) {
        console.log("Affected Rows:", queryRes.affectedRows);
    }
    next();
} catch (err) {
    console.error(err);
    res.end(err);
}

}; 

module.exports = {
    logger,
};
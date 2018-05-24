// err-handler.js

module.exports = (resp, err) => {
    resp.json({
        success: false,
        message: err.message
    });
    console.log(err);
}
module.exports = function(req, res) {
    let users = require("../../users/GET.json");
    let user = users.find(user => user.id === req.param.user_id);

    response.json({
        id: user.id,
        name: user.name
    })
}
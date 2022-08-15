module.exports = function(request, response) {
    let users = require("../../users/GET.json");
    let user = users.find((user) => {
        return user.id == request.params.user_id;
    });
    response.json({
        id: user.id,
        name: user.name,
    });
};

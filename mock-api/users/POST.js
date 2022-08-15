module.exports = (request, response) => {
    return response.status(201).send({
        id: request.body.id,
        name: request.body.name,
        birthday: request.body.birthday,
    });
};

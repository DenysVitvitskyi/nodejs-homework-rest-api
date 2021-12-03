const getAll = require("./getAll");
const getById = require("./getById");
const add = require("./add");
const updateById = require("./updateById");
const removeById = require("./removeById");
const updateContacts = require("./updateContacts");
const filePath = require("./filePath");

module.exports = {
    getAll,
    getById,
    add,
    updateById,
    removeById,
    updateContacts,
    filePath
}
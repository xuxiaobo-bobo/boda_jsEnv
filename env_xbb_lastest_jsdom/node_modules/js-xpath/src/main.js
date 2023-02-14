var parser = require('./parser.js').parser,
    makeXPathModels = require('./models.js').makeXPathModels;

parser.makeXPathModels = makeXPathModels;

parser.setXPathModels = function(models) {
    parser.yy.xpathmodels = models;
};

parser.setXPathModels(makeXPathModels());

module.exports = parser;

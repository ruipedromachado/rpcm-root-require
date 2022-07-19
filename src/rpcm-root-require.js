var p = require('app-root-path').path;
var RootRequire = (moduleRelativePath) => require(p + '/' + moduleRelativePath); 
RootRequire.rootPath = p;
module.exports = RootRequire;
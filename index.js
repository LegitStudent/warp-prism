#!/usr/bin/env node
var path = require('path')
var fs = require('fs')
var _ = require('underscore')
module.exports = (function (){
  var Parser = require('./cli/parser')
  var Writer = require("./writer")
  
  var parser = new Parser()
  parser.parse()
  parser.validate()
  
  var name = parser.parseResults._args[0] || 'default'
  var p = parser.parseResults._args[1] || 'psionic-matrix'

  var options = {}

  _.extend(options,parser.parseResults)

  var dirpath = path.join(process.cwd(),p)
  if (!fs.existsSync(dirpath)){
    fs.mkdirSync(dirpath);
  }

  var writer = new Writer(name,dirpath,options)//args are (name,path)
  writer.writeModule().writeModuleSpec()

  function WarpPrism(){

  }
  return WarpPrism
})()

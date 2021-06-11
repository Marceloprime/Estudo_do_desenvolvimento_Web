const Pessoa = require('./pessoa') ///sistema de modulos do node
//import Pessoa from "./pessoa";
import './modulos/moduloA'
import './assets'

const atendente = new Pessoa
console.log(atendente.cumprimentar())

/**
    Javascript possui três sistemas de modulos:
    CommonJS vs AMD vs ES2015

    CommonJS is a project with the goal to establish conventions on the 
    module ecosystem for JavaScript outside of the web browser.
        The primary reason for its creation was a major lack of commonly 
    accepted forms of JavaScript module units which could be reusable in 
    environments different from that provided by conventional web browsers 
    running JavaScript scripts (e.g. web servers or native desktop applications).
    CommonJS can be recognized by the use of the require() function and module.exports,
    while ES modules use import and export statements 
    for similar (though not identical) functionality.

    The Asynchronous Module Definition (AMD) API specifies a mechanism for defining 
    modules such that the module and its dependencies can be asynchronously loaded. 
    This is particularly well suited for the browser environment where synchronous loading 
    of modules incurs performance, usability, debugging, and cross-domain access problems.


 */
'use strict'

// a=2; ошибка

const notExtansableObj={};

Object.preventExtensions(notExtansableObj);
notExtansableObj.someProp='value';

// в строгом режиме ошибка

'user strict'

var Helper = function () {
  function getType(o) {
    var _t;
    return ((_t = typeof (o)) == "object" ? o == null && "null" || Object.prototype.toString.call(o).slice(8, -1) : _t).toLowerCase();
  }
  let deepCopy = function(source, destination) {
    if (!source || !destination)
      return;

    for (var p in source) {
      if (getType(source[p]) == "array" || getType(source[p]) == "object") {
        destination[p] = getType(source[p]) == "array" ? [] : {};
        arguments.callee(destination[p], source[p]); //递归调用在这里
      }
      else {
        destination[p] = source[p];
      }
    }
  }
  let deepClone = function (obj) {
    if (obj === null) return null
    if (typeof obj !== 'object') return obj;
    if (obj.constructor === Date) return new Date(obj);
    if (obj.constructor === RegExp) return new RegExp(obj);
    var newObj = new obj.constructor();  //保持继承链
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {   //不遍历其原型链上的属性
        var val = obj[key];
        newObj[key] = typeof val === 'object' ? arguments.callee(val) : val; // 使用arguments.callee解除与函数名的耦合
      }
    }
    return newObj;
  };
  let isNullOrEmptyObject = function(obj) {
    for (var key in obj) {
      return false;
    }
    return true;
  }

  return {
    deepCopy: deepCopy,
    deepClone: deepClone,
    isNullOrEmptyObject: isNullOrEmptyObject,
  }
}();
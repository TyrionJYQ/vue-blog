export const getType = (param, type) => Object.prototype.toString.call(param).slice(8, -1).toLowerCase() === (type && type.toLowerCase())

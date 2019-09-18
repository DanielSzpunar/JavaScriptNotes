//Computed Property Names:
function objectifyOld (key,value) {
  let obj = {}
  obj[key] = value;
  return obj;
}
function objectifyNew(key,value) {
  return {[key]: value}
}
objectifyNew('name1', 'daniel');
console.log(name1);

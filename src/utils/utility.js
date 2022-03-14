const filterObj = (obj, f) => {
  return Object.fromEntries(Object.entries(obj).filter(([k]) => f(k)));
};
const pick = (obj, keys = []) => filterObj(obj, (k) => keys.includes(k));
const omit = (obj, keys = []) => filterObj(obj, (k) => !keys.includes(k));

module.exports = { pick, omit };

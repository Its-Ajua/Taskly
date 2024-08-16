const cache = require('./cache');

const getFromCache = async (key) => {
  const value = await cache.get(key);
  if (value) return JSON.parse(value);
  return null;
};

const setInCache = async (key, value) => {
  await cache.set(key, JSON.stringify(value));
};

module.exports = { getFromCache, setInCache };
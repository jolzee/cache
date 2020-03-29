import RedisCache from "./redisCache";
import InMemoryCache from "./inMemoryCache";

class Cache {
  constructor(config) {
    this.defaultTimeToLiveMin = config.defaultTimeToLiveMin;
    if ("redisUrl" in config) {
      this.store = new RedisCache(
        null,
        null,
        null,
        config.defaultTimeToLiveMin,
        config.redisUrl
      );
    } else if ("redisHost" in config) {
      this.store = new RedisCache(
        config.redisHost,
        config.redisPort,
        config.redisPassword,
        config.defaultTimeToLiveMin
      );
    } else {
      this.store = new InMemoryCache(config.defaultTimeToLiveMin);
    }
  }

  set(key, value, timeToLive = this.defaultTimeToLiveMin) {
    return this.store.set(key, value, timeToLive);
  }

  get(key) {
    return new Promise((resolve, reject) => {
      this.store
        .get(key)
        .then(value => {
          resolve(value);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  del(key) {
    this.store.del(key);
  }
}

export default Cache;

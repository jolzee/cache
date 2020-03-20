import Redis from "ioredis";

class RedisCache {
  constructor(host, port, password, defaultTimeToLiveMin = 20) {
    this.defaultTimeToLiveMin = defaultTimeToLiveMin; //  * 1000 * 60
    this.redis = new Redis({
      port: parseInt(process.env.REDIS_PORT), // Redis port
      host: process.env.REDIS_HOST, // Redis host
      family: 4, // 4 (IPv4) or 6 (IPv6)
      password: process.env.REDIS_PASSWORD
    });
  }

  set(key, value, timeToLive = this.defaultTimeToLiveMin) {
    this.redis.set(key, value, "EX", timeToLive * 60);
  }

  get(key) {
    return new Promise((resolve, reject) => {
      this.redis
        .get(key)
        .then(val => {
          resolve(val);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  del(key) {
    this.redis.del(key).then(() => {
      return;
    });
  }
}

export default RedisCache;

class InMemoryCache {
  constructor(defaultTimeToLiveMin = 20) {
    this.$data = {};
    this.defaultTimeToLiveMin = defaultTimeToLiveMin;
  }

  set(key, value, timeToLive = this.defaultTimeToLiveMin) {
    if (this.$data[key]) {
      clearTimeout(this.$data[key].timer);
    }
    this.$data[key] = {
      timer: setTimeout(() => delete this.$data[key], timeToLive * 1000 * 60),
      value
    };
  }

  get(key) {
    return new Promise(resolve => {
      const cachedData = this.$data[key];
      if (cachedData) {
        resolve(cachedData.value);
      }
      resolve(null);
    });
  }

  del(key) {
    delete this.$data[key];
  }
}

export default InMemoryCache;

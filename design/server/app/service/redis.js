const Service = require('egg').Service

class RedisService extends Service {
    // 设置数据
    async set(key, value, seconds) {
        let { redis } = this.app
        value = JSON.stringify(value)
        if(!seconds) {
            await redis.set(key, value)
        } else {
            // 有效时间
            await redis.set(key, value, 'EX', seconds)
        }
    }
    // 读取数据
    async get(key) {
        let { redis } = this.app
        let data = await redis.get(key)
        if(!data) return
        data = JSON.parse(data)
        return data
    }
    // 清空redis
    async flushAll() {
        let { redis } = this.app
        redis.flushall();
    return;
    }
}
module.exports = RedisService;
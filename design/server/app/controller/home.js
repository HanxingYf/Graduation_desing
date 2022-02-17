'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
  async demo() {
    const { ctx } = this
    await this.service.redis.set('username', '123')
    ctx.body={
      status: 200,
      data: '11'
    }
  }
  async login() {
    const { ctx } = this;
    const { name , password } = ctx.request.body
    const res = await this.service.redis.get(name)
    console.log(res, '----<')
    if (res) {
      if(res === password) {
        ctx.body={
          status: 200,
          data: 'success'
        }
      } else {
        ctx.body={
          status: 0,
          data: '密码错误'
        }
      }
      
    } else {
      ctx.body={
        status: 1,
        data: '用户名不存在'
      }
    }
  }
}

module.exports = HomeController;

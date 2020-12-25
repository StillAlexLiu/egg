import { Controller } from 'egg';

export default class HomeController extends Controller {
  async updateUser(username: string) {
    // ...
    console.log(username);
  }

  public async index() {
    const { ctx } = this;
    ctx.body = await ctx.service.test.sayHi('egg');
  }
}

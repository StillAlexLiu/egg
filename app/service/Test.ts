import { Service } from 'egg';

/**
 * Test Service
 */
export default class Test extends Service {
  /**
   * sayHi to you
   * @param name - your name
   */
  public async sayHi(name: string) {
    const { User } = this.app.model;
    await User.create({ name });
    const user = await User.findAll({});
    console.log(user);
    return { user };
  }
}

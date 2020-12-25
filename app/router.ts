import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;
  app.beforeStart(async () => {
    await app.model.sync({ alter: true, force: false });
  });
  router.get('/', controller.home.index);
  /**
   * 用户管理
   */
  router.get('/user', controller.user.index);
};

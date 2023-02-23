const cron = require("cron");

new cron.CronJob("*/10 * * * * *", () => {
  console.log("任务执行一次", new Date());
}).start();

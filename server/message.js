const MQ = require("./db/mq");
const Cron = require("cron");

const MessageName = "ac_use";
const ActiveName = "ac_active";

//监听消息
MQ.onMessage(MessageName, function (data) {
  console.log("收到消息更新:" + data);
});

//发送消息
module.exports = async function PushMQMessage(message) {
  if (!message) return;
  MQ.publish(MessageName, message);
};

//保持活跃
MQ.onMessage(ActiveName, function (data) {
  console.log("收到消息更新:" + data);
});
new Cron.CronJob("0 0 1 * * *", function () {
  MQ.publish(ActiveName, "测试消息" + Date.now());
}).start();

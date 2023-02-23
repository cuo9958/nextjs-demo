import { MongoClient, Db, MongoClientOptions } from "mongodb";

const cfg = {
  url: "mongodb://root:mongodb.rds.aliyuncs.com:3717",
  name: "admin",
};

let dbMg: Db | null = null;

async function connect() {
  let options: MongoClientOptions = {};
  const client = await MongoClient.connect(cfg.url, options);
  console.log("MongoDB连接成功", cfg.url);
  dbMg = client.db(cfg.name);
  return dbMg;
}

// connect();

const mongodbInstance = async function () {
  if (dbMg) return dbMg;
  return connect();
};

export default mongodbInstance;

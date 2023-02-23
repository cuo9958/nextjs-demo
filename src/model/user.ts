import { Collection, Document } from "mongodb";
import mongodb from "../db/mongodb";

const DBName = "d_user";
let DBcollection: Collection | null = null;

async function init() {
  if (DBcollection) return DBcollection;
  const DB = await mongodb();
  if (!DB) throw new Error("数据库未连接");
  const model = DB.collection(DBName);
  DBcollection = model;
  return model;
}

const subjectModel = {
  async insert(data: iDocument) {
    const db = await init();
    return db.insertOne(data);
  },
  async findOne(data: any) {
    const db = await init();
    const res = await db.findOne<IUser>(data, {});
    return res;
  },
  async getCount(query: Document) {
    const db = await init();
    return db.countDocuments(query);
  },
  async getList(query: iDocument, pageindex = 1, pageSize = 20) {
    const db = await init();
    if (pageSize > 100) pageSize = 100;
    return db
      .find(query)
      .sort({ updated: -1 })
      .skip(pageSize * (pageindex - 1))
      .limit(pageSize)
      .project({
        _id: 1,
        state: 1,
        title: 1,
      })
      .toArray();
  },
  async update(data: Document, query: iDocument) {
    const db = await init();
    return db.updateOne(query, {
      $set: data,
    });
  },
  async updateByID(data: any, id: any) {
    const db = await init();
    return db.updateOne(
      { _id: id },
      {
        $set: data,
      }
    );
  },
};

export default subjectModel;
interface BlockType {
  isLock?: boolean;
  [key: string]: any;
}
interface IPageData {
  blocks: BlockType[];
  lid: string;
  page: any;
}
interface iDocument {
  title: string;
  data: IPageData;
  state: number;
  created: number;
  create_name: string;
  updated: number;
  update_name: string;
  platform: string;
  lid: string;
}
interface IUser extends iDocument {
  _id: string;
}

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const data = { header: req.headers, url: req.url, text: "返回内容" };
  res.status(200).json(data);
}

import { NextApiRequest, NextApiResponse } from "next";
import { db } from "~/server/db";

export default async function getSlug(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const slug = req.query.slug;

  const link = await db.link.findUnique({ where: { slug: slug as string } });
  if (link == null) {
    console.log("nonono");
    res.status(404).send({ message: "not found" });
  }
  res.send(link);
}

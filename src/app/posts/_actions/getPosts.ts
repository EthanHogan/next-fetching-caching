"use server";

import { db } from "~/server/db";

export default async function getPosts() {
  const posts = await db.query.posts.findMany({
    orderBy: (model, { asc }) => asc(model.sequence),
    limit: 15,
  });

  return posts;
}

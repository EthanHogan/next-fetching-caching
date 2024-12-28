"use server";

import { inArray, sql, SQL } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import getPosts from "~/app/posts/_actions/getPosts";
import { db } from "~/server/db";
import { Post, posts } from "~/server/db/schema";

function revalidatePaths() {
  revalidatePath("/rendering/isr/on-demand");
}

export default async function cyclePostsOrder() {
  // get all the posts
  const orderedPosts = await getPosts();

  if (orderedPosts.length === 0) {
    revalidatePaths();
    return;
  }

  // "cycle" the posts order
  // Example: posts are in order of 1,2,3
  // After cycling, the order should be 3,1,2
  // After cycling again, the order should be 2,3,1
  // And so on...
  const lastPost = orderedPosts.pop() as Post;
  orderedPosts.unshift(lastPost);

  // update the posts order in the database
  const sqlChunks: SQL[] = [];
  const ids: number[] = [];
  sqlChunks.push(sql`(case`);
  for (let i = 0; i < orderedPosts.length; i++) {
    const input = orderedPosts[i] as Post;
    sqlChunks.push(sql`when ${posts.id} = ${input.id} then ${i}`);
    ids.push(input.id);
  }

  sqlChunks.push(sql`end)::integer`);
  const finalSql: SQL = sql.join(sqlChunks, sql.raw(" "));
  await db
    .update(posts)
    .set({ sequence: finalSql })
    .where(inArray(posts.id, ids));

  revalidatePaths();
}

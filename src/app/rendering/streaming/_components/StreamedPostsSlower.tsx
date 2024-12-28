import StreamedPosts from "./StreamedPosts";

export default async function StreamedPostsSlower() {
  // artificial delay of 5 seconds
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return <StreamedPosts />;
}

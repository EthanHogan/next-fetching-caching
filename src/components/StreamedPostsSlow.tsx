import StreamedPosts from "./StreamedPosts";

export default async function StreamedPostsSlow() {
  // artificial delay of 3 seconds
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return <StreamedPosts />;
}

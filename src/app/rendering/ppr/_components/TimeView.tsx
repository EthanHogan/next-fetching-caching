import { unstable_cache } from "next/cache";

const getRenderTime = unstable_cache(async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  console.log("rendering getRenderTime");

  return new Date().toLocaleString();
});

export default async function TimeView() {
  const renderedTime = await getRenderTime();

  console.log("TimeView rendered at", renderedTime);

  return <span className="font-bold">{renderedTime}</span>;
}

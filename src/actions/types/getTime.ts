"use server";

export default async function getTime() {
  const time = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(new Date().toLocaleString());
    }, 0);
  });
  return time as string;
}

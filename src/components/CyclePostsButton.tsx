"use client";

import cyclePostsOrder from "~/app/pattern3/_actions/cyclePostOrder";
import { Button } from "./ui/button";

export default function CyclePostsButton() {
  return <Button onClick={() => cyclePostsOrder()}>Cycle Posts</Button>;
}

"use client";

import cyclePostsOrder from "~/actions/types/cyclePostOrder";
import { Button } from "./ui/button";

export default function CyclePostsButton() {
  return <Button onClick={() => cyclePostsOrder()}>Cycle Posts</Button>;
}

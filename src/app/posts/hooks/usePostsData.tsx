"use client";

import { useMutation, useQuery } from "@tanstack/react-query";
import getPosts from "../_actions/getPosts";
import { NewPost } from "~/server/db/schema";

export default function usePostsData() {
  const { data, refetch, isRefetching } = useQuery({
    queryKey: ["posts"],
    queryFn: () => getPosts(),
  });

  return {
    data,
    refetch,
    isRefetching,
  };
}

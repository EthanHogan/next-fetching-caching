"use client";

import { useQuery } from "@tanstack/react-query";
import getPosts from "../_actions/getPosts";

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

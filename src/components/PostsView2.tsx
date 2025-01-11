import { type Post } from "~/server/db/schema";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

export default function PostsView2({
  posts,
  description,
}: {
  posts: Post[];
  description: string;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <div className="flex items-center justify-between">
            <div>Posts</div>
          </div>
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="list-inside list-disc pl-5">
          {posts.map((post) => (
            <li key={post.id}>{post.content}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

import Link from "next/link";

import { globSync } from "glob";
import path from "path";

const CWD = process.cwd();
const POSTS_DIR = path.join(CWD, "src/app/posts/(posts)");
const POST_NAME = "page.mdx";
const POST_PATH = path.join("**", POST_NAME);
const POST_URL_PREFIX = "/posts/";

const getAllPosts = async () => {
  return Promise.all(
    globSync(POST_PATH, { cwd: POSTS_DIR }).map(async (postPath) => {
      const fullPath = path.join(POSTS_DIR, postPath);

      // 相対パスでimportする必要がある。
      // また、この関数をappディレクトリの外に定義するとimportできないため注意。
      const postModule = await import(
        "./" + path.relative("src/app/posts", fullPath)
      );

      const href = path.dirname(postPath);
      return {
        href: `${POST_URL_PREFIX}${href}`,
        postedOn: path.dirname(href),
        metadata: postModule.meta,
      };
    })
  );
};

export default async function PostsPage() {
  const posts = await getAllPosts();

  return (
    <div>
      <h2>Posts</h2>
      {posts.map((post) => {
        return (
          <div key={post.href}>
            <h4>{post.postedOn}</h4>
            <Link href={post.href} className="text-sky-200">
              <div>{post.metadata.title}</div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

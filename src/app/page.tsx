import Link from "next/link";

export default function TopPage() {
  return (
    <div>
      TOPページです。今後何かが増えていくかもしれません。
      <h2>Contents</h2>
      <ul>
        <li>
          <Link href="/posts">Posts</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </div>
  );
}

import Link from "next/link";

export default function AboutPage() {
  return (
    <div>
      <h2>About</h2>
      <p>個人で好きなように遊ぶ場所です。</p>
      <p>Next.jsを使用していて、ソースコードは以下で公開しています。</p>
      <Link href="https://github.com/MasaoBlue/tech-life-blog" target="_blank">
        https://github.com/MasaoBlue/tech-life-blog
      </Link>
    </div>
  );
}

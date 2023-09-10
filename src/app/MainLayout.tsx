import { APP_TITLE } from "@/constants";
import Link from "next/link";

type Props = {
  children: React.ReactNode;
};

export default function MainLayout(props: Props) {
  return (
    <div className="prose prose-invert prose-sm text-zinc-300 px-4 sm:px-6 md:px-8 mx-auto mt-12 mb-6">
      <Link href="/" className="no-underline">
        <h1 className="py-1 mx-auto mt-12 text-4xl sm:text-5xl md:text-6xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-slate-400">
          {APP_TITLE}
        </h1>
      </Link>
      <main>
        <article>{props.children}</article>
      </main>
      <footer className="w-full max-w-none dark:prose-invert text-center border-t border-zinc-800 py-12 mt-16">
        Managed by{" "}
        <a href="https://twitter.com/tmaseaobclueh">@tmaseaobclueh</a>
      </footer>
    </div>
  );
}

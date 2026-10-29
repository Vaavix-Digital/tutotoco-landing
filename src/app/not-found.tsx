import Link from "next/link";
import Icon from "@/components/ui/Icon";
import Mascot from "@/components/ui/Mascot";

export default function NotFound() {
  return (
    <section className="wrap sec flex flex-col items-center text-center">
      <Mascot size={140} className="wobble" />
      <h1 className="disp h2 mt-6">This page took a day off.</h1>
      <p className="muted mt-3 text-lg">Let’s get you back to learning.</p>
      <Link href="/" className="btn btn-violet mt-6">Back to home</Link>
      <form action="/help" className="relative mt-8 w-full max-w-md">
        <Icon name="search" className="absolute left-4 top-3.5" />
        <input
          name="q"
          aria-label="Search help"
          placeholder="Search the help centre"
          className="h-12 w-full rounded-2xl border-2 border-[#DDD6FB] bg-white pl-12 pr-4 font-bold"
        />
      </form>
    </section>
  );
}

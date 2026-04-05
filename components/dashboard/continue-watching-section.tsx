import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const continueWatchingMock = [
  { id: 1, title: "Dark", poster: "/images/posters/dark.jpg" },
  { id: 2, title: "Breaking Bad", poster: "/images/posters/breaking-bad.webp" },
  { id: 3, title: "Stranger Things", poster: "/images/posters/stranger-things.jpg" },
  { id: 4, title: "Lost", poster: "/images/posters/lost.webp" },
  { id: 5, title: "The Mentalist", poster: "/images/posters/the-mentalist.webp" },
  { id: 6, title: "Game of Thrones", poster: "/images/posters/got.jpg" },
  { id: 7, title: "Dexter", poster: "/images/posters/dexter.webp" },
  { id: 8, title: "Fringe", poster: "/images/posters/fringe.jpg" },
  { id: 9, title: "Sherlock", poster: "/images/posters/sherlock.jpg" },
  { id: 10, title: "The X-Files", poster: "/images/posters/xfiles.webp" },
];

export function ContinueWatchingSection() {
  return (
    <section className="mt-6">
      <Link
        href="/shows"
        className="mb-3 flex items-center justify-between"
      >
        <h2 className="text-lg font-semibold tracking-[-0.02em] text-white">
          Continua
        </h2>

        <ChevronRight
          className="h-5 w-5 text-white/55"
          strokeWidth={2.2}
        />
      </Link>

      <div className="-mr-4 overflow-x-auto pb-1 pr-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex gap-0.5">
          {continueWatchingMock.map((show) => (
            <Link
              key={show.id}
              href="/shows"
              className="group relative block shrink-0"
              aria-label={show.title}
            >
              <div className="relative aspect-2/3 w-[30.5vw] min-w-28 max-w-31 overflow-hidden rounded-2xl border border-white/8 bg-white/5">
                <Image
                  src={show.poster}
                  alt={show.title}
                  fill
                  sizes="(max-width: 767px) 31vw, 124px"
                  className="object-cover transition duration-300 group-hover:scale-[1.02]"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

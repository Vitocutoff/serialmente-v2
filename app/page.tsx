"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

const easeOutExpo = [0.16, 1, 0.3, 1] as const;

export default function HomePage() {
  return (
    <main
      className="relative
                 min-h-dvh
                 w-full
                 overflow-hidden
                 bg-[#05070f]"
    >
      <div
        className="fixed
                   inset-0
                   md:hidden"
      >
        <Image
          src="/bgApp.png"
          alt="Background SerialMente mobile"
          fill
          priority
          sizes="(max-width: 767px) 100vw, 0px"
          className="object-cover"
        />
      </div>
      <div
        className="fixed
                   inset-0
                   hidden
                   md:block
                   bg-cover
                   bg-top
                   bg-no-repeat"
        style={{
          backgroundImage: "url('/bgAppDesktop.png')",
        }}
      />
      <div
        className="fixed
                   inset-0
                   bg-linear-to-b
                   from-black/25
                   via-black/45
                   to-black/80
                   md:from-black/18
                   md:via-black/28
                   md:to-black/68"
      />
      <div
        className="fixed
                   inset-0
                   bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.22)_0%,rgba(139,92,246,0.08)_22%,transparent_48%)]
                   md:bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.14)_0%,rgba(139,92,246,0.06)_18%,transparent_38%)]"
      />
      <div
        className="fixed
                   inset-0
                   bg-[radial-gradient(circle_at_center,transparent_35%,rgba(0,0,0,0.22)_70%,rgba(0,0,0,0.52)_100%)]
                   md:bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.16)_68%,rgba(0,0,0,0.52)_100%)]"
      />

      {/* MOBILE */}
      <div
        className="relative
                   z-10
                   flex
                   min-h-dvh
                   flex-col
                   md:hidden"
      >
        <div
          className="flex-1"
        />
        <div
          className="px-4
                     pb-6
                     text-center"
        >
          <motion.section
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.05,
              ease: easeOutExpo,
              delay: 0.2,
            }}
            className="flex
                       flex-col
                       items-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 12, scale: 0.975 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 1.1,
                ease: easeOutExpo,
                delay: 0.28,
              }}
              className="relative
                         mb-6
                         flex
                         h-28
                         w-28
                         items-center
                         justify-center"
            >
              <div
                className="absolute
                           h-24
                           w-24
                           rounded-full
                           bg-brand/30 blur-2xl"
              />
              <div
                className="relative
                           h-28
                           w-28"
              >
                <Image
                  src="/logo.png"
                  alt="Logo SerialMente"
                  fill
                  priority
                  sizes="112px"
                  className="object-contain
                             drop-shadow-[0_8px_30px_rgba(0,0,0,0.45)]"
                />
              </div>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.95,
                ease: easeOutExpo,
                delay: 0.4,
              }}
              className="font-brand
                         text-4xl
                         text-white
                         drop-shadow-[0_4px_18px_rgba(0,0,0,0.35)]"
            >
              SerialMente
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.95,
                ease: easeOutExpo,
                delay: 0.52,
              }}
              className="mt-4
                         max-w-xs
                         text-sm
                         leading-6
                         text-foreground-muted"
            >
              Tieni traccia delle tue serie preferite, scopri il tempo che dedichi
              alla visione e non farti più sfuggire nessun episodio!
            </motion.p>
          </motion.section>
          <motion.section
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.95,
              ease: easeOutExpo,
              delay: 0.66,
            }}
            className="mt-10
                       flex
                       w-full
                       flex-col
                       gap-3"
          >
            <Link
              href="/sign-in"
              className="flex
                         h-12
                         items-center
                         justify-center
                         rounded-2xl
                         bg-linear-to-r
                         from-violet-500
                         to-fuchsia-500
                         text-sm
                         font-semibold
                         text-white
                         shadow-[0_10px_30px_rgba(139,92,246,0.35)]
                         transition
                         active:scale-[0.97]"
            >
              Accedi
            </Link>
            <Link
              href="/sign-up"
              className="flex
                         h-12
                         items-center
                         justify-center
                         rounded-2xl
                         border
                         border-white/10
                         bg-white/10
                         text-sm
                         font-semibold
                         text-white
                         backdrop-blur-xl
                         transition
                         active:scale-[0.97]"
            >
              Registrati
            </Link>
          </motion.section>
        </div>
      </div>

      {/* DESKTOP */}
      <div
        className="relative
                   z-10
                   hidden
                   min-h-dvh
                   md:flex
                   md:flex-col
                   md:items-center
                   md:justify-center
                   md:px-8
                   md:pb-8 md:pt-6"
      >
        <motion.section
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.1,
            ease: easeOutExpo,
            delay: 0.2,
          }}
          className="flex
                     flex-col
                     items-center
                     text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.975 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 1.15,
              ease: easeOutExpo,
              delay: 0.28,
            }}
            className="relative
                       mb-7
                       flex
                       h-32
                       w-32
                       items-center
                       justify-center"
          >
            <div
              className="absolute
                         h-28
                         w-28
                         rounded-full
                         bg-brand/30
                         blur-3xl"
            />
            <div
              className="relative
                         h-32
                         w-32"
            >
              <Image
                src="/logo.png"
                alt="Logo SerialMente"
                fill
                priority
                sizes="128px"
                className="object-contain
                           drop-shadow-[0_12px_36px_rgba(0,0,0,0.48)]"
              />
            </div>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              ease: easeOutExpo,
              delay: 0.4,
            }}
            className="font-brand
                       text-5xl
                       text-white
                       drop-shadow-[0_4px_18px_rgba(0,0,0,0.35)]
                       xl:text-6xl"
          >
            SerialMente
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              ease: easeOutExpo,
              delay: 0.52,
            }}
            className="mt-5
                       max-w-xl
                       text-[15px]
                       leading-7
                       text-foreground-muted
                       xl:text-base"
          >
            Tieni traccia delle tue serie preferite, scopri il tempo che dedichi
            alla visione e non farti più sfuggire nessun episodio!
          </motion.p>
        </motion.section>
        <motion.section
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: easeOutExpo,
            delay: 0.66,
          }}
          className="mt-8
                     flex
                     flex-wrap
                     items-center
                     justify-center
                     gap-3"
        >
          <Link
            href="/sign-in"
            className="flex
                       h-11
                       min-w-40
                       items-center
                       justify-center
                       rounded-2xl
                       bg-linear-to-r
                       from-violet-500
                       to-fuchsia-500
                       px-6
                       text-sm
                       font-semibold
                       text-white
                       shadow-[0_12px_34px_rgba(139,92,246,0.32)]
                       transition
                       hover:scale-[1.01]"
          >
            Accedi
          </Link>
          <Link
            href="/sign-up"
            className="flex
                       h-11
                       min-w-40
                       items-center
                       justify-center
                       rounded-2xl
                       border
                       border-white/10
                       bg-white/10
                       px-6
                       text-sm
                       font-semibold
                       text-white
                       backdrop-blur-xl
                       transition
                       hover:bg-white/15"
          >
            Registrati
          </Link>
        </motion.section>
      </div>
    </main>
  );
}

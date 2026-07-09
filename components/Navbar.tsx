"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  Calendar,
  ChevronDown,
  ChevronRight,
  HeartHandshake,
  Sparkles,
  UserRound,
  Crown,
  Users,
  MessageCircleHeart,
  ClipboardList,
  HelpCircle,
  BookOpen,
  ShieldCheck,
  Star,
} from "lucide-react";
import Image from "next/image";

export default function PremiumNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openSection, setOpenSection] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);


  const menuSections = [
    {
      title: "大阪梅田ドクターズ結婚相談所について",
      icon: HeartHandshake,
      links: [
        {
          name: "大阪梅田ドクターズ結婚相談所について",
          href: "/",
        },
        {
          name: "選ばれる理由",
          href: "/why-us",
        },
      ],
    },

    {
      title: "女性向け婚活戦略",
      icon: Crown,
      links: [
        {
          name: "ハイスペック男性との成婚を望む女性たちへ",
          href: "/advantages",
        },
        {
          name: "いい人がいない！ともう３０代のあなたへ",
          href: "/consider",
        },
        {
          name: "最高の男性に出会う方法",
          href: "/ideal-man",
        },
      ],
    },

    {
      title: "男性向け婚活戦略",
      icon: UserRound,
      links: [
        {
          name: "ハイスペックなあなたへ",
          href: "/elite-matchmaking",
        },
        {
          name: "男性のための戦略",
          href: "/mens-strategy",
        },
        {
          name: "僕の条件で出会える女性は？",
          href: "/ideal-woman",
        },
        {
          name: "可愛い子に選ばれる男の戦略",
          href: "/become-her-choice",
        },
      ],
    },

    {
      title: "料金・サポートについて",
      icon: Sparkles,
      links: [
        {
          name: "料金プランと成婚までの流れ",
          href: "/plan",
        },
        {
          name: "婚活の悩みと不安を解消する特別サポート",
          href: "/support",
        },
        {
          name: "入会までの流れ",
          href: "/membership-steps",
        },
      ],
    },

    {
      title: "婚活情報・成婚実績",
      icon: BookOpen,
      links: [
        {
          name: "結婚相談所の流れとサポート内容",
          href: "/steps",
        },
        {
          name: "婚活よくある質問Q＆A",
          href: "/FAQ",
        },
        {
          name: "成婚エピソード",
          href: "/marriage-story",
        },
        {
          name: "お見合いルールとNGマナー",
          href: "/rules",
        },
      ],
    },
  ];


  return (
    <>
      {/* DESKTOP NAVBAR */}
      <nav
        className={`hidden md:block fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#FAF7F4]/80 backdrop-blur-xl shadow-sm py-3"
            : "bg-[#FAF7F4] py-6"
        }`}
      >

        <div className="max-w-7xl mx-auto px-8">

          <div className="flex justify-between items-center">

            <Link
              href="/"
              className="flex items-center gap-3"
            >
              <Image
                src="/logo2.png"
                width={45}
                height={45}
                alt="logo"
              />

              <div>
                <p className="text-base font-black text-gray-900">
                  大阪梅田ドクターズ結婚相談所
                </p>

                <p className="text-xs font-black text-[#D9889D]">
                  ２０代３０代の真剣婚活・1年以内の成婚
                </p>
              </div>

            </Link>


            <Link
              href="/contact"
              className="flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-full text-xs font-black"
            >
              <Calendar className="w-4 h-4 text-pink-300"/>
              無料面談を予約する
            </Link>

          </div>

        </div>

      </nav>
            {/* MOBILE HAMBURGER ONLY */}
      <div className="md:hidden fixed top-4 right-4 z-[60]">

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="
            flex items-center justify-center
            w-11 h-11
            rounded-full
            bg-white/80
            backdrop-blur-md
            shadow-lg
            text-gray-900
            active:scale-95
            transition-transform
          "
          aria-label="menu"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>

      </div>


      {/* MOBILE ACCORDION MENU */}
      <div
        className={`
          md:hidden
          fixed inset-0
          z-50
          bg-[#FAF7F4]
          transition-all duration-500
          overflow-y-auto
          ${
            isOpen
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-full pointer-events-none"
          }
        `}
      >

        <div className="px-4 pt-20 pb-28">

          <div className="mb-6">

            <p className="
              text-[11px]
              font-black
              tracking-[0.3em]
              text-[#B07A56]
              uppercase
            ">
              Navigation
            </p>

            <h2 className="
              mt-2
              text-xl
              font-black
              text-[#5E4633]
            ">
              婚活メニュー
            </h2>

          </div>



          <div className="space-y-3">


            {menuSections.map((section, index) => {

              const Icon = section.icon;

              const isActive =
                openSection === index;


              return (

                <div
                  key={section.title}
                  className="
                    rounded-2xl
                    border
                    border-[#EADFD5]
                    bg-white
                    overflow-hidden
                    shadow-sm
                  "
                >


                  {/* ACCORDION HEADER */}
                  <button
                    onClick={() =>
                      setOpenSection(
                        isActive ? null : index
                      )
                    }

                    className="
                      w-full
                      flex
                      items-center
                      justify-between
                      px-4
                      py-3
                      text-left
                    "
                  >

                    <div className="flex items-center gap-3">


                      <div
                        className="
                          w-8
                          h-8
                          rounded-full
                          bg-[#FAF7F2]
                          flex
                          items-center
                          justify-center
                        "
                      >

                        <Icon
                          className="
                            w-4
                            h-4
                            text-[#B07A56]
                          "
                        />

                      </div>


                      <span
                        className="
                          text-sm
                          font-black
                          text-[#5E4633]
                        "
                      >
                        {section.title}
                      </span>


                    </div>


                    <ChevronDown
                      className={`
                        w-5
                        h-5
                        text-[#B07A56]
                        transition-transform
                        duration-300
                        ${
                          isActive
                            ? "rotate-180"
                            : ""
                        }
                      `}
                    />


                  </button>



                  {/* ACCORDION CONTENT */}
                  <div
                    className={`
                      transition-all
                      duration-300
                      overflow-hidden
                      ${
                        isActive
                          ? "max-h-[500px] opacity-100"
                          : "max-h-0 opacity-0"
                      }
                    `}
                  >

                    <div
                      className="
                        px-4
                        pb-3
                        space-y-1
                      "
                    >

                      {section.links.map((link) => (

                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={() =>
                            setIsOpen(false)
                          }

                          className="
                            flex
                            items-center
                            justify-between
                            rounded-xl
                            px-3
                            py-2
                            bg-[#FAF7F2]
                            text-xs
                            font-bold
                            text-gray-700
                            hover:text-[#D9889D]
                            transition-colors
                          "
                        >

                          <span>
                            {link.name}
                          </span>


                          <ChevronRight
                            className="
                              w-3.5
                              h-3.5
                              text-gray-400
                            "
                          />

                        </Link>

                      ))}


                    </div>

                  </div>


                </div>

              );

            })}


          </div>


        </div>



      </div>


    </>
  );
}
import { ImageWidget } from "apps/admin/widgets.ts";
import HTMLRenderer from "deco-sites/std/components/HTMLRenderer.tsx";
import { HTML } from "site/apps/site.ts";
import Image from "apps/website/components/Image.tsx";
import { asset } from "$fresh/runtime.ts";
import Clipboard from "site/islands/Clipboard.tsx";

export interface CTA {
  href?: string;
  label: string;
  icon?: ImageWidget;
  color: "green" | "none";
}

export interface ReferralIfoodProps {
  image: ImageWidget;
  title: HTML;
  description: HTML;
  firstCta: CTA;
  secondCta: CTA;
}

const BTN_COLORS = {
  green:
    "md:hover:border border-[#02F67C] border bg-[#02F67C] hover:bg-transparent text-[#0A2121] hover:text-[#fff] font-semibold",
  none:
    "bg-[#113032] lg:hover:bg-transparent md:hover:border-[#02F67C] md:hover:border md:hover:text-[#fff] border-[transparent] border text-white",
};

export default function ReferralIfood(
  { image, title, description, firstCta, secondCta }: ReferralIfoodProps,
) {
  return (
    <section className="w-full bg-black px-4 py-10 md:py-[80px] lg:px-24">
      <div className="xl:container xl:mx-auto flex justify-center rounded-[24px] relative z-1 black-green relative">
        <div className="flex flex-col items-center md:grid md:pb-[300px] lg:pb-[100px] md:grid-cols-1 lg:grid-cols-[1fr_400px] py-[64px] px-8 md:p-[40px] lg:py-[100px] lg:px-[80px]">
          <div className="flex flex-col items-start md:items-center lg:items-start gap-4 md:gap-6 lg:gap-8 pb-[64px] md:pb-[95px] lg:pb-0">
            <div className="">
              <HTMLRenderer
                class="text-[40px] md:text-[48px] line-height-115"
                html={title}
              />
            </div>
            <div className="md:max-w-[740px] lg:max-w-[800px] text-[20px] lg:text-[25px] md:text-center lg:text-start">
              <HTMLRenderer html={description} />
            </div>
            <div className="black-green lg:translate-y-[235px]" />
            <div
              className="flex flex-col items-start md:items-center md:flex-row gap-4"
              id="container-do-cta"
            >
              <Clipboard />
              {firstCta && (
                <button
                  className={`flex items-center justify-center text-center w-min whitespace-nowrap h-[50px] gap-2 font-medium text-lg px-8 py-2 rounded-full md:transition md:ease-in-out md:duration-300 font-semibold
                  ${BTN_COLORS[firstCta.color]}
                  `}
                  id="clipboard-btn"
                >
                  {firstCta.icon ? <img src={firstCta.icon} alt={"check"} width={20} /> : null}
                  {firstCta.label}
                </button>
              )}
              {secondCta && (
                <a
                  className={`flex items-center justify-center text-center w-min whitespace-nowrap h-[50px] gap-2 font-medium text-lg px-8 py-2 rounded-full md:transition md:ease-in-out md:duration-300 font-semibold
                  ${BTN_COLORS[secondCta.color]}
                  `}
                  href={secondCta.href}
                  target="_blank"
                >
                  {secondCta.icon ? <img src={secondCta.icon} alt={"check"} width={20} /> : null}
                  {secondCta.label}
                </a>
              )}
            </div>
          </div>
          <div className="flex justify-center">
            <img
              className="hidden lg:block absolute right-0 bottom-0 z-[1] w-[430px] h-[583px]"
              src="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/10325/52876723-f382-43f4-b396-93fcbe170f8a"
              alt="Fundo macbook"
            />
            <img
              className="hidden md:block lg:hidden absolute bottom-0 z-[1] w-[583px] h-[328px]"
              src="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/10325/cfa4415f-51e9-4a45-a0fa-ac47e319da45"
              alt="Fundo macbook"
            />
            <img
              className="block md:hidden w-[287px] h-[231px]"
              src="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/10325/33dd2416-980b-4846-894b-12a38c2a490a"
              alt="Fundo macbook"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

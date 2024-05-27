import { ImageWidget } from "apps/admin/widgets.ts";
import HTMLRenderer, { HTML } from "deco-sites/std/components/HTMLRenderer.tsx";
import Image from "apps/website/components/Image.tsx";
import { asset } from "$fresh/runtime.ts";

export interface CTA {
  href: string;
  label: string;
  icon?: ImageWidget;
  color: "green" | "none";
}

export interface ReferralIfoodProps {
  image: ImageWidget;
  title: HTML;
  description: HTML;
  cta: CTA[];
}

const BTN_COLORS = {
  green: 'hover:bg-transparent md:hover:border md:hover:text-[#fff] border-[#02F67C] border bg-[#02F67C] text-[#0A2121] font-semibold',
  none: 'bg-[#113032] hover:bg-transparent md:hover:border-[#02F67C] md:hover:border md:hover:text-[#fff] border-[transparent] border text-white'
}

export default function ReferralIfood({ image, title, description, cta }: ReferralIfoodProps) {
  return (
    <section className="w-full bg-black px-4 py-5 md:py-[80px] lg:px-24">
      <div className="xl:container xl:mx-auto px-4 lg:px-0 flex justify-center rounded-[24px] relative z-1 black-green relative">
        <div className="flex flex-col items-center md:grid md:pb-[300px] lg:pb-[100px] md:grid-cols-1 lg:grid-cols-[1fr_400px] py-[64px] px-8 md:p-[40px] lg:py-[100px] lg:px-[80px]">
          <div className="flex flex-col items-center md:items-start gap-4 md:gap-6 lg:gap-8 pb-[64px] md:pb-[95px] lg:pb-0">
            <div className="text-[48px] md:text-[80px]">
              <HTMLRenderer class="text-[48px] md:text-[80px]" html={title} />
            </div>
            <div className="md:max-w-[800px] text-[20px] lg:text-[25px]">
              <HTMLRenderer html={description} />
            </div>
            <div className="black-green lg:translate-y-[235px]" />
            <div className="flex flex-col items-center md:flex-row gap-4">
              {cta?.map(({ color = 'green', href = '', label = '', icon }) => (
                <a
                  className={`flex items-center justify-center text-center w-min whitespace-nowrap h-[50px] gap-2 font-medium text-lg px-8 py-2 rounded-full md:transition md:ease-in-out md:duration-300 font-semibold
                  ${BTN_COLORS[color]}
                  `}
                  href={href}
                >
                  {icon ? <img src={icon} alt={'check'} width={20} /> : null}
                  {label}
                </a>
              ))}
            </div>
          </div>
          <img
            className="hidden lg:block absolute right-0 bottom-0 z-[1] w-[430px] h-[583px]"
            src={asset('/image/macbookDesktop.png')}
            alt={'Fundo macbook'}
          />
          <img
            className="hidden md:block lg:hidden absolute bottom-0 z-[1] w-[583px] h-[328px]"
            src={asset('/image/macbookTablet.png')}
            alt={'Fundo macbook'}
          />
          <img
            className="block md:hidden w-[287px] h-[231px]"
            src={asset('/image/macbookMobile.png')}
            alt={'Fundo macbook'}
          />
        </div>
      </div>
    </section>
  )
}

import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import HTMLRenderer, { HTML } from "deco-sites/std/components/HTMLRenderer.tsx";

export interface SectionProps {
  sections?: WhatIsHtmxProps[]
}

export interface WhatIsHtmxProps {
  titleText?: HTML;
  titleImage?: ImageWidget;
  subtitle?: HTML;
  description?: HTML;
  cta: CTA[];
  bottomMessage?: HTML;
}

export interface CardProps {
  icon?: ImageWidget;
  title?: string;
  description?: string;
}

export interface CTA {
  color: "green" | 'neutral',
  href: string;
  label: string;
}

const BTN_COLORS = {
  green: 'hover:bg-transparent md:hover:border md:hover:text-[#fff] border-[#02F67C] border bg-[#02F67C] text-[#0A2121] font-semibold',
  neutral: 'bg-[#113032] hover:bg-transparent md:hover:border-[#02F67C] md:hover:border md:hover:text-[#fff] border-[transparent] border text-white'
}

export default function WhatIsHtmx(
  { sections = [] }: SectionProps,
) {
  return (
    <div class="w-full bg-black py-10 md:py-[80px]">
      <div className="xl:container xl:mx-auto mx-5 md:mx-10 grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-[40px]">
        { sections?.map(({ titleText = '', titleImage = '', subtitle = '', description = '', cta, bottomMessage = '' }) => (
          <div class="flex flex-col items-start justify-end gap-6 md:gap-8 lg:md:gap-[40px] rounded-[24px] bg-[#000D0D] p-[40px] lg:p-[80px]">
            { titleImage ? (
              <div className="flex justify-center md:justify-start items-center flex-wrap line-height-115">
                { titleText && <HTMLRenderer class="inline text-[40px] md:text-[48px]" html={titleText} /> }
                { titleImage && (
                  <div className="inline">
                    <img
                      className={" h-[28px] md:h-[44px]"}
                      src={titleImage}
                      alt={'HTMX'}
                    />
                    {/* <Image
                      className={"block md:hidden "}
                      src={titleImage}
                      width={193.5}
                      height={35.5}
                      alt={'HTMX'}
                    /> */}
                  </div>
                ) }
              </div>
            ) : null }
            <div class="flex flex-col items-center md:items-start gap-3 text-start">
              <p class="text-[#FFF] font-semibold md:text-[20px]">
                <HTMLRenderer html={subtitle ?? ""} />
              </p>
              { description && <HTMLRenderer class="md:text-[20px] text-start" html={description} /> }
            </div>
            <div className="flex flex-col md:items-center md:flex-row gap-4">
              {cta?.map(({ color = 'neutral', href = '', label = '' }) => (
                <a
                  className={`flex items-center justify-center text-center whitespace-nowrap w-min h-[50px] font-medium text-[16px] px-8 py-3 rounded-full transition md:ease-in-out duration-300 font-semibold
                  ${BTN_COLORS[color]}
                  `}
                  href={href}
                >
                  {label}
                </a>
              ))}
            </div>
            { bottomMessage ? (
              <div className="text-[30px] text-center">
                <HTMLRenderer html={bottomMessage} />
              </div>
            ) : null }
          </div>
        ))}
      </div>
    </div>
  );
}

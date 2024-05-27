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
  cards?: CardProps[];
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
    <div class="w-full bg-black py-5 md:py-[80px]">
      <div className="xl:container xl:mx-auto mx-5 md:mx-10 grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        { sections?.map(({ titleText = '', titleImage = '', subtitle = '', description = '', cta, bottomMessage = '', cards = [] }) => (
          <div class="flex flex-col items-start justify-end gap-6 md:gap-8 rounded-[24px] bg-[#000D0D] p-[40px] lg:p-[80px]">
            { titleImage ? (
              <div className="flex justify-center md:justify-start items-center">
                { titleText && <HTMLRenderer class="text-[32px] md:text-[48px]" html={titleText} /> }
                { titleImage && (
                  <div className="flex justify-start">
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
            <div class="flex flex-col items-center md:items-start gap-3 text-center md:text-start">
              <p class="text-[#FFF] font-semibold md:text-[20px]">
                <HTMLRenderer html={subtitle ?? ""} />
              </p>
              { description && <HTMLRenderer class="md:text-[20px]" html={description} /> }
            </div>
            <div className="flex flex-col items-center md:flex-row gap-4">
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
            {/* <div class="grid flex-row wrap justify-center gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              {cards?.map((
                { icon, title, description }: CardProps,
                index: number,
              ) => (
                <div
                  key={index}
                  class="bg-[#000D0D] flex flex-col justify-center items-start gap-2 md:gap-6 p-6 md:p-10 py-12 text-[#FFFFFF] rounded-2xl"
                >
                  {icon && <div className="rounded-full p-1 bg-[#113032]"><img src={icon} width={32} height={32} /></div>}
                  {title && (
                    <p class="font-semibold mt-2 md:mt-0 text-[24px]">{title}</p>
                  )}
                  {description && <p class="text-[20px] text-[#A1A1AA]">{description}</p>}
                </div>
              ))}
            </div> */}
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

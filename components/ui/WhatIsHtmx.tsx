import { ImageWidget } from "apps/admin/widgets.ts";
import Icon, { AvailableIcons } from "./Icon.tsx";
import Image from "apps/website/components/Image.tsx";
import HTMLRenderer, { HTML } from "deco-sites/std/components/HTMLRenderer.tsx";

export interface CTA {
  color: "green" | 'neutral',
  href: string;
  label: string;
}
export interface WhatIsHtmxProps {
  titleImage?: ImageWidget;
  titleText?: string;
  description?: HTML;
  cta: CTA[];
  cards?: CardProps[];
}

export interface CardProps {
  icon?: ImageWidget;
  title?: string;
  description?: string;
}

export default function WhatIsHtmx(
  { titleText = '', titleImage = '', description = '', cta, cards }: WhatIsHtmxProps,
) {
  return (
    <div class="w-full bg-[#0A2121] py-5 md:py-10">
      <div class="xl:container xl:mx-auto mx-5 md:mx-10 flex flex-col items-center justify-center gap-4 md:gap-6">
        { titleImage ? (
          <div className="flex justify-center">
            <Image src={titleImage ?? ""} alt="HTMX" width={224} height={44} />
          </div>
        ) : null }
        <div class="flex justify-center">
          <p class="text-[#02F67C] font-semibold text-[32px] md:text-[40px]">
            {titleText}
          </p>
        </div>
        <div className="flex justify-center">
          <HTMLRenderer html={description ?? ""} />
        </div>
        <div class="grid flex-row wrap justify-center gap-2 grid-cols-2 lg:grid-cols-4">
          {cards?.map((
            { icon, title, description }: CardProps,
            index: number,
          ) => (
            <div
              key={index}
              class="bg-[#0C2929] flex flex-col justify-center items-start gap-2 md:gap-6 p-6 md:p-10 py-12 md:py-20 text-[#FFFFFF] rounded-2xl"
            >
              {icon && <img src={icon} width={32} height={32} />}
              {title && (
                <p class="font-semibold mt-2 md:mt-0 md:text-[28px]">{title}</p>
              )}
              {description && <p class="text-xs md:text-base">{description}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

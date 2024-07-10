import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import HTMLRenderer from "deco-sites/std/components/HTMLRenderer.tsx";
import { HTML } from "site/apps/site.ts";

export interface Props {
  flag: {
    text: string,
    icon?: ImageWidget
  };
  flagSound?: {
    text: string,
    icon?: ImageWidget
  };
  image?: ImageWidget;
  /**
   * @format rich-text
   */
  title: string;
  subtitle: HTML;
  description: HTML;
  buttons: CTA[];
}

export interface CTA {
  color?: "green" | 'neutral',
  id?: string;
  href: string;
  label: string;
}

const BTN_COLORS = {
  green: 'hover:bg-transparent md:hover:border md:hover:text-[#fff] border-[#02F67C] border bg-[#02F67C] text-[#0A2121] font-semibold',
  neutral: 'bg-[#113032] hover:bg-transparent md:hover:border-[#02F67C] md:hover:border md:hover:text-[#fff] border-[transparent] border text-white'
}

const BASE_PROPS = {
  flag: {
    text: "Masterclass",
  },
  flagSound: {
    text: "Português",
    icon: ''
  },
  title:
    '<p><span style="color: rgb(45, 194, 107);" data-mce-style="color: rgb(45, 194, 107);">Are you ready?</span></p>',
  buttons: [{
    href: "#",
    label: "Register now",
    color: "green",
  }],
  subtitle: "<p>edition</p>",
  description:
    "<p>A 3-day event to transform ideas into stunning websites. Join the Get Site Done sprint and compete for over R$20,000 in prizes <3</p>",
};

export default function Hero({ props }: { props: Props }) {
  const {
    flag,
    title,
    subtitle,
    description,
    buttons,
    flagSound,
  } = {
    ...BASE_PROPS,
    ...props,
  };

  return (
    <div class="w-full h-full bg-black">
      <div class="w-full h-full flex flex-col lg:flex-row justify-center items-center gap-11 lg:px-8 lg:gap-4 pb-[40px] md:pb-[80px] pt-40 container px-3">
        <div class=" h-full flex flex-col justify-center items-center gap-[40px] w-full mx-auto">
          <div class="flex flex-row gap-x-[32px] flex-wrap gap-y-4 justify-center items-center">
            <span class="text-white border border-base-content rounded-3xl px-4 py-2 text-sm md:text-base text-center lg:text-start flex flex-row items-center justify-center gap-2 off-black">
              { flag?.icon && <img src={flag?.icon} alt={flag?.text} width={16} height={16} />}
              { flag?.text }
            </span>
            {flagSound && (
              <span class="sm:whitespace-nowrap lg:ml-6 text-white border border-base-content rounded-3xl px-6 py-2 sm:w-min text-sm md:text-base text-start sm:text-center lg:text-start flex flex-row items-center justify-center gap-2 off-black">
                { flagSound?.icon && <img src={flagSound?.icon} alt={flagSound?.text} width={16} height={16} />}
                { flagSound?.text }
              </span>
            )}
          </div>
          <HTMLRenderer 
            class="argentPixel text-[54px] md:text-[98px] lg:text-[8rem] md:leading-[5.2rem] text-center sm:mb-0 md:mb-2 md:mt-4" 
            html={title}
          />
          <div className="flex justify-center items-center">
            <Image
              className={"hidden md:block"}
              src={props.image ?? ''} 
              width={224} 
              height={44} 
              alt={'HTMX'} 
            />
            <Image
              className={"block md:hidden w-[154px] h-[30px]"}
              src={props.image ?? ''} 
              width={193.5} 
              height={37.5} 
              alt={'HTMX'} 
            />
            <HTMLRenderer class="text-[32px] md:text-[50px]" html={subtitle} />
          </div>
          <HTMLRenderer class="text-center text-sm md:text-base md:leading-[1.8rem]" html={description} />
          <div class="flex flex-col md:flex-row gap-4 md:gap-6 items-center">
            { buttons.map(({ color = 'green', href, label, id }: CTA) => (
              <a
                id={id}
                className={`flex items-center text-[16px] px-8 py-3 rounded-full md:transition md:ease-in-out md:duration-300 font-semibold
                ${BTN_COLORS[color]}
              `}
                href={href}
              >
                {label}
              </a>
            )) }
          </div>
        </div>
      </div>
    </div>
  );
}

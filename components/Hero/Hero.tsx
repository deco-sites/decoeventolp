import { ImageWidget } from "apps/admin/widgets.ts";
import type { Props as PropsButton } from "../ui/Button.tsx";
import Icon from "../ui/Icon.tsx";
import Image from "apps/website/components/Image.tsx";

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
   * @format html
   */
  title: string;
  /**
   * @format html
   */
  subtitle: string;
  button: PropsButton;
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
  button: {
    href: "#",
    label: "Register now",
  },
  subtitle:
    "<p>A 3-day event to transform ideas into stunning websites. Join the Get Site Done sprint and compete for over R$20,000 in prizes <3</p>",
};

export default function Hero({ props }: { props: Props }) {
  const {
    flag,
    title,
    subtitle,
    button,
    flagSound,
  } = {
    ...BASE_PROPS,
    ...props,
  };

  return (
    <div class="w-full h-full bg-black">
      <div class="w-full h-full flex flex-col lg:flex-row justify-center items-center gap-11 lg:px-8 lg:gap-4 pb-16 pt-40 container px-3">
        <div class=" h-full flex flex-col justify-center items-center gap-4 md:gap-6 xl:gap-8 w-full mx-auto">
          <div class="flex flex-row gap-2 flex-wrap gap-y-3 justify-center items-center">
            <span class="text-white border border-base-content rounded-3xl px-4 py-2 text-sm text-center lg:text-start flex flex-row items-center justify-center gap-2">
              { flag?.icon && <img src={flag?.icon} alt={flag?.text} width={16} height={16} />}
              { flag?.text }
            </span>
            {flagSound && (
              <span class="sm:whitespace-nowrap lg:ml-6 text-white border border-base-content rounded-3xl px-4 py-2 sm:w-min text-sm text-start sm:text-center lg:text-start flex flex-row items-center justify-center gap-2">
                { flagSound?.icon && <img src={flagSound?.icon} alt={flagSound?.text} width={16} height={16} />}
                { flagSound?.text }
              </span>
            )}
          </div>
          <h2
            class="argentPixel text-[54px] md:leading-[5.2rem] md:text-[98px] lg:text-[128px] text-white text-center lg:text-start -mb-2 sm:mb-0 md:mb-2 md:mt-4"
            dangerouslySetInnerHTML={{ __html: title }}
          >
          </h2>
          <div className="flex justify-center">
            <Image 
              src={props.image ?? ''} 
              width={224} 
              height={44} 
              alt={'HTMX'} 
            />
          </div>
          <span
            class="text-sm md:text-base text-camp-neutral md:leading-[1.8rem] lg:text-lg xl:text-2xl text-center lg:text-start"
            dangerouslySetInnerHTML={{ __html: subtitle }}
          >
          </span>
          <div class="flex flex-col gap-2 items-center lg:items-start ">
            <a
              className="flex items-center hover:bg-transparent md:hover:border md:hover:text-[#fff] border-[#02F67C] border bg-[#02F67C] font-bold text-[18px] text-[#0A2121] px-8 py-3 rounded-full md:transition md:ease-in-out md:duration-300 font-bold"
              href={button.href}
            >
              {button.label}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

import HTMLRenderer, { HTML } from "deco-sites/std/components/HTMLRenderer.tsx";
import type { Props as PropsButton } from "../ui/Button.tsx";
import { ImageWidget } from "apps/admin/widgets.ts";

export interface Props {
  flag: {
    text: string,
    icon?: ImageWidget
  };
  flagSound?: {
    text: string,
    icon?: ImageWidget
  };
  title: HTML;
  description: HTML;
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
  description:
    "<p>A 3-day event to transform ideas into stunning websites. Join the Get Site Done sprint and compete for over R$20,000 in prizes <3</p>",
};

export default function AreYouReady({ props }: { props: Props }) {
  const {
    flag,
    title,
    description,
    button,
    flagSound,
  } = {
    ...BASE_PROPS,
    ...props,
  };

  return (
    <div className="w-full bg-[#02F67C]">
      <div className="w-full h-full bg-black w-full pb-2 rounded-b-[100px]">
        <div class="w-full h-full flex flex-col relative overflow-hidden z-[1] lg:flex-row justify-center items-center gap-11 lg:px-8 lg:gap-4 py-10 md:py-[80px] container px-3">
          <div class=" h-full flex flex-col justify-center items-center gap-[32px] w-full">
            <div class="flex lg:hidden flex-row gap-x-[32px] flex-wrap gap-y-4 justify-center items-center">
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
              class="argentPixel text-[54px] md:text-[98px] lg:text-[128px] text-center" 
              html={title}
            />
            <div class="hidden lg:flex flex-row gap-x-[32px] flex-wrap gap-y-4 justify-center items-center">
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
            <HTMLRenderer class="text-center text-sm md:text-base md:leading-[1.8rem]" html={description} />
            <div className="light-green translate-y-[155px] lg:translate-y-[235px]" />
            <div class="flex flex-col gap-2 items-center lg:items-start ">
              <a
                className="flex items-center hover:bg-transparent md:hover:border md:hover:text-[#fff] border-[#02F67C] border bg-[#02F67C] text-[16px] text-[#0A2121] px-8 py-3 rounded-full md:transition md:ease-in-out md:duration-300 font-semibold"
                href={button.href}
              >
                {button.label}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

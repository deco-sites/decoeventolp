import type { Props as PropsButton } from "../ui/Button.tsx";
import Icon from "../ui/Icon.tsx";

export interface Props {
  flag: string;
  flagSound?: string;
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
  flag: "Masterclass",
  flagSound: "Português",
  title:
    '<p><span style="color: rgb(45, 194, 107);" data-mce-style="color: rgb(45, 194, 107);">Are you ready?</span></p>',
  button: {
    href: "#",
    label: "Register now",
  },
  subtitle:
    "<p>A 3-day event to transform ideas into stunning websites. Join the Get Site Done sprint and compete for over R$20,000 in prizes <3</p>",
};

export default function AreYouReady({ props }: { props: Props }) {
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
    <div className="w-full bg-[#02F67C] relative">
      <div className="w-full h-full bg-black w-full">
        <div class="w-full h-full flex flex-col lg:flex-row justify-center items-center gap-11 lg:px-8 lg:gap-4 pb-16 pt-28 lg:pt-56 container px-3 rounded-b-3xl">
          <div class=" h-full flex flex-col justify-center items-center gap-4 md:gap-6 xl:gap-8 lg:w-[55%] xl:w-2/4 w-full">
            <div class="flex flex-row gap-2 flex-wrap gap-y-3 justify-center items-center">
              <span class="text-white border border-base-content rounded-3xl px-4 py-2 text-sm text-center lg:text-start flex flex-row items-center justify-center gap-2">
                <Icon id="Identification" width={16} height={16} />
                {flag}
              </span>
              {flagSound && (
                <span class="whitespace-nowrap lg:ml-6 text-white border border-base-content rounded-3xl px-4 py-2 w-min text-sm text-center lg:text-start flex flex-row items-center justify-center gap-2">
                  <Icon id="Calendar" width={16} height={16} />
                  {flagSound}
                </span>
              )}
            </div>
            <h2
              class="text-[54px] md:leading-[4.2rem] md:text-[98px] lg:text-[128px] lg:leading-[3.2rem] text-white text-center lg:text-start"
              dangerouslySetInnerHTML={{ __html: title }}
            >
            </h2>
            <span
              class="md:text-[1.5rem] text-camp-neutral md:leading-[1.8rem] lg:text-lg lg:max-w-[380px] xl:text-2xl xl:max-w-[540px] text-center lg:text-start"
              dangerouslySetInnerHTML={{ __html: subtitle }}
            >
            </span>
            <div className="light-green" />
            <div class="flex flex-col gap-2 items-center lg:items-start ">
              <a
                className="flex items-center hover:bg-transparent md:hover:border md:hover:text-[#fff] border-[#02F67C] border bg-[#02F67C] font-medium text-[16px] text-[#0A2121] px-8 py-3 rounded-full md:transition md:ease-in-out md:duration-300 font-semibold"
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

import Button from "../ui/Button.tsx";
import type { Props as PropsButton } from "../ui/Button.tsx";
import PopUp from "site/islands/PopUp.tsx";
import type { Props as PropsPopUp } from "site/components/ui/PopUp.tsx";
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
    <div class="w-full h-full bg-black">
      <div class="w-full h-full flex flex-col lg:flex-row justify-center items-center gap-11 lg:px-8 lg:gap-4 pb-16 pt-28 lg:pt-56 container px-3">
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
            class="text-4xl md:text-[4rem] md:leading-[4.2rem] lg:text-[2.75rem] lg:leading-[3.2rem] xl:text-[3.5rem] xl:leading-[4rem] 2xl:leading-[4.5rem] 2xl:text-[4rem] text-white text-center lg:text-start"
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
            <Button
              id={button.id}
              label={button.label}
              href={button.href}
              theme="dark"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

import { asset, Head } from "$fresh/runtime.ts";

import BigText from "site/components/ui/BigText.tsx";

export interface Props {
  /**
   * @format html
   */
  title: string;
  /**
   * @format html
   */
  subTitle: string;
  topics: {
    title: string;
    description: string;
  }[];
}

const BASE_PROPS = {
  title:
    '<p>This masterclass is meticulously designed to <span style="color: rgb(45, 194, 107);" data-mce-style="color: rgb(45, 194, 107);"> <span style="color: rgb(2, 246, 124);" data-mce-style="color: rgb(2, 246, 124);">bridge this gap.</span></span></p>',
  subTitle: "<p>By the end of the course...</p>",
  topics: [
    {
      text:
        "You'll launch top-tier websites and headless storefronts with unmatched speed.",
    },
    {
      text: "You'll create scalable, highly personalized digital experiences.",
    },
    {
      text:
        "You'll enhance team collaboration, simplifying site updates for non-dev roles.",
    },
    {
      text:
        "You'll confidently manage live sites with deco.cx's robust monitoring suite.",
    },
    {
      text:
        "You'll emerge as a forward-thinking developer, equipped for the web's evolution.",
    },
    {
      text: "You'll expertly tackle and debug real-world project challenges.",
    },
  ],
};

export default function Achievements({ props }: { props: Props }) {
  const { title, subTitle, topics } = { ...BASE_PROPS, ...props };

  return (
    <div class="w-full h-full bg-black">
      <div class="container px-3 py-24">
        <BigText title={title} />
        <span
          class="mt-4 mb-10 text-xl  leading-[2.5rem] md:mb-20 md:text-[2rem] md:leading-[1.8rem] text-center block w-[100%] lg:leading-[4rem] text-white"
          dangerouslySetInnerHTML={{ __html: subTitle }}
        >
        </span>

        <div class="relative">
          <div class="lg:mx-auto lg:max-w-max">
            {topics.map((topic) => (
              <div className="flex flex-col gap-2">
                <div class="mb-6 mx-auto flex items-start gap-4">
                  <img src="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/10325/87e1a247-a346-4129-8fdf-230e9bd37242" width={25} height={25} />
                  <p class="text-white text-xl leading-6 font-medium md:text-2xl md:leading-7 ">
                    {topic.title}
                  </p>
                </div>
                <div>
                  <p>
                    {topic.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

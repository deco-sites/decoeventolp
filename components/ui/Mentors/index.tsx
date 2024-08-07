import type { Props as Mentors } from "site/components/ui/Mentors/ProfileMentor.tsx";
import ProfileMentor from "./ProfileMentor.tsx";
import HTMLRenderer from "deco-sites/std/components/HTMLRenderer.tsx";
import { HTML } from "site/apps/site.ts";

export interface Props {
  title?: HTML;
  mentors: Mentors[];
}

const BASE_PROPS = {
  mentors: [
    {
      image: {
        alt: "Matheus Gaudêncio",
        src:
          "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4391/a09ff2fe-a610-4397-a885-cce2b87dff3f",
      },
      contacts: [
        {
          type: "Linkedin",
          href: "#",
        },
        {
          type: "Git-hub",
          href: "#",
        },
        {
          type: "Twitter",
          href: "#",
        },
      ],
      content:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac nunc mi. Cras vitae interdum tortor. Cras pharetra lacus eget elementum fringilla. Pellentesque interdum, ligula posuere dignissim volutpat, arcu arcu vehicula lectus,</p>",
      nameMentor: "Matheus Gaudêncio",
      profession: "Software Engineer at deco.cx",
    },
    {
      image: {
        alt: "Tiago Gimenes",
        src:
          "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4391/106dc900-5175-4786-8503-ef819efddb36",
      },
      contacts: [
        {
          type: "Linkedin",
          href: "#",
        },
        {
          type: "Git-hub",
          href: "#",
        },
        {
          type: "Twitter",
          href: "#",
        },
      ],
      content:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac nunc mi. Cras vitae interdum tortor. Cras pharetra lacus eget elementum fringilla. Pellentesque interdum, ligula posuere dignissim volutpat, arcu arcu vehicula lectus,</p>",
      nameMentor: "Tiago Gimenes",
      profession: "Software Engineer at deco.cx",
    },
    {
      image: {
        alt: "Luciano Junior",
        src:
          "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4391/38a43da0-02a5-4070-9198-99484acd7dae",
      },
      contacts: [
        {
          type: "Linkedin",
          href: "#",
        },
        {
          type: "Git-hub",
          href: "#",
        },
        {
          type: "Twitter",
          href: "#",
        },
      ],
      content:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac nunc mi. Cras vitae interdum tortor. Cras pharetra lacus eget elementum fringilla. Pellentesque interdum, ligula posuere dignissim volutpat, arcu arcu vehicula lectus,</p>",
      nameMentor: "Luciano Junior",
      profession: "Co-Founder and CTO at deco.cx",
    },
  ],
};

export default function Mentors({ props }: { props: Props }) {
  const { title, mentors } = { ...BASE_PROPS, ...props };

  return (
    <div class="w-full h-full bg-black">
      <div class="flex flex-col container gap-10 py-8 px-4 lg:py-20">
        {title && title.length
          ? (
            <h2 class="text-center text-[40px] md:text-[48px]">
              <HTMLRenderer html={title} />
            </h2>
          )
          : null}
        <div class="flex flex-col gap-6 md:flex-row md:justify-center xl:gap-20">
          {mentors.map((mentor) => <ProfileMentor props={mentor} />)}
        </div>
      </div>
    </div>
  );
}

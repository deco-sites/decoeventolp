import type { ImageWidget } from "apps/admin/widgets.ts";
import HTMLRenderer from "deco-sites/std/components/HTMLRenderer.tsx";
import type { HTML } from "deco-sites/std/components/HTMLRenderer.tsx";
import BenefitCard from "./BenefitCard.tsx";

/**
 * @titleBy title
 */
interface Item {
  icon: ImageWidget;
  title: string;
  subTitle?: HTML;
}

export interface Props {
  title?: HTML
  items: Item[];
}

const BASE_PROPS = {
  items: [
    {
      icon:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4391/22c5637f-a952-4fe8-8c22-f2cd53f14ec4",
      title: "TypeScript, JSX, Tailwind ",
    },
    {
      icon:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4391/a9b63e44-031c-4aa7-8349-d6f786d97e3c",
      title: "Intermediate",
    },
    {
      icon:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4391/66141bbe-ebde-410e-b575-2916c870c7fb",
      title: "15h of video content",
    },
    {
      icon:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4391/c3ba4303-cec5-4911-aaf8-66e959ee0996",
      title: "Flexible Scheduele",
    },
  ],
};

export default function Benefits({ props }: { props: Props }) {
  const { items } = { ...BASE_PROPS, ...props };

  return (
    <div class="w-full h-full bg-black py-[40px] md:py-[80px]">
      <div className="flex flex-col gap-10 md:gap-[80px]">
        {props?.title ? (
          <div className="w-full text-center line-height-115">
            <HTMLRenderer class="text-[40px] md:text-[48px]" html={props.title} />
          </div>
        ) : null}
        <div class="container md:flex md:gap-1 md:flex-wrap py-10 px-12 lg:grid lg:grid-cols-4 divide-y lg:divide-x lg:divide-y-0 border-[#A1A1AA]">
          {items.map((item, index) => (
            <>
              <div 
                className={`md:flex md:gap-1 md:flex-wrap lg:justify-center w-full md:w-[45%] lg:w-full
                ${index === 1 ? 'md:border-t-0 md:border-t-transparent' : ''}
                ${index === 0 ? 'md:pl-2' : ''}
                `}
              >
                <hr
                  class={`hidden h-[225px] self-end bg-[#A1A1AA] ${
                    (index + 1) % 2 == 0 ? "md:block w-[1px] lg:hidden" : ""
                  }`}
                />
                <BenefitCard
                  image={item.icon}
                  title={item.title}
                  subTitle={item.subTitle ?? ""}
                  position={index}
                />
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

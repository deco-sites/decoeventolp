import type { ImageWidget } from "apps/admin/widgets.ts";
import HTMLRenderer from "deco-sites/std/components/HTMLRenderer.tsx";

export interface Props {
  image: ImageWidget;
  title: string;
  subTitle: string;
  position: number;
}

export default function BenefitCard(
  { image, title, subTitle, position }: Props,
) {

  return (
    <>
      <div
        class={`py-6 lg:py-0 lg:w-min lg:whitespace-nowrap ${
          position == 0
            ? "pl-0 border-t-transparent lg:border-l-transparent 2xl:pl-0"
            : "lg:pl-2 2xl:pl-2"
        } ${
          (position + 1) == 1 || (position + 1) == 2
            ? "md:border-t-0 md:border-t-transparent"
            : "border-t-[#A1A1AA]"
        } lg:w-[100%] ${
          (position + 1) % 2 == 0
            ? "md:flex md:justify-start md:pl-2 lg:block"
            : ""
        }`}
      >
        <div>
          <img class="mb-4" src={image} width={32} height={32} />

          <h4 class="text-[#fff] text-semibold text-xl">{title}</h4>
          { subTitle ? (
            <div className="mt-2 text-[#A1A1AA] text-[18px]"> 
              <HTMLRenderer html={subTitle} />
            </div>
          ) : null }
        </div>
      </div>
    </>
  );
}

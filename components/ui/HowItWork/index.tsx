import HTMLRenderer from "deco-sites/std/components/HTMLRenderer.tsx";
import { HTML } from "site/apps/site.ts";
import { ImageWidget } from "apps/admin/widgets.ts";

export interface HowItWorkProps {
  title?: HTML;
  cards?: CardProps[];
}

export interface CardProps {
  icon?: ImageWidget;
  title: string;
  description: HTML;
}

export default function HowItWork({ title, cards }: HowItWorkProps) {
  return (
    <section className="w-full bg-black py-10 md:py-[80px] pb-[80px] md:pb-[120px]">
      <div className="flex flex-col gap-10 md:gap-[80px] xl:container xl:mx-auto">
        { title && (
          <div className="text-[40px] md:text-[48px] text-center w-full pb-4 line-height-115">
            <HTMLRenderer html={title} />
          </div>
        ) }
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px] md:gap-6 px-4">
          { cards?.map(({ title, description, icon }) => (
            <div className="flex flex-col rounded-[24px] bg-[#0D1717] gap-4 py-5 px-6 md:py-6 md:px-8 lg:px-12 lg:py-10">
              {icon && (
                <div>
                  <img src={icon} alt={title} width={25} height={25} />
                </div>
              )}
              <div>
                <HTMLRenderer class="text-[20px] md:text-[24px] text-[#02F67C]" html={title} />
                <HTMLRenderer class="text-[20px]" html={description} />
              </div>
            </div>
          )) }
        </div>
      </div>
    </section>
  )
}

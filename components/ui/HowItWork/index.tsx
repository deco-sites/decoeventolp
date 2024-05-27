import HTMLRenderer, { HTML } from "deco-sites/std/components/HTMLRenderer.tsx";
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
    <section className="w-full bg-black">
      <div className="flex flex-col gap-4 xl:container xl:mx-auto">
        { title && (
          <div className="text-[40px] md:text-[48px] text-center w-full pb-4">
            <HTMLRenderer html={title} />
          </div>
        ) }
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 px-4">
          { cards?.map(({ title, description, icon }) => (
            <div className="flex flex-col rounded-[24px] off-black gap-6 py-6 px-7 md:py-8 md:px-10 lg:py-9 lg:px-12">
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
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4">
          { cards?.slice(0, 2)?.map(({ title, description, icon }) => (
            <div className={`flex flex-col rounded-lg off-black w-full`}>
              {icon && (
                <div className="px-6 pt-6">
                  <img src={icon} alt={title} width={25} height={25} />
                </div>
              )}
              <div className="px-6 pb-4 pt-6">
                <HTMLRenderer class="text-[20px] md:text-[24px] text-[#02F67C]" html={title} />
                <HTMLRenderer class="text-[20px]" html={description} />
              </div>
            </div>
          )) }
        </div> */}
      </div>
    </section>
  )
}

import HTMLRenderer, { HTML } from "deco-sites/std/components/HTMLRenderer.tsx";
import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

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
      <div className="flex flex-col gap-4">
        { title && (
          <div className="text-[40px] text-center w-full pb-4">
            <HTMLRenderer html={title} />
          </div>
        ) }
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4">
          { cards?.splice(0, 2)?.map(({ title, description, icon }) => (
            <div className="flex flex-col rounded-lg off-black">
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
        </div>
        <div className="hidden lg:grid grid-cols-3 gap-4 px-4">
        { cards?.map(({ title, description, icon }) => (
            <div className="flex flex-col rounded-lg off-black w-full">
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
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:hidden gap-4 px-4">
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
        </div>
        <div className="w-full flex lg:hidden px-4">
          <div className="flex flex-col rounded-lg off-black w-full">
            { cards?.[cards?.length - 1]?.title ? (
              <div className={`flex flex-col rounded-lg off-black w-full`}>
                {cards?.[cards?.length - 1]?.icon && (
                  <div className="px-6 pt-6">
                    <img src={cards?.[cards?.length - 1]?.icon} alt={title} width={25} height={25} />
                  </div>
                )}
                <div className="px-6 pb-4 pt-6">
                  <HTMLRenderer class="text-[20px] md:text-[24px] text-[#02F67C]" html={cards?.[cards?.length - 1]?.title} />
                  <HTMLRenderer class="text-[20px]" html={cards?.[cards?.length - 1]?.description} />
                </div>
              </div>
            ) : null }
          </div>
        </div>
      </div>
    </section>
  )
}

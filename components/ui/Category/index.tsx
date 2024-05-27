import { ImageWidget } from "apps/admin/widgets.ts";
import HTMLRenderer, { HTML } from "deco-sites/std/components/HTMLRenderer.tsx";
import Image from "apps/website/components/Image.tsx";
import Icon from "site/components/ui/Icon.tsx";

export interface CategoryProps {
  title: HTML
  flags: Flag[]
  cards?: CardProps[]
}

export interface Flag {
  icon?: ImageWidget;
  text: HTML
}

export interface Card {
  icon?: ImageWidget;
  text: HTML
}

export interface CardProps {
  image?: ImageWidget;
  title: HTML;
  topics: Card[];
}

export default function Category({ title, flags, cards }: CategoryProps) {
  return (
    <section className="bg-black w-full py-5 md:py-[80px]">
      <div className="flex flex-col gap-4 xl:container xl:mx-auto">
        <div className="text-[40px] text-center w-full">
          <HTMLRenderer html={title} />
        </div>
        <div class="flex flex-row gap-2 flex-wrap gap-y-3 justify-center items-center">
          { flags?.map(({ icon, text }) => (
            <span class="text-white off-black border border-base-content rounded-3xl px-4 py-2 text-sm text-center lg:text-start flex flex-row items-center justify-center gap-2">
              { icon && <img src={icon ?? ''} alt={text} width={16} height={16} /> }
              <HTMLRenderer html={text} />
            </span>
          )) }
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4">
          { cards?.slice(0, 2)?.map(({ title, topics, image }) => (
            <div className="grid grid-rows-2 h-full max-h-[600px] rounded-[16px] overflow-hidden bg-[#0D1717]">
              <div className="max-h-[200px] p-1">
                <Image src={image ?? ''} alt={title} width={350} height={190} className="w-full object-cover rounded-[16px]" />
              </div>
              <div className="px-6 pb-4 pt-6 black-off-black">
                <HTMLRenderer class="text-[40px] md:text-[48px]" html={title} />
                <ul>
                  { topics?.map(({ text, icon }) => (
                    <li className="flex gap-2 items-center">
                      <img src={icon} alt={text} width={16} height={16} />
                      <HTMLRenderer html={text} />
                    </li>
                  )) }
                </ul>
              </div>
            </div>
          )) }
        </div>
        <div className="w-full flex px-4">
          { cards?.slice(2, 3)?.map(({ title, topics, image }) => (
            <div className="grid grid-rows-2 h-full max-h-[600px] rounded-[16px] overflow-hidden black-off-black">
              <div className="max-h-[200px] p-1">
                <Image src={image ?? ''} alt={title} width={350} height={190} className="w-full object-cover rounded-[16px]" />
              </div>
              <div className="px-6 pb-4 pt-6 black-off-black">
                <HTMLRenderer class="text-[40px] md:text-[48px]" html={title} />
                <ul>
                  { topics?.map(({ text, icon }) => (
                    <li className="flex gap-2 items-center">
                      <img src={icon} alt={text} width={16} height={16} />
                      <HTMLRenderer html={text} />
                    </li>
                  )) }
                </ul>
              </div>
            </div>
          )) }
        </div>
      </div>
    </section>
  )
}

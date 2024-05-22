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
    <section className="bg-black w-full">
      <div className="flex flex-col">
        <div className="">
          <HTMLRenderer html={title} />
        </div>
        <div class="flex flex-row gap-2 flex-wrap gap-y-3 justify-center items-center">
          { flags?.map(({ icon, text }) => (
            <span class="text-white off-black border border-base-content rounded-3xl px-4 py-2 text-sm text-center lg:text-start flex flex-row items-center justify-center gap-2">
              { icon && <Icon id={icon} width={16} height={16} /> }
              <HTMLRenderer html={text} />
            </span>
          )) }
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          { cards?.map(({ title, topics, image }) => (
            <div className="grid grid-rows-2 rounded-md overflow-hidden black-off-black">
              <Image src={image ?? ''} alt={title} width={350} height={190} className="w-full object-cover" />
              <div className="p-4 pt-6">
                <HTMLRenderer html={title} />
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

import { ImageWidget } from "apps/admin/widgets.ts";
import HTMLRenderer from "deco-sites/std/components/HTMLRenderer.tsx";
import { HTML } from "site/apps/site.ts";
import Image from "apps/website/components/Image.tsx";

export interface CategoryProps {
  title: HTML;
  note?: Note;
  flags: Flag[];
  cards?: CardProps[];
}

export interface Note {
  /**
   * @format rich-text
   */
  title?: string;
  /**
   * @format rich-text
   */
  text?: string;
}

export interface Flag {
  icon?: ImageWidget;
  text: HTML;
}

export interface Card {
  icon?: ImageWidget;
  text: HTML;
}

export interface CardProps {
  image?: ImageWidget;
  title: HTML;
  topics: Card[];
}

export default function Category({ title, flags, cards, note }: CategoryProps) {
  return (
    <section className="bg-black w-full py-10 md:py-[80px] pb-[80px] md:pb-[120px]">
      <div className="flex flex-col gap-[40px] md:gap-[80px] xl:container xl:mx-auto">
        <div className="text-[40px] md:text-[48px] text-center w-full line-height-115">
          <HTMLRenderer html={title} />
        </div>
        {(note?.title || note?.text) && (
          <div class="flex flex-col sm:flex-row gap-6 md:gap-16 px-6 py-8 max-w-[698px] bg-[#0D1717] rounded-lg text-white leading-tight text-[12px] md:text-[18px] mx-auto">
            {note?.title && (
              <h3 class="text-[14px] md:text-[24px] font-semibold">
                <HTMLRenderer html={note?.title} />
              </h3>
            )}
            {note?.text && <HTMLRenderer html={note?.text ?? ""} />}
          </div>
        )}
        <div class="flex flex-row gap-4 lg:gap-8 flex-wrap gap-y-4 lg:gap-y-8 justify-center items-center">
          {flags?.map(({ icon, text }) => (
            <span class="text-white text-sm md:text-base off-black border border-base-content rounded-3xl px-4 py-2 text-center lg:text-start flex flex-row items-center justify-center gap-2">
              {icon && (
                <img src={icon ?? ""} alt={text} width={16} height={16} />
              )}
              <HTMLRenderer html={text} />
            </span>
          ))}
        </div>
        <div className="flex flex-col gap-10 md:gap-[80px] lg:gap-5">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 md:gap-[80px] lg:gap-5 px-4">
            {cards?.slice(0, 2)?.map(({ title, topics, image }) => (
              <div className="grid grid-rows-2 gap-5 h-full max-h-[600px] rounded-[16px] overflow-hidden bg-[#0D1717]">
                <div className="max-h-[200px] p-1">
                  <Image
                    src={image ?? ""}
                    alt={title}
                    width={350}
                    height={190}
                    className="w-full object-cover rounded-[16px]"
                  />
                </div>
                <div className="flex flex-col gap-[24px] p-4 md:p-8 bg-[#0D1717]">
                  <HTMLRenderer
                    class="text-[40px] md:text-[48px]"
                    html={title}
                  />
                  <ul className="flex flex-col gap-[24px]">
                    {topics?.map(({ text, icon }) => (
                      <li className="flex items-center text-[20px] gap-4">
                        <img src={icon} alt={text} width={16} height={16} />
                        <HTMLRenderer html={text} />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full flex px-4">
            {cards?.slice(2, 3)?.map(({ title, topics, image }) => (
              <div className="grid grid-rows-1 gap-5 h-full w-full max-h-[600px] rounded-[16px] overflow-hidden bg-[#0D1717] border border-[#0D1717]">
                <div
                  className="min-h-[234px] p-1 rounded-[16px]"
                  style={{
                    backgroundImage: `url(${image ?? ""})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    verticalAlign: "middle",
                  }}
                />
                {/* <Image src={image ?? ''} alt={title} width={350} height={190} className="w-full object-cover rounded-[16px] object-center" />
                </div> */}
                <div className="flex flex-col gap-[24px] p-4 md:p-8 bg-[#0D1717]">
                  <HTMLRenderer
                    class="text-[40px] md:text-[48px]"
                    html={title}
                  />
                  <ul className="flex flex-col gap-[24px]">
                    {topics?.map(({ text, icon }) => (
                      <li className="flex items-center text-[20px] gap-4">
                        <img src={icon} alt={text} width={16} height={16} />
                        <HTMLRenderer class="text-[20px];" html={text} />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

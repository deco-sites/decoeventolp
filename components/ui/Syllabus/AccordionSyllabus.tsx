import Icon from "../Icon.tsx";

/**
 * @titleBy title
 */
interface Content {
  title: string;
  /**
   * @format rich-text
   */
  content: string;
  link?: string;
  /**
   * @default Modules
   */
  dataPublish?: string;
  time: string;
}

/**
 * @titleBy title
 */
export interface Props {
  title: string;
  listContent: Content[];
  period?: string;
}

export default function AccordionSyllabus({ props }: { props: Props }) {
  const { title, listContent, period = "4PM" } = props;

  return (
    <details className="border-b rounded-none border-neutral last:border-b-0 cursor-pointer syllabus">
      <summary className="collapse-title flex flex-row px-4 py-5 md:py-7 md:px-8 font-medium text-white justify-start items-center text-sm md:text-[20px] gap-3 xl:gap-4">
        <Icon
          class="text-white w-auto h-auto -ml-[3px] md:min-w-[20px] md:min-h-[20px]"
          id="ChevronDown"
          width={15}
          height={15}
          strokeWidth={"3"}
        />
        <h4 class=" w-auto">
          {title}
        </h4>
        <span class="hidden md:block ml-auto w-auto">
          {period}
        </span>
      </summary>
      <div className="md:px-8 bg-black p-4 md:py-6 cursor-default border border-x border-x-neutral border-opacity-10 last:border-0">
        <ul class="w-full flex flex-col gap-6 ">
          {listContent.map((item) => (
            <li class="flex flex-row gap-4 justify-start items-start">
              <Icon
                id="video"
                size={14}
                class="w-min-[14px] mt-[5px] xl:mt-[9px] xl:w-[20px] h-[20px]"
              >
              </Icon>
              <div class="flex flex-col w-fit">
                <a
                  href={item.link}
                  class="text-[#02f67c] text-sm md:text-[20px] hover:underline cursor-pointer"
                >
                  {item.title}
                </a>
                <span
                  class="text-xs text-white"
                  dangerouslySetInnerHTML={{ __html: item.content }}
                >
                </span>
              </div>
              <div class="hidden md:flex flex-row gap-3 ml-auto text-base text-[#A1A1AA]">
                { item.dataPublish ? (
                  <a
                    href={item.link}
                    class="hover:text-[#02f67c] hover:underline cursor-pointer"
                  >
                    {item.dataPublish}
                  </a>
                ) : null }
                <span>{item.time}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </details>
  );
}

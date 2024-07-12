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
              <div class="flex flex-col items-center justify-start mt-[5px] xl:mt-[9px]">
                <Icon
                  id="video"
                  size={14}
                  class="w-[14px] h-[14px] xl:w-[20px] xl:h-[20px]"
                />
              </div>
              <div class="flex flex-col gap-3 w-full">
                <div class="flex flex-row justify-between items-start">
                  <div class="flex flex-col gap-3 w-fit">
                    <p class="text-[#02f67c] text-xl">
                      {item.title}
                    </p>
                    <span class="text-md text-white" dangerouslySetInnerHTML={{ __html: item.content }}></span>
                  </div>
                  <div class="flex flex-row gap-3 text-base text-[#A1A1AA] items-center">
                    {item.dataPublish ? (
                      <a
                        href={item.link}
                        class="hover:text-[#02f67c] hover:underline cursor-pointer"
                      >
                        {item.dataPublish}
                      </a>
                    ) : null}
                    <span class="text-right">{item.time}</span>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </details>
  );
}


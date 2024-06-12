import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";

export interface Logo {
  src?: ImageWidget;
  /** @description text alternative */
  altText?: string;
}

export interface Props {
  /** @format rich-text */
  title?: string;
  logos?: Logo[];
}

const IMG_PLACEHODLER = Array(30).fill(0).map(() => ({
  src:
    "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/03fbcc78-ca86-4616-a59a-b8aa18331a9c",
  altText: "Logo",
}));

export default function Logos({
  title = "Event <span class='argentPixel text-[#02F67C] font-normal'>sponsors</span>",
  logos = IMG_PLACEHODLER,
}: Props) {
  const slideContent = (
    <div class="flex items-center gap-4">
      {logos?.map((logo) => {
        return (
          <Image
            class="p-[15px] object-scale-down"
            src={logo.src || ""}
            alt={logo.altText || ""}
            width={144}
            height={60}
          />
        );
      })}
    </div>
  );
  return (
    <div class="bg-black w-full px-6 md:px-8 lg:px-16 py-10 md:py-20">
      <div class="container lg:mx-auto">
        <div class="flex flex-col gap-[60px]">
          <p
            class="text-center text-[2.5rem] md:text-[3rem] leading-snug tracking-[-1.2px] md:trancking-[-1.44px] font-medium text-white"
            dangerouslySetInnerHTML={{
              __html: title,
            }}
          />
          <div class="relative w-full overflow-hidden h-11">
            <div className="before:absolute before:inset-y-0 before:left-0 before:w-[70px] lg:before:w-46 before:bg-gradient-to-l before:from-black/0 before:to-[#000000] before:z-20">
            </div>
            <div className="after:absolute after:inset-y-0 after:right-0 after:w-[70px] lg:after:w-46 after:bg-gradient-to-r after:from-black/0 after:to-[#000000] after:z-20">
            </div>
            <div class="animate-sliding absolute top-0 left-0 flex flex-nowrap h-11">
              {slideContent}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

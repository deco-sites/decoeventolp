import Image from "apps/website/components/Image.tsx";
import { useMemo } from "preact/hooks";
import { ImageWidget } from "apps/admin/widgets.ts";
import { Picture, Source } from "apps/website/components/Picture.tsx";
import { AppContext } from "site/apps/site.ts";

export interface Image {
  img: ImageWidget;
  altText?: string;
  href: string;
}

export interface Props {
  /** @format rich-text */
  title?: string;
  brands?: {
    logos?: Image[];
  };
}

const IMAGES = [
  {
    altText: "deco",
    img:
      "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/239/637e8601-6b86-4979-aa97-68013a2a60fd",
    href: "/",
  },
  {
    altText: "deco",
    img:
      "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/239/637e8601-6b86-4979-aa97-68013a2a60fd",
    href: "",
  },
];

export const loader = async (
  props: Props,
  req: Request,
  ctx: AppContext,
) => {
  const device = ctx.device;

  return {
    ...props,
    isMobile: device,
  };
};

const LogoSlider = (
  { logos }: { logos: Image[] },
) => {
  const renderLogoSlide = () => (
    <div
      className={`flex items-center z-10 gap-4`}
    >
      {logos.map((logo) => (
        <a target="_blank">
          <Image
            width={144}
            height={60}
            class="p-[15px] object-scale-down"
            src={logo.img}
            alt={logo.img}
            decoding="async"
            loading="lazy"
            fetchPriority="low"
          />
        </a>
      ))}
    </div>
  );

  return (
    <div className="relative overflow-hidden h-11 w-full">
      <div className="before:absolute before:inset-y-0 before:left-0 before:w-[60px] lg:before:w-46 before:bg-gradient-to-l before:from-black/0 before:to-black before:z-20">
      </div>
      <div className="after:absolute after:inset-y-0 after:right-0 after:w-[60px] lg:after:w-46 after:bg-gradient-to-r after:from-black/0 after:to-black after:z-20">
      </div>
      <div
        className="flex whitespace-nowrap gap-4"
        onMouseEnter={(
          e,
        ) => (e.currentTarget.style.animationPlayState = "paused")}
        onMouseLeave={(
          e,
        ) => (e.currentTarget.style.animationPlayState = "running")}
      >
        {renderLogoSlide()}
        {renderLogoSlide()}
        {renderLogoSlide()}
        {renderLogoSlide()}
        {renderLogoSlide()}
      </div>
    </div>
  );
};

function Logos({ title, brands, isMobile }: Omit<Props, "isMobile"> & {
  title?: string;
  brands?: {
    logos?: Image[];
  };
  isMobile: string;
}) {
  const listBrands = useMemo(
    () =>
      brands?.logos && brands?.logos.length > 0
        ? brands?.logos
        : Array(20).fill(null).map((_, i) => IMAGES[i % 2]) as Image[],
    [],
  );

  function Logo(element: Image) {
    return (
      <div class="flex items-center justify-center rounded-[20px] w-auto backdrop-filter backdrop-blur-22 relative">
        <a
          href={element.href}
          target="_blank"
          class="w-full h-full z-60 relative flex items-center justify-center lg:px-5 lg:py-[10px] gap-4"
        >
          <Picture>
            <Source
              media="(max-width: 767px)"
              src={element.img ?? ""}
              width={144}
              class=""
            />
            <Source
              media="(min-width: 768px)"
              src={element.img ?? ""}
              width={110}
            />
            <img
              class="object-contain w-[110px] object-scale-down"
              src={element.img ?? ""}
            />
          </Picture>
        </a>
      </div>
    );
  }

  return (
    <div class="bg-black relative z-10">
      <div class="lg:container py-10 md:py-20 px-6 md:px-8 lg:px-16">
        <div class="w-full flex flex-col gap-[60px] items-center">
          <h2
            class="text-center text-[2.5rem] md:text-[3rem] leading-snug tracking-[-1.2px] md:trancking-[-1.44px] font-medium text-white"
            dangerouslySetInnerHTML={{
              __html: title as string,
            }}
          />
          {isMobile === "desktop"
            ? (
              <div class="flex flex-wrap justify-center gap-4">
                {listBrands.map((element, index) => (
                  <Logo key={index} {...element} />
                ))}
              </div>
            )
            : (
              <div class="animate-sliding absolute top-0 left-0 flex flex-nowrap h-11">
                <LogoSlider logos={listBrands} />
              </div>
            )}
        </div>
      </div>
    </div>
  );
}

export default Logos;

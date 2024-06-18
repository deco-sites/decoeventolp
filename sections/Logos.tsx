import Image from "apps/website/components/Image.tsx";
import { useMemo } from "preact/hooks";
import { ImageWidget } from "apps/admin/widgets.ts";
import { Picture, Source } from "apps/website/components/Picture.tsx";
import { AppContext } from "site/apps/site.ts";
import SponsorMessage from "site/islands/SponsorMessage.tsx";

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
  cta?: {
    label?: string;
    href?: string;
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
      className={`flex items-center z-10 gap-8 animate-sliding`}
    >
      {logos.map((logo) => (
        <a
          class="flex items-center justify-center w-[100px]"
          target="_blank"
        >
          <Image
            width={144}
            height={57}
            class="w-full max-h-[57px] object-scale-down"
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
    <div className="relative overflow-hidden w-full">
      <div className="before:absolute before:inset-y-0 before:left-0 before:w-[60px] lg:before:w-46 before:bg-gradient-to-l before:from-black/0 before:to-black before:z-20">
      </div>
      <div className="after:absolute after:inset-y-0 after:right-0 after:w-[60px] lg:after:w-46 after:bg-gradient-to-r after:from-black/0 after:to-black after:z-20">
      </div>
      <div
        className="flex whitespace-nowrap gap-8"
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

function Logos({ title, brands, cta, isMobile }: Omit<Props, "isMobile"> & {
  title?: string;
  brands?: {
    logos?: Image[];
  };
  cta?: {
    label?: string;
    href?: string;
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
          class="w-full h-full z-60 relative flex items-center justify-center"
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
              class="max-h-[57px] object-scale-down"
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
              <div class="flex flex-wrap justify-center gap-16 lg:max-h-[57px]">
                {listBrands.map((element, index) => (
                  <Logo key={index} {...element} />
                ))}
              </div>
            )
            : <LogoSlider logos={listBrands} />}
          <SponsorMessage />
          <button
            id="sponsorMessagePopup"
            href={cta?.href}
            class="w-[max-content] z-30 items-center border border-[#113032] bg-[#02F67C] justify-center tracking-[-0.48px] flex px-3 py-2 argentPixel font-bold text-[#113032] text-[16px] leading-[120%] hover:opacity-80"
          >
            {cta?.label}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Logos;

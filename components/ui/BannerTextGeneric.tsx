import { Picture, Source } from "apps/website/components/Picture.tsx";
import Icon, { AvailableIcons } from "site/components/ui/Icon.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";
import HTMLRenderer from "deco-sites/std/components/HTMLRenderer.tsx";
import type { HTML } from "deco-sites/std/components/HTMLRenderer.tsx";

export interface TextProps {
  icon?: ImageWidget
  title?: string
  description?: string
}

export interface BannerProps {
  /**  @title Image Mobile */
  mobile?: ImageWidget;
  /**  @title Image Desktop */
  desktop?: ImageWidget;

  textTopics?: TextProps[]
  textDescription?: HTML
}

export interface CTAProps {
  href: string,
  text: string,
  label?: AvailableIcons
  variants?: 'Normal' | 'Reverse' | 'Border none', 
  hide?: {
    label?: boolean
  }
}

export interface BannerTextGenericProps {
  title: string;

  /** @format html */
  description?: string;

  ctaList?: CTAProps[]

  banners?: BannerProps

  /**  @title Hide Components */
  hide: {
    cta: boolean,
    label: boolean
  }

  layout?: {
    alignment?: 'Row' | 'Column' | 'Row reverse' | 'Column reverse',
    image?: 'Background' | 'Front',
    variants?: { 
      section?: 'Normal' | 'Reverse'
    }
  }
}



export default function BannerTextGeneric(
  { title, description, ctaList, layout, hide = { cta: false, label: false }, banners = [] }: BannerTextGenericProps,
  ) {

    const ALIGNMENT_LAST_CHILD = {
      'Row': 'col-start-2 row-start-1',
      'Column': '',
      'Row reverse': banners?.desktop ? 'col-start-1 row-start-1' : '',
      'Column reverse': ''
    }

    const ALIGNMENT_FIRST_CHILD = {
      'Row': 'col-start-1 row-start-1',
      'Column': '',
      'Row reverse': banners?.desktop ? 'col-start-2 row-start-1' : 'col-start-1 row-start-1',
      'Column reverse': ''
    }

  const BACKGROUND_CTA = {
    'Reverse': 'bg-[#FFF] text-[#000] border border-[#C9CFCF] hover:bg-[#C9CFCF] hover:border-[#C9CFCF]',
    'Normal': 'bg-[#000] text-[#FFF] border border-[#181212] hover:bg-[#FFF] hover:text-[#181212]',
    'Border none': `bg-transparent hover:bg-transparent px-0 ${layout?.variants?.section === 'Reverse' ? 'text-[#FFF] hover:underline' : 'text-[#181212] hover:underline'} border-none`
  }

  const ALIGNMENT_CONTAINER = {
    'Row': banners?.desktop ? 'grid grid-cols-2 grid-rows-1' : 'grid grid-cols-1 grid-rows-1',
    'Column': 'flex flex-col items-center',
    'Row reverse': banners?.desktop ? 'grid grid-cols-2 grid-rows-1' : 'grid grid-cols-1 grid-rows-1',
    'Column reverse': 'flex flex-col-reverse items-center'
  }

  const cta = ({ href, text, label = 'ArrowLeft', hide, variants }: CTAProps) => hide?.cta ? <></> : (
    <a href={href ?? "#"} class={`btn normal-case rounded-none text-base px-6 py-3  ${!hide?.label ? 'pr-3' : 'pr-4'} transition-colors duration-200 flex items-center gap-2 ${BACKGROUND_CTA[variants ?? "Normal"]}`}>
      <span class="h-full flex justify-center items-center">
        {text}
      </span>
      <span class="h-full flex justify-center items-center">
        { !hide?.label ? <Icon id={label ?? ''} size={30} /> : '' }
      </span>
    </a>
  )
  const textContainer = <>
    <div class={`flex gap-4
      ${layout?.alignment === 'Column reverse' ? 'flex flex-col md:flex-row justify-stretch md:justify-around md:items-center gap-12' : 'flex flex-col gap-12'}
    `}>
        <p class={`font-bold text-[40px] md:text-[48px] w-full
          ${layout?.variants?.section === 'Reverse' ? 'text-[#FFFFFF]' : 'text-[#181212]'} 
          ${layout?.alignment === 'Column' ? 'text-center' : 'text-center md:text-start'}
        `}>
          {title}
        </p>
      <div class={`flex flex-col gap-6 md:gap-8 w-full ${layout?.alignment === 'Column' ? 'md:items-center' : 'items-center md:items-start'}`}>
        <div class={`text-base md:text-[18px] md:leading-8 text-white flex flex-row items-center justify-center gap-2
          ${layout?.variants?.section === 'Reverse' ? 'text-[#FFFFFF]' : 'text-[#181212]'} 
          ${layout?.alignment === 'Column' ? 'text-center' : 'text-center md:text-start'}
        `}>
          {description && (
            <p className="border border-base-content rounded-3xl px-4 py-2 w-min" dangerouslySetInnerHTML={{ __html: description }} />
          )}
        </div>
        <div class={`${hide?.cta ? 'hidden' : 'flex'} items-center gap-4`}>
          { ctaList?.map((itemBtn) => cta(itemBtn)) }
        </div>
      </div>
    </div>
  </>

  return (
    <section class={`${ layout?.variants?.section === 'Reverse' ? 'bg-[#0A2121]' : 'bg-[#FFF]' } w-full py-10 md:py-24`}>
      <div
        class={`relative z-0 ${layout?.image === 'Background' && banners?.desktop ? 'h-[900px] flex justify-center items-center' : 'h-full'}`}>
        

        <div class={`xl:container xl:mx-auto mx-5 md:mx-10 gap-12 md:gap-16 items-center justify-center`}>
          <div />
          <div class="w-full text-center">
            {textContainer}
          </div>
          <div class={`w-full ${ALIGNMENT_LAST_CHILD[layout?.alignment ?? "Column"]}`}>
            { layout?.image === 'Background' ? null : banners?.desktop ? (
              <div>
                <Picture>
                  <Source
                    media="(max-width: 767px)"
                    src={banners?.mobile ?? ""}
                    width={181.5}
                    height={174.75}
                  />
                  <Source
                    media="(min-width: 768px)"
                    src={banners?.desktop ?? ""}
                    width={228}
                    height={219.5}
                  />
                  <img
                    class="w-full object-cover"
                    sizes="(max-width: 640px) 100vw, 30vw"
                    src={banners?.mobile ?? ""}
                    alt={banners?.textTopics?.[0]?.title ?? ""}
                    decoding="async"
                    loading="lazy"
                  />
                </Picture>
              </div>
              ) : null}
              <div className="flex flex-col">
                { banners?.textTopics?.length ? (
                <div class="flex flex-col bg-[#f2f2f2] items-start gap-4 px-4 py-8 md:px-6 md:py-10">
                  {
                    banners?.textTopics?.map((item) => (
                      <>
                        { item?.icon && <Icon id={item.icon} size={24} /> }
                        <div class="flex justify-start">
                          <h1 class="text-[#0A2121] font-semibold text-xl lg:text-2xl">
                            {item?.title}
                          </h1>
                        </div>
                        <div class="flex flex-col items-start w-full text-[#0A2121]">
                          {item?.description && (
                            <p class="md:leading-8">{item?.description}</p>
                          )}
                        </div>
                      </>
                    ))
                  }
                  </div>
                ) : null }
                { banners?.textDescription ? (
                  <div>
                    <HTMLRenderer html={banners?.textDescription} />
                  </div>
                ) : null }
              </div>
              
          </div>
        </div>
      </div>
    </section>
  );
}

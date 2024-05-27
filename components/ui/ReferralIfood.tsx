import { ImageWidget } from "apps/admin/widgets.ts";
import HTMLRenderer, { HTML } from "deco-sites/std/components/HTMLRenderer.tsx";
import Image from "apps/website/components/Image.tsx";
import { asset } from "$fresh/runtime.ts";

export interface CTA {
  href: string;
  label: string;
  icon?: ImageWidget;
  color: "green" | "none";
}

export interface ReferralIfoodProps {
  image: ImageWidget;
  title: HTML;
  description: HTML;
  cta: CTA[];
}

const BTN_COLORS = {
  green: 'hover:bg-transparent md:hover:border md:hover:text-[#fff] border-[#02F67C] border bg-[#02F67C] text-[#0A2121] font-semibold',
  none: 'bg-[#113032] hover:bg-transparent md:hover:border-[#02F67C] md:hover:border md:hover:text-[#fff] border-[transparent] border text-white'
}

export default function ReferralIfood({ image, title, description, cta }: ReferralIfoodProps) {
  return (
    <section className="w-full bg-black px-4 py-5 md:py-[80px] lg:px-24">
      <div className="xl:container xl:mx-auto px-4 lg:px-0 flex justify-center rounded-[24px] relative z-1 black-green relative">
        <div className="flex flex-col-reverse items-center md:grid md:grid-cols-2 lg:grid-cols-[1fr_400px] gap-6 px-2 md:px-6 pt-16 pb-20">
          <div className="flex flex-col items-center md:items-start gap-4 md:gap-6">
            <div className="text-[48px] md:text-[80px]">
              <HTMLRenderer class="text-[48px] md:text-[80px]" html={title} />
            </div>
            <div className="md:max-w-[800px]">
              <HTMLRenderer html={description} />
            </div>
            <div className="black-green lg:translate-y-[235px]" />
            <div className="flex flex-col items-center md:flex-row gap-4">
              {cta?.map(({ color = 'green', href = '', label = '', icon }) => (
                <a
                  className={`flex items-center justify-center text-center w-min whitespace-nowrap h-[50px] gap-2 font-medium text-lg px-8 py-2 rounded-full md:transition md:ease-in-out md:duration-300 font-semibold
                  ${BTN_COLORS[color]}
                  `}
                  href={href}
                >
                  {icon ? <img src={icon} alt={'check'} width={20} /> : null}
                  {label}
                </a>
              ))}
            </div>
          </div>
          {/* <div className="flex max-w-[200px] md:max-w-auto">
            <Image src={image} alt="Ifood" width={300} height={160} />
          </div> */}
          <img
            className="absolute right-0 bottom-0 z-[1] w-[184px] h-[238px] md:w-[390px] md:h-[505px]"
            src={asset('/image/fundoReferral.png')}
            alt={'Fundo macbook'}
            // width={390}
            // height={505}
          />
          {/* <Image
            className="block md:hidden absolute right-0 bottom-0 z-[1]"
            src={asset('/image/fundoReferral.png')}
            alt={'Fundo macbook'}
            width={195}
            height={252}
          /> */}
        </div>
      </div>
    </section>
  )
}

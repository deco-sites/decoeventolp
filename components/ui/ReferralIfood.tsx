import { ImageWidget } from "apps/admin/widgets.ts";
import HTMLRenderer, { HTML } from "deco-sites/std/components/HTMLRenderer.tsx";
import Image from "apps/website/components/Image.tsx";

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

export default function ReferralIfood({ image, title, description, cta }: ReferralIfoodProps) {
  return (
    <section className="w-full bg-black px-4 py-10 md:pb-28 md:pt-28 lg:px-24">
      <div className="xl:container px-4 lg:px-0 lg:mx-[120px] xl:mx-auto flex justify-center rounded-[24px] relative z-1 black-green">
        <div className="flex flex-col-reverse items-center md:grid grid-cols-[1fr_200px] gap-6 px-2 md:px-6 pt-16 pb-20">
          <div className="flex flex-col items-center md:items-start gap-4 md:gap-6">
            <div className="text-[48px] md:text-[80px]">
              <HTMLRenderer class="text-[48px] md:text-[80px]" html={title} />
            </div>
            <div className="md:max-w-[800px]">
              <HTMLRenderer html={description} />
            </div>
            <div className="black-green lg:translate-y-[235px]" />
            <div className="flex flex-col md:flex-row gap-4">
              {cta?.map(({ color = 'none', href = '', label = '', icon }) => (
                <a
                  className={`flex items-center gap-2 font-medium text-lg px-8 py-3 rounded-full md:transition md:ease-in-out md:duration-300 font-semibold
                  ${color === 'green' ? 'bg-[#02F67C] text-black' : 'bg-transparent text-white'}
                  `}
                  href={href}
                >
                  {icon ? <img src={icon} alt={'check'} width={20} /> : null}
                  {label}
                </a>
              ))}
            </div>
          </div>
          <div className="flex max-w-[200px] md:max-w-auto">
            <Image src={image} alt="Ifood" width={300} height={160} />
          </div>
        </div>
      </div>
    </section>
  )
}

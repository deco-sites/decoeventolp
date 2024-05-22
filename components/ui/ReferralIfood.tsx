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
    <section className="w-full bg-black">
      <div className="xl:container mx-4 lg:mx-[120px] xl:mx-auto flex justify-center rounded-[24px] relative z-1">
        <div className="flex flex-col-reverse items-center md:grid grid-cols-[1fr_200px]">
          <div className="flex flex-col items-center md:items-start gap-4 md:gap-6">
            <div>
              <HTMLRenderer html={title} />
            </div>
            <div>
              <HTMLRenderer html={description} />
            </div>
            <div className="black-green" />
            <div className="flex gap-4">
              {cta?.map(({ color = 'none', href = '', label = '', icon = '' }) => (
                <a
                  className={`flex items-center font-medium text-lg px-8 py-3 rounded-full md:transition md:ease-in-out md:duration-300 font-semibold
                  ${color === 'green' ? 'bg-[#02F67C] text-black' : 'bg-black text-white'}
                  `}
                  href={href}
                >
                  {icon ? <img src={icon} alt={'check'} width={20} /> : null}
                  {label}
                </a>
              ))}
            </div>
          </div>
          <div className="flex">
            <Image src={image} alt="Ifood" width={300} height={160} />
          </div>
        </div>
      </div>
    </section>
  )
}

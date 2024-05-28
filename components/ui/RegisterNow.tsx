import { useMemo } from "preact/hooks";

export interface Props {
  title: string;
  href?: string;
}

export default function RegisterNow(props: Props) {
  const {
    title,
  } = props;
  const list = useMemo(
    () =>
      title ? Array(50).fill(null).map((_, i) => title) : Array(50).fill(null).map((_, i) => 'REGISTER NOW'),
    [],
  );

  return (
    <div class="w-full bg-black">
      <div className="bg-[#02F67C]">
        <div class="xl:container xl:mx-auto mx-5 md:mx-10 flex flex-col gap-4 lg:gap-8 text-[#000]">
      </div>
        <div class="w-full text-center items-center">
          <div class="overflow-hidden py-2">
            <a href={props?.href ?? ''}>
              <ul
                class={`grid grid-para-faixa w-full animate-walk items-center gap-4`}
                style={`animation-delay: 300ms`}
              >
                {list.map((text: string, index: number) => (
                  <li className="w-[160px] text-black font-semibold list-disc">{text}</li>
                ))}
              </ul>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

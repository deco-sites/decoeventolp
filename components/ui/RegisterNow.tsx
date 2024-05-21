import { useMemo } from "preact/hooks";

export interface Props {
  title: string;
}

export default function RegisterNow(props: Props) {
  const {
    title,
  } = props;
  const list = useMemo(
    () =>
      title ? Array(20).fill(null).map((_, i) => title) : Array(20).fill(null).map((_, i) => 'REGISTER NOW'),
    [],
  );

  return (
    <div class="w-full bg-[#0A2121] py-5 md:py-10">
      <div class="xl:container xl:mx-auto mx-5 md:mx-10 flex flex-col gap-4 lg:gap-8">
        <div class="w-full text-center items-center">
          <div class="overflow-hidden pt-2">
            <div
              class={`flex flex-row flex-nowrap w-full animate-walk items-center gap-4`}
              style={`animation-delay: 300ms`}
            >
              {list.map((text: string, index: number) => (
                <h4>{text}</h4>
              ))}
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

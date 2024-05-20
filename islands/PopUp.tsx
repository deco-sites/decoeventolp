import Component from "site/components/ui/PopUp.tsx";
import type { Props } from "site/components/ui/PopUp.tsx";

export default function Island(
  { buttonLabel, items, theme = "dark" }: Omit<Props, "@Page"> & {
    theme?: "dark" | "ligth";
  },
) {
  return <Component buttonLabel={buttonLabel} items={items} theme={theme} />;
}

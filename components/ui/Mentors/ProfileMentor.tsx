import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";
import Icon from "site/components/ui/Icon.tsx";

/**
 * @titleBy type
 */

interface Contact {
  type: "Linkedin" | "Git-hub" | "Twitter";
  href: string;
}

/**
 * @titleBy nameMentor
 */
export interface Props {
  image: {
    src: ImageWidget;
    alt: string;
  };
  nameMentor: string;
  profession: string;
  /**
   * @format html
   */
  content: string;
  contacts: Contact[];
}

export default function ProfileMentor({ props }: { props: Props }) {
  const { image, nameMentor, profession, content, contacts } = props;

  return (
    <div class="w-full flex flex-col gap-3 md:w-1/3">
      <Image
        src={image.src}
        alt={image.alt}
        width={200}
        height={200}
        class="xl:max-h-[260px] 2xl:max-h-[330px] object-cover rounded-3xl bordeer border-[5px] border-[#113032] md:w-full md:h-auto"
      >
      </Image>
      <div class="flex flex-col gap-2">
        <h4 class="text-2xl text-[#02f67c] md:text-[1.4rem] lg:text-2xl">
          {nameMentor}
        </h4>
        <h5 class="text-xl text-[#A1A1AA]">{profession}</h5>
      </div>
      <span
        class="text-white text-base"
        dangerouslySetInnerHTML={{ __html: content }}
      >
      </span>
      <div class="flex flex-row gap-6">
        {contacts.map((contact) => (
          <a
            href={contact.href}
            class="text-[#02F67C] duration-300 ease-in-out"
          >
            <Icon id={contact.type} size={32}></Icon>
          </a>
        ))}
      </div>
    </div>
  );
}

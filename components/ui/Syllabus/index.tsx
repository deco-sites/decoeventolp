import HTMLRenderer from "deco-sites/std/components/HTMLRenderer.tsx";
import { HTML } from "site/apps/site.ts";
import type { Props as Accordion } from "./AccordionSyllabus.tsx";
import AccordionSyllabus from "./AccordionSyllabus.tsx";

export interface Props {
  title: HTML;
  headsupCard?: {
    title?: string;
    text?: HTML;
  };
  accordions: Accordion[];
}

const BASE_PROPS = {
  accordions: [
    {
      listContent: [
        {
          labelMobule: "Modules",
          title: "Modern Web Tech",
          content: "<p>Dive into server-side rendering and edge computing.</p>",
          time: 1,
        },
        {
          labelMobule: "Modules",
          title: "Design & Development Fusion",
          content:
            "<p>Experience the synergy of design and code with 'Figma meets VS Code'.</p>",
          time: 1,
        },
        {
          labelMobule: "Modules",
          title: "Essential Tools & Languages",
          content: "<p>Master JSX, Tailwind CSS, Preact, and TypeScript.</p>",
          time: 1,
        },
        {
          labelMobule: "Modules",
          title: "Dynamic Web Features",
          content:
            "<p>Learn to create interactive web components with Htmx.</p>",
          time: 1,
        },
        {
          labelMobule: "Modules",
          title: "Advanced Frameworks",
          content: "<p>Explore the capabilities of Deno/Kubernetes.</p>",
          time: 1,
        },
        {
          labelMobule: "Modules",
          title: "Efficient Web Updates",
          content: "<p>Understand SWR and ISR for up-to-date web content.</p>",
          time: 1,
        },
      ],
      title: "deco’s Web Builder and Framework",
      "children": [
        {
          title: "deco’s Web Builder and Framework",
          "subtitle": "Modern Web Tech",
        },
      ],
    },
    {
      listContent: [
        {
          labelMobule: "Modules",
          title: "Modern Web Tech",
          content: "<p>Dive into server-side rendering and edge computing.</p>",
          time: 1,
        },
        {
          labelMobule: "Modules",
          title: "Design & Development Fusion",
          content:
            "<p>Experience the synergy of design and code with 'Figma meets VS Code'.</p>",
          time: 1,
        },
        {
          labelMobule: "Modules",
          title: "Essential Tools & Languages",
          content: "<p>Master JSX, Tailwind CSS, Preact, and TypeScript.</p>",
          time: 1,
        },
        {
          labelMobule: "Modules",
          title: "Dynamic Web Features",
          content:
            "<p>Learn to create interactive web components with Htmx.</p>",
          time: 1,
        },
        {
          labelMobule: "Modules",
          title: "Advanced Frameworks",
          content: "<p>Explore the capabilities of Deno/Kubernetes.</p>",
          time: 1,
        },
        {
          labelMobule: "Modules",
          title: "Efficient Web Updates",
          content: "<p>Understand SWR and ISR for up-to-date web content.</p>",
          time: 1,
        },
      ],
      title: "High-Performance Digital Experience",
      "children": [
        {
          title: "deco’s Web Builder and Framework",
          "subtitle": "Modern Web Tech",
        },
      ],
    },
    {
      listContent: [
        {
          labelMobule: "Modules",
          title: "Modern Web Tech",
          content: "<p>Dive into server-side rendering and edge computing.</p>",
          time: 1,
        },
        {
          labelMobule: "Modules",
          title: "Design & Development Fusion",
          content:
            "<p>Experience the synergy of design and code with 'Figma meets VS Code'.</p>",
          time: 1,
        },
        {
          labelMobule: "Modules",
          title: "Essential Tools & Languages",
          content: "<p>Master JSX, Tailwind CSS, Preact, and TypeScript.</p>",
          time: 1,
        },
        {
          labelMobule: "Modules",
          title: "Dynamic Web Features",
          content:
            "<p>Learn to create interactive web components with Htmx.</p>",
          time: 1,
        },
        {
          labelMobule: "Modules",
          title: "Advanced Frameworks",
          content: "<p>Explore the capabilities of Deno/Kubernetes.</p>",
          time: 1,
        },
        {
          labelMobule: "Modules",
          title: "Efficient Web Updates",
          content: "<p>Understand SWR and ISR for up-to-date web content.</p>",
          time: 1,
        },
      ],
      title: "Real-life Flawless Implementation",
      children: [
        {
          title: "deco’s Web Builder and Framework",
          subtitle: "Modern Web Tech",
        },
      ],
    },
  ],
  title: "What you will learn:",
};

export default function Syllabus({ props }: { props: Props }) {
  const { title, headsupCard, accordions } = { ...BASE_PROPS, ...props };

  return (
    <div class="w-full h-full bg-black py-10 md:py-[80px] pt-[80px] md:pt-[120px]">
      <div class="flex w-full flex-col justify-center px-6 gap-10 md:gap-[80px] container">
        <h2 class="text-white text-[40px] md:text-[48px] text-center line-height-115">
          <HTMLRenderer html={title} />
        </h2>
        {headsupCard && (
        <div class="flex flex-col sm:flex-row gap-6 md:gap-16 px-6 py-8 max-w-[698px] bg-[#0D1717] rounded-lg text-white leading-tight text-[12px] md:text-[18px] mx-auto">
          <h3 class="text-[14px] md:text-[24px] font-semibold">
            {headsupCard?.title}
          </h3>
          <HTMLRenderer html={headsupCard?.text ?? ''} />
        </div>
        )}
        <div class="flex flex-col w-full rounded-xl border-neutral border bg-white bg-opacity-5 overflow-hidden">
          {accordions.map((accordion) => (
            <AccordionSyllabus
              props={accordion}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

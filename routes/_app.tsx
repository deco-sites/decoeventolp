import { asset, Head } from "$fresh/runtime.ts";
import { defineApp } from "$fresh/server.ts";
import { Context } from "deco/deco.ts";
import Theme from "../sections/Theme/Theme.tsx";

export default defineApp(async (_req, ctx) => {
  const revision = await Context.active().release?.revision();

  return (
    <>
      {/* Include default fonts and css vars */}
      <Theme colorScheme="any" />

      {/* Include Icons and manifest */}
      <Head>
        {/* Enable View Transitions API */}
        <meta name="view-transition" content="same-origin" />

        {/* Tailwind v3 CSS file */}
        <link
          href={asset(`/styles.css?revision=${revision}`)}
          rel="stylesheet"
        />

        {/* Web Manifest */}
        <link rel="manifest" href={asset("/site.webmanifest")} />

        <link
          rel="preload"
          type="text/css"
          href={asset("/fonts/ArgentPixelCF-Italic.woff")}
        />
        <link
          rel="preload"
          type="text/css"
          href={asset("/fonts/ArgentPixelCF-Italic2.woff")}
        />
        <link
          rel="preload"
          type="text/css"
          href={asset("/fonts/ArgentPixelCF-Regular.woff")}
        />
        <link
          rel="preload"
          type="text/css"
          href={asset("/fonts/ArgentPixelCF-Regular2.woff")}
        />
      </Head>
      <style
        type="text/css"
        dangerouslySetInnerHTML={{
          __html: `
          @font-face {
            font-family: 'ArgentPixelCF';
            font-style: normal;
            font-weight: 400, 600, 700;
            font-display: swap;
            src: url(${asset('/fonts/ArgentPixelCF-Regular.woff')}) format('woff');
          }
          @font-face {
            font-family: 'ArgentPixelCF2';
            font-style: italic;
            font-weight: 400, 600, 700;
            font-display: swap;
            src: url(${asset('/fonts/ArgentPixelCF-Regular2.woff')}) format('woff');
          }

          @font-face {
            font-family: 'ArgentPixelCF2';
            font-style: italic;
            font-weight: 400, 600, 700;
            font-display: swap;
            src: url(${asset('/fonts/ArgentPixelCF-Italic.woff')}) format('woff');
          }
          @font-face {
            font-family: 'ArgentPixelCF';
            font-style: italic;
            font-weight: 400, 600, 700;
            font-display: swap;
            src: url(${asset('/fonts/ArgentPixelCF-Italic2.woff')}) format('woff');
          }
          `}
        }
      />
      {/* Rest of Preact tree */}
      <ctx.Component />
    </>
  );
});

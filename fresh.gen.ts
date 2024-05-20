// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_app from "./routes/_app.tsx";
import * as $Header from "./islands/Header.tsx";
import * as $NRF_BackgroundGrid from "./islands/NRF/BackgroundGrid.tsx";
import * as $NRF_Grid from "./islands/NRF/Grid.tsx";
import * as $NRF_Header from "./islands/NRF/Header.tsx";
import * as $SliderJS from "./islands/SliderJS.tsx";
import { type Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_app.tsx": $_app,
  },
  islands: {
    "./islands/Header.tsx": $Header,
    "./islands/NRF/BackgroundGrid.tsx": $NRF_BackgroundGrid,
    "./islands/NRF/Grid.tsx": $NRF_Grid,
    "./islands/NRF/Header.tsx": $NRF_Header,
    "./islands/SliderJS.tsx": $SliderJS,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;

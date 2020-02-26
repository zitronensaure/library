import React from "react";
import { withInfo } from "@storybook/addon-info";

import Button from ".";

export default {
    title: "Design System|Button",
    component: Button,
    decorators: [withInfo],
    parameters: {
        info: {
            text: `
      The BaseMap component renders a Leaflet map with overlays and other ad-hoc markers
      that are declared as child elements of the BaseMap element.
      
      Overlays are groups of similar React-Leaflet markers, e.g. vehicle location markers, bus stop markers, etc.
      Overlays are automatically added to the overlay control displayed by the BaseMap. The user uses that control to turn overlays on or off.
      See the [Two Overlays From TriMet Transit Components](./?path=/story/basemap--with-two-overlays-from-trimet-transit-components) example for more information on overlays.
      `
        }
    }
};

export const primary = () => <Button>{"Button"}</Button>;

export const secondary = () => <Button variant="secondary">{"Button"}</Button>;

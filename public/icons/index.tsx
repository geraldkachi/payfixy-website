import * as React from "react";
import { } from "react";
import { SvgIconProps } from "./icon.types";
import IconMarkup from "./defaultMarkup";

export const Payfixy = (props: SvgIconProps) => (
  <IconMarkup {...props}>
    
  </IconMarkup>
);

export const Menu = (props: SvgIconProps) => (
  <IconMarkup {...props}>
    <line
      x1="0.75"
      y1="1.25"
      x2="19.25"
      y2="1.25"
      stroke="#0E2D52"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <line
      x1="0.75"
      y1="8.25"
      x2="19.25"
      y2="8.25"
      stroke="#0E2D52"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </IconMarkup>
);

export const XCancel = (props: SvgIconProps) => (
  <IconMarkup {...props}>
    <path d="M19 5L5 19M5 5L19 19" stroke="#0E2D52" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </IconMarkup>
);

import { SvgIconProps } from "./icon.types";
import defaultIcoAttributes from "./icon.types";

const IconMarkup = (props: SvgIconProps) => {
  return (
    <svg
      {...defaultIcoAttributes}
      width={props?.size ?? 24}
      height={props?.size ?? 24}
      fill={props?.fill ?? "none"}
      stroke={props?.color ?? "#000"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={props?.strokeWidth ?? 2}
      className={(props?.className)}
      ref={props?.ref}
      {...props}
    >
      {props?.children}
    </svg>
  );
};

export default IconMarkup;

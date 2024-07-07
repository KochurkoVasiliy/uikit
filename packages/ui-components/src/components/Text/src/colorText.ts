import { block } from "../../../utils";

const b = block("color-text");

export const COLORS = [
    "primary",
    "secondary",
    "hint",
    "primary-light",
    "secondary-light",
    "hint-light",
    "primary-dark",
    "secondary-dark",
    "hint-dark",
    "primary-inverted",
    "secondary-inverted",
    "hint-inverted",
    "accent",
    "accent-heavy",
    "negative",
    "negative-heavy",
] as const;

export interface ColorTextProps {
    color?: (typeof COLORS)[number];
}

export const colorText = ({ color }: ColorTextProps, className?: string) => b({ color }, className);

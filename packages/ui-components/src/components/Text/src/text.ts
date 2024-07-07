import { block } from "../../../utils/bemClassName";
const b = block("text");

export const VARIANTS = [
    "display-4",
    "display-3",
    "display-2",
    "display-1",
    "header-3",
    "header-2",
    "header-1",
    "title-3",
    "title-2",
    "title-1",
    "body-3",
    "body-2",
    "body-1",
    "caption-2",
    "caption-1",
] as const;

export interface TextBaseProps {
    variant?: (typeof VARIANTS)[number] | "inherit";
    ellipsis?: boolean;
    ellipsisLines?: boolean;
    whiteSpace?: "nowrap" | "break-spaces";
    wordBreak?: "break-all" | "break-word";
}

export const text = (
    { variant = "body-1", ellipsis, ellipsisLines, whiteSpace, wordBreak }: TextProps,
    className?: string,
) =>
    b(
        {
            variant,
            ellipsis,
            ws: whiteSpace,
            wb: wordBreak,
            "ellipsis-lines": ellipsisLines,
        },
        className,
    );

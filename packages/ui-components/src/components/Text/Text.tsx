import React from "react";

import type { DOMProps, TestingProps } from "../../utils";

import { type ColorTextProps, colorText } from "./src/colorText";
import { type TextBaseProps, text } from "./src/text";

export interface TextProps<T extends React.ElementType = "span">
    extends Omit<TextBaseProps, "ellipsisLines">,
        ColorTextProps,
        TestingProps,
        DOMProps {
    as?: T;
    ellipsisLines?: number;
}

type TextRef<T extends React.ElementType> = React.ComponentPropsWithRef<T>["ref"];

type TextPropsWithTypedAttributes<T extends React.ElementType> = TextProps<T> &
    Omit<React.ComponentPropsWithRef<T>, keyof TextProps<T>>;

export const Text = React.forwardRef(function Text<C extends React.ElementType = "span">(
    {
        as,
        children,
        variant,
        className,
        ellipsis,
        color,
        whiteSpace,
        wordBreak,
        ellipsisLines,
        style: outerStyle,
        testId,
        ...rest
    }: TextPropsWithTypedAttributes<C>,
    ref?: TextRef<C>,
) {
    const Tag: React.ElementType = as || "span";

    const style: React.CSSProperties = {
        ...outerStyle,
    };

    if (typeof ellipsisLines === "number") {
        style.WebkitLineClamp = ellipsisLines;
    }

    return (
        <Tag
            ref={ref}
            className={text(
                {
                    variant,
                    ellipsis,
                    whiteSpace,
                    wordBreak,
                    ellipsisLines: typeof ellipsisLines === "number",
                },
                color ? colorText({ color }, className) : className,
            )}
            style={style}
            testId={testId}
            {...rest}
        >
            {children}
        </Tag>
    );
}) as (<C extends React.ElementType = "span">({
    ref,
    ...props
}: TextPropsWithTypedAttributes<C> & { ref?: TextRef<C> }) => React.ReactElement) & { displayName: string };

Text.displayName = "Text";

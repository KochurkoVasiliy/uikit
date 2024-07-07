import { withNaming } from "@bem-react/classname";

export type ClassNameMods = Record<string, boolean | undefined>;

export const NAMESPACE = "ui-";
export const cd = withNaming({ e: "__", m: "_" });
export const block = withNaming({ n: NAMESPACE, e: "__", m: "_" });

export type ClassNameBlock = ReturnType<typeof cd>;

export const modsClassName = (className: string) => {
    return className.split(/\s(.*)/)[1];
};

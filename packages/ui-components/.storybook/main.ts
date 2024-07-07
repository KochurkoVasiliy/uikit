import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
    stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
    docs: {
        defaultName: "Docs",
    },
    addons: [
        "@storybook/preset-scss",
        "@storybook/addon-links",
        { name: "@storybook/addon-essentials", options: { backgrounds: false } },
        "@storybook/addon-interactions",
        {
            name: "@storybook/addon-storysource",
            options: {
                loaderOptions: {
                    injectStoryParameters: false,
                },
            },
        },
    ],
    framework: {
        name: "@storybook/react-vite",
        options: {},
    },
    typescript: {
        check: false,
        reactDocgen: "react-docgen-typescript",
    },
};
export default config;

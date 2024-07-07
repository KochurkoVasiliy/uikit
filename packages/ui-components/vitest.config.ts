import { defineConfig } from "vitest/config";

export default defineConfig({
    test: {
        globals: true,
        environment: "jsdom",
        setupFiles: ["<rootDir>/test-utils/setup-tests.ts", "<rootDir>/test-utils/setup-tests-after.ts"],
        include: ["**/*.test.[jt]s?(x)"],
        exclude: ["**/.visual.*"],
        css: false,
        coverage: {
            provider: "istanbul",
            reporter: ["text", "lcov"],
            reportsDirectory: "./coverage",
            include: ["src/**/*.{ts,tsx,js,jsx}"],
            exclude: ["src/demo/**/*", "**/__stories__/**/*", "**/*/*.stories.{ts,tsx}"],
        },
        alias: {
            "\\.(css|less|scss|sass)$": "jest-transform-css",
        },
        transformMode: {
            web: [/\.[jt]sx?$/],
        },
    },
});

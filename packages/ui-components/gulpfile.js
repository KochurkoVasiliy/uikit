import path from "path";

import { dest, done, parallel, series, src, task } from "gulp";
import sass from "gulp-dart-sass";
import replace from "gulp-replace";
import ts from "gulp-typescript";
import rimrafSync from "rimraf";

const BUILD_DIR = path.resolve("build");

const srcTsCompile = [
    "!src/**/__snapshots__/**/*",
    "!src/**/__mocks__/**/*",
    "!src/stories/**/*",
    "!src/**/__stories__/**/*",
    "!src/**/*.test.{ts,tsx}",
    "!src/**/__tests__/**/*",
    "!src/demo/**/*",
    "src/**/*.{ts,tsx}",
];

task("clean", () => {
    rimrafSync("src/styles/**/*.css", { glob: true });
    rimrafSync(BUILD_DIR);
    done();
});

const compileTypescript = (modules = false) => {
    const typescriptProject = ts.createProject("tsconfig.json", {
        declaration: true,
        module: modules ? "esnext" : "commonjs",
        ...(modules ? undefined : { verbatimModuleSyntax: false }),
    });

    return src(srcTsCompile)
        .pipe(replace(/(import.+)\.scss/g, "$1.css"))
        .pipe(typescriptProject())
        .pipe(dest(path.resolve(BUILD_DIR, modules ? "esm" : "cjs")));
};

task("build:cjs", () => compileTypescript());
task("build:esm", () => compileTypescript(true));

task("build:styles", () => {
    return src(["src/styles/styles.scss", "src/styles/fonts.scss"])
        .pipe(sass().on("error", sass.logError))
        .pipe(dest("styles"));
});

task("build:styles.components", () => {
    return src(["src/components/**/*.scss", "!src/components/**/__stories__/**/*"])
        .pipe(sass().on("error", sass.logError))
        .pipe(dest(path.resolve(BUILD_DIR, "esm", "components")))
        .pipe(dest(path.resolve(BUILD_DIR, "cjs", "components")));
});

task(
    "build:all",
    series("clean", parallel(["build:esm", "build:cjs"]), parallel(["build:styles", "build:styles.components"])),
);

task("default", series("build:all"));

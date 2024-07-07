import { addons, types, useGlobals, type API } from "@storybook/manager-api";
import React from "react";

const ADDON_ID = "ui-theme-addon";
const TOOL_ID = `${ADDON_ID}-theme`;

addons.register(ADDON_ID, (api) => {
    addons.add(TOOL_ID, {
        type: types.TOOL,
        title: "Theme",
        render: () => {
            return <Tool api={api} />;
        },
    });
});

function Tool({ api }: { api: API }) {
    const [{ theme }] = useGlobals();

    React.useEffect(() => {
        api.setOptions({
            theme, // TODO: do get theme type
        });
    }, [theme]);
    return null;
}

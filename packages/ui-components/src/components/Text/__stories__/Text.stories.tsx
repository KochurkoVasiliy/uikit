import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

// import { Button } from "../../Button";
// import { TextInput } from "../../controls";
// import { Flex } from "../../layout";
import { Text, colorText, text } from "../index";

const meta: Meta<typeof Text> = {
    title: "Components/Data Display/Text",
    component: Text,
    parameters: {
        a11y: {
            element: "#storybook-root",
            config: {
                rules: [
                    {
                        id: "color-contrast",
                        enabled: false,
                    },
                ],
            },
        },
    },
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Default: Story = {
    args: {
        variant: "display-1",
        children: "display-1 text",
        title: "Lorem ipsum",
    },
};

export const UsingTextUtilities: StoryObj<{}> = {
    render: () => (
        <div className={text({ variant: "body-2" }, colorText({ color: "secondary" }))}>
            some custom or existing element with text utilities
        </div>
    ),
    parameters: {
        controls: {
            disable: true,
        },
    },
};

export const Ellipsis: Story = {
    render: (args) => (
        <>
            <Text variant="header-1">With fixed container size (ellipsis=true)</Text>
            <Text {...args} ellipsis />
        </>
    ),
    args: {
        children:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates asperiores accusamus est, ab rerum harum hic delectus fuga veniam! Hic, atque, quia sunt consectetur eius corrupti, expedita sapiente exercitationem aperiam quibusdam libero ipsa veritatis quisquam! Debitis eos unde, blanditiis ipsam adipisci, soluta incidunt architecto quidem, repellat commodi tempore! Enim assumenda nam esse laudantium sequi quaerat maiores, voluptatum quibusdam temporibus nulla perspiciatis! Corrupti error aliquid iure asperiores voluptate. Nisi temporibus nesciunt quasi animi, accusamus officia debitis voluptatum ratione ullam delectus, adipisci, repellendus vitae in amet sit magni iste impedit? Exercitationem rerum impedit sed earum iusto modi et officia aspernatur quibusdam? Fugit.",
    },
};

export const WordBreak: Story = {
    render: (args) => (
        <div
            style={{
                width: 200,
                height: 200,
                border: "2px solid black",
            }}
        >
            <Text {...args} />
        </div>
    ),

    args: {
        as: "div",
        children:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates asperiores accusamus est, ab rerum harum hic delectus fuga veniam! Hic, atque, quia sunt consectetur eius corrupti, expedita sapiente exercitationem aperiam quibusdam libero ipsa veritatis quisquam! Debitis eos unde, blanditiis ipsam adipisci, soluta incidunt architecto quidem, repellat commodi tempore! Enim assumenda nam esse laudantium sequi quaerat maiores, voluptatum quibusdam temporibus nulla perspiciatis! Corrupti error aliquid iure asperiores voluptate. Nisi temporibus nesciunt quasi animi, accusamus officia debitis voluptatum ratione ullam delectus, adipisci, repellendus vitae in amet sit magni iste impedit? Exercitationem rerum impedit sed earum iusto modi et officia aspernatur quibusdam? Fugit.",
        wordBreak: "break-all",
    },
};

const LabelWithControlledFocusStory = () => {
    const ref = React.useRef<HTMLLabelElement>(null); // don't delete this ref - needed to check correct react html type inshurance
    const id = "some-id";

    return (
        <>
            <Text as="label" htmlFor={id} ref={ref}>
                Click on label to control text input
            </Text>
        </>
    );
};

export const LabelWithControlledFocus: Story = {
    render: () => <LabelWithControlledFocusStory />,

    args: {},
};

const WithCustomElementRenderStory = () => {
    return (
        <>
            <Text as="code">
                {'<Text as={Button} size={\'m\'} view="action" color="danger-heavy" variant="header-1">Hello World!</Text>'}
            </Text>
            <Text color="negative-heavy" variant="header-1">
                Hello World!
            </Text>
        </>
    );
};

export const WithCustomElementRender: Story = {
    render: () => <WithCustomElementRenderStory />,

    args: {},
};

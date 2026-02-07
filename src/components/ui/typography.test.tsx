import { describe, expect, test } from "bun:test";
import { render, screen } from "@testing-library/react";
import { CodeText, Heading, Highlight, Text } from "./typography";

describe("Heading", () => {
  test("renders as h1 by default", () => {
    render(<Heading>Title</Heading>);
    const heading = screen.getByText("Title");
    expect(heading.tagName).toBe("H1");
  });

  test("renders as specified heading level", () => {
    render(<Heading as="h3">Title</Heading>);
    const heading = screen.getByText("Title");
    expect(heading.tagName).toBe("H3");
  });

  test("applies title variant by default", () => {
    render(<Heading>Title</Heading>);
    const heading = screen.getByText("Title");
    expect(heading.className).toContain("font-bold");
    expect(heading.className).toContain("tracking-tight");
  });

  test("applies display variant", () => {
    render(<Heading variant="display">Big</Heading>);
    const heading = screen.getByText("Big");
    expect(heading.className).toContain("font-black");
    expect(heading.className).toContain("tracking-tighter");
  });

  test("applies subtitle variant", () => {
    render(<Heading variant="subtitle">Sub</Heading>);
    const heading = screen.getByText("Sub");
    expect(heading.className).toContain("font-semibold");
  });

  test("applies tag variant", () => {
    render(<Heading variant="tag">Tag</Heading>);
    const heading = screen.getByText("Tag");
    expect(heading.className).toContain("font-mono");
    expect(heading.className).toContain("uppercase");
    expect(heading.className).toContain("text-accent");
  });

  test("applies gradient class when enabled", () => {
    render(<Heading gradient>Gradient</Heading>);
    const heading = screen.getByText("Gradient");
    expect(heading.className).toContain("gradient-text");
  });

  test("applies glitch class when enabled", () => {
    render(<Heading glitch>Glitch</Heading>);
    const heading = screen.getByText("Glitch");
    expect(heading.className).toContain("glitch");
  });

  test("does not apply gradient/glitch by default", () => {
    render(<Heading>Normal</Heading>);
    const heading = screen.getByText("Normal");
    expect(heading.className).not.toContain("gradient-text");
    expect(heading.className).not.toContain("glitch");
  });
});

describe("Text", () => {
  test("renders as paragraph", () => {
    render(<Text>Paragraph</Text>);
    const text = screen.getByText("Paragraph");
    expect(text.tagName).toBe("P");
  });

  test("applies body variant by default", () => {
    render(<Text>Body text</Text>);
    const text = screen.getByText("Body text");
    expect(text.className).toContain("text-base");
    expect(text.className).toContain("leading-relaxed");
  });

  test("applies lead variant", () => {
    render(<Text variant="lead">Lead</Text>);
    const text = screen.getByText("Lead");
    expect(text.className).toContain("text-lg");
  });

  test("applies mono variant", () => {
    render(<Text variant="mono">Code</Text>);
    const text = screen.getByText("Code");
    expect(text.className).toContain("font-mono");
  });

  test("applies muted color by default", () => {
    render(<Text>Colored</Text>);
    const text = screen.getByText("Colored");
    expect(text.className).toContain("text-zinc-300");
  });

  test("applies muted style when enabled", () => {
    render(<Text muted>Muted</Text>);
    const text = screen.getByText("Muted");
    expect(text.className).toContain("text-zinc-400");
  });
});

describe("CodeText", () => {
  test("renders with terminal prompt prefix", () => {
    const { container } = render(<CodeText>command</CodeText>);
    expect(container.textContent).toContain(">");
    expect(container.textContent).toContain("command");
    expect(container.textContent).toContain("_");
  });

  test("applies mono font", () => {
    render(
      <span data-testid="wrapper">
        <CodeText>test</CodeText>
      </span>
    );
    const wrapper = screen.getByTestId("wrapper").firstElementChild;
    expect(wrapper?.className).toContain("font-mono");
  });
});

describe("Highlight", () => {
  test("renders children with glow effect", () => {
    render(<Highlight>Highlighted</Highlight>);
    const element = screen.getByText("Highlighted");
    expect(element.style.textShadow).toContain("currentColor");
  });

  test("applies secondary color by default", () => {
    render(<Highlight>Default</Highlight>);
    const element = screen.getByText("Default");
    expect(element.className).toContain("text-accent-secondary");
  });

  test("applies accent color", () => {
    render(<Highlight color="accent">Accent</Highlight>);
    const element = screen.getByText("Accent");
    expect(element.className).toContain("text-accent");
  });

  test("applies white color", () => {
    render(<Highlight color="white">White</Highlight>);
    const element = screen.getByText("White");
    expect(element.className).toContain("text-white");
  });
});

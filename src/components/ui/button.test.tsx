import { describe, expect, test } from "bun:test";
import { render, screen } from "@testing-library/react";
import { Button, ButtonLink } from "./button";

describe("Button", () => {
  test("renders children", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole("button", { name: "Click me" })).toBeDefined();
  });

  test("applies primary variant by default", () => {
    render(<Button>Test</Button>);
    const button = screen.getByRole("button");
    expect(button.className).toContain("border-accent");
    expect(button.className).toContain("bg-accent");
  });

  test("applies secondary variant", () => {
    render(<Button variant="secondary">Test</Button>);
    const button = screen.getByRole("button");
    expect(button.className).toContain("border-zinc-700");
  });

  test("applies ghost variant", () => {
    render(<Button variant="ghost">Test</Button>);
    const button = screen.getByRole("button");
    expect(button.className).toContain("text-zinc-400");
  });

  test("applies tag variant", () => {
    render(<Button variant="tag">Test</Button>);
    const button = screen.getByRole("button");
    expect(button.className).toContain("skew-x-");
  });

  test("applies medium size by default", () => {
    render(<Button>Test</Button>);
    const button = screen.getByRole("button");
    expect(button.className).toContain("px-6");
    expect(button.className).toContain("py-3");
  });

  test("applies small size", () => {
    render(<Button size="sm">Test</Button>);
    const button = screen.getByRole("button");
    expect(button.className).toContain("px-4");
    expect(button.className).toContain("py-2");
  });

  test("applies large size", () => {
    render(<Button size="lg">Test</Button>);
    const button = screen.getByRole("button");
    expect(button.className).toContain("px-8");
    expect(button.className).toContain("py-4");
  });

  test("merges custom className", () => {
    render(<Button className="my-class">Test</Button>);
    const button = screen.getByRole("button");
    expect(button.className).toContain("my-class");
  });

  test("passes through HTML attributes", () => {
    render(<Button disabled>Test</Button>);
    const button = screen.getByRole("button") as HTMLButtonElement;
    expect(button.disabled).toBe(true);
  });
});

describe("ButtonLink", () => {
  test("renders as anchor element", () => {
    render(<ButtonLink href="/test">Link</ButtonLink>);
    const link = screen.getByRole("link", { name: "Link" });
    expect(link.tagName).toBe("A");
    expect(link.getAttribute("href")).toBe("/test");
  });

  test("applies external link attributes", () => {
    render(
      <ButtonLink href="https://example.com" external>
        External
      </ButtonLink>
    );
    const link = screen.getByRole("link");
    expect(link.getAttribute("target")).toBe("_blank");
    expect(link.getAttribute("rel")).toBe("noopener noreferrer");
  });

  test("does not apply external attributes by default", () => {
    render(<ButtonLink href="/test">Internal</ButtonLink>);
    const link = screen.getByRole("link");
    expect(link.getAttribute("target")).toBeNull();
  });

  test("applies variant and size classes", () => {
    render(
      <ButtonLink href="/test" variant="secondary" size="lg">
        Styled
      </ButtonLink>
    );
    const link = screen.getByRole("link");
    expect(link.className).toContain("border-zinc-700");
    expect(link.className).toContain("px-8");
  });
});

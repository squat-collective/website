import { describe, expect, test } from "bun:test";
import { render, screen } from "@testing-library/react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./card";

describe("Card", () => {
  test("renders children", () => {
    render(<Card>Card content</Card>);
    expect(screen.getByText("Card content")).toBeDefined();
  });

  test("applies default variant", () => {
    render(<Card data-testid="card">Test</Card>);
    const card = screen.getByTestId("card");
    expect(card.className).toContain("bg-zinc-900/50");
  });

  test("applies bordered variant", () => {
    render(
      <Card variant="bordered" data-testid="card">
        Test
      </Card>
    );
    const card = screen.getByTestId("card");
    expect(card.className).toContain("border");
    expect(card.className).toContain("border-zinc-800");
  });

  test("applies sticker variant", () => {
    render(
      <Card variant="sticker" data-testid="card">
        Test
      </Card>
    );
    const card = screen.getByTestId("card");
    expect(card.className).toContain("rotate-");
  });

  test("applies spray variant", () => {
    render(
      <Card variant="spray" data-testid="card">
        Test
      </Card>
    );
    const card = screen.getByTestId("card");
    expect(card.className).toContain("relative");
  });

  test("merges custom className", () => {
    render(
      <Card className="custom" data-testid="card">
        Test
      </Card>
    );
    const card = screen.getByTestId("card");
    expect(card.className).toContain("custom");
  });
});

describe("CardHeader", () => {
  test("renders children with margin bottom", () => {
    render(
      <CardHeader>
        <span>Header</span>
      </CardHeader>
    );
    const header = screen.getByText("Header").parentElement;
    expect(header?.className).toContain("mb-4");
  });
});

describe("CardTitle", () => {
  test("renders as h3 by default", () => {
    render(<CardTitle>Title</CardTitle>);
    const title = screen.getByText("Title");
    expect(title.tagName).toBe("H3");
  });

  test("renders as specified heading level", () => {
    render(<CardTitle as="h2">Title</CardTitle>);
    const title = screen.getByText("Title");
    expect(title.tagName).toBe("H2");
  });

  test("applies bold white text", () => {
    render(<CardTitle>Title</CardTitle>);
    const title = screen.getByText("Title");
    expect(title.className).toContain("font-bold");
    expect(title.className).toContain("text-white");
  });
});

describe("CardDescription", () => {
  test("renders as paragraph with muted text", () => {
    render(<CardDescription>Description</CardDescription>);
    const desc = screen.getByText("Description");
    expect(desc.tagName).toBe("P");
    expect(desc.className).toContain("text-zinc-400");
  });
});

describe("CardContent", () => {
  test("renders children", () => {
    render(<CardContent>Content</CardContent>);
    expect(screen.getByText("Content")).toBeDefined();
  });

  test("applies custom className", () => {
    render(
      <CardContent className="my-content">
        <span>Test</span>
      </CardContent>
    );
    const content = screen.getByText("Test").parentElement;
    expect(content?.className).toContain("my-content");
  });
});

import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "bun:test";
import { Badge, NumberBadge } from "./badge";

describe("Badge", () => {
  test("renders children", () => {
    render(<Badge>Status</Badge>);
    expect(screen.getByText("Status")).toBeDefined();
  });

  test("applies base styles", () => {
    render(<Badge data-testid="badge">Test</Badge>);
    const badge = screen.getByTestId("badge");
    expect(badge.className).toContain("font-mono");
    expect(badge.className).toContain("uppercase");
    expect(badge.className).toContain("tracking-wider");
  });

  test("applies default variant", () => {
    render(<Badge data-testid="badge">Default</Badge>);
    const badge = screen.getByTestId("badge");
    expect(badge.className).toContain("bg-accent/20");
    expect(badge.className).toContain("text-accent");
  });

  test("applies outline variant", () => {
    render(
      <Badge variant="outline" data-testid="badge">
        Outline
      </Badge>,
    );
    const badge = screen.getByTestId("badge");
    expect(badge.className).toContain("border");
    expect(badge.className).toContain("border-accent");
  });

  test("applies stencil variant", () => {
    render(
      <Badge variant="stencil" data-testid="badge">
        Stencil
      </Badge>,
    );
    const badge = screen.getByTestId("badge");
    expect(badge.className).toContain("skew-x-");
    expect(badge.className).toContain("border-l-4");
  });

  test("applies drip variant", () => {
    render(
      <Badge variant="drip" data-testid="badge">
        Drip
      </Badge>,
    );
    const badge = screen.getByTestId("badge");
    expect(badge.className).toContain("bg-accent");
    expect(badge.className).toContain("text-black");
  });

  test("merges custom className", () => {
    render(
      <Badge className="extra" data-testid="badge">
        Test
      </Badge>,
    );
    const badge = screen.getByTestId("badge");
    expect(badge.className).toContain("extra");
  });
});

describe("NumberBadge", () => {
  test("pads single digit numbers", () => {
    render(<NumberBadge number={3} />);
    expect(screen.getByText("03")).toBeDefined();
  });

  test("keeps double digit numbers as-is", () => {
    render(<NumberBadge number={42} />);
    expect(screen.getByText("42")).toBeDefined();
  });

  test("handles string numbers", () => {
    render(<NumberBadge number="7" />);
    expect(screen.getByText("07")).toBeDefined();
  });

  test("applies mono font and accent color", () => {
    render(
      <span data-testid="wrapper">
        <NumberBadge number={1} />
      </span>,
    );
    const badge = screen.getByTestId("wrapper").firstElementChild;
    expect(badge?.className).toContain("font-mono");
    expect(badge?.className).toContain("text-accent");
  });
});

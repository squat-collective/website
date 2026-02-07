import { describe, expect, test } from "bun:test";
import { render, screen } from "@testing-library/react";
import {
  ArrowDownIcon,
  BoltIcon,
  CodeIcon,
  GitHubIcon,
  SprayIcon,
} from "./index";

describe("Icons", () => {
  test("GitHubIcon renders with accessible label", () => {
    render(<GitHubIcon />);
    expect(screen.getByRole("img", { name: "GitHub" })).toBeDefined();
  });

  test("ArrowDownIcon renders with accessible label", () => {
    render(<ArrowDownIcon />);
    expect(screen.getByRole("img", { name: "Arrow down" })).toBeDefined();
  });

  test("SprayIcon renders with accessible label", () => {
    render(<SprayIcon />);
    expect(screen.getByRole("img", { name: "Spray" })).toBeDefined();
  });

  test("CodeIcon renders with accessible label", () => {
    render(<CodeIcon />);
    expect(screen.getByRole("img", { name: "Code" })).toBeDefined();
  });

  test("BoltIcon renders with accessible label", () => {
    render(<BoltIcon />);
    expect(screen.getByRole("img", { name: "Bolt" })).toBeDefined();
  });

  test("applies custom size", () => {
    render(<GitHubIcon size={48} data-testid="icon" />);
    const icon = screen.getByTestId("icon");
    expect(icon.getAttribute("width")).toBe("48");
    expect(icon.getAttribute("height")).toBe("48");
  });

  test("applies default size of 24", () => {
    render(<GitHubIcon data-testid="icon" />);
    const icon = screen.getByTestId("icon");
    expect(icon.getAttribute("width")).toBe("24");
    expect(icon.getAttribute("height")).toBe("24");
  });

  test("passes through className", () => {
    render(<GitHubIcon className="text-red-500" data-testid="icon" />);
    const icon = screen.getByTestId("icon");
    expect(icon.getAttribute("class")).toContain("text-red-500");
  });
});

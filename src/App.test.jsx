import React from "react"; // Add this line
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App.jsx";
import { expect } from "vitest";

test("does this render", () => {
  render(<App />);
});
test("does my app have add expense button", () => {
  render(<App />);
  const addButton = screen.getByRole("button", { name: /Add new expense/i });
  expect(addButton).toBeInTheDocument();
});
test("does my app have year filter with default value: 2024", () => {
  render(<App />);
  const yearFilter = screen.getByRole("combobox");
  expect(yearFilter).toBeInTheDocument();
  expect(yearFilter).toHaveValue("2024");
});
test("can year filter be changed to 2023", () => {
  render(<App />);
  const yearFilter = screen.getByRole("combobox");
  fireEvent.change(yearFilter, { target: { value: "2023" } });
  expect(yearFilter).toHaveValue("2023");
});
test("my combobox doenst have year 2027, lets see if its true", () => {
  render(<App />);
  const yearFilter = screen.getByRole("combobox");
  fireEvent.change(yearFilter, { target: { value: "2027" } });
  expect(yearFilter).not.toHaveValue("2027");
});
test("simulate clicking add button", () => {
  render(<App />);
  const addButton = screen.getByRole("button", { name: /Add new expense/i });
  fireEvent.click(addButton);
});

test("simulate adding title", () => {
  render(<App />);
  const addButton = screen.getByRole("button", { name: /Add new expense/i });
  fireEvent.click(addButton);
  const titleInput = screen.getByLabelText(/Title/i);
  fireEvent.change(titleInput, { target: { value: "New shoes" } });
  expect(titleInput.value).toBe("New shoes");
});
test("simulate adding price", () => {
  render(<App />);
  const addButton = screen.getByRole("button", { name: /Add new expense/i });
  fireEvent.click(addButton);
  const priceInput = screen.getByLabelText(/Price/i);
  fireEvent.change(priceInput, { target: { value: "0.12" } });
  expect(Number(priceInput.value)).toBe(0.12);
});
test("simulate picking a date", () => {
  render(<App />);
  const addButton = screen.getByRole("button", { name: /Add new expense/i });
  fireEvent.click(addButton);
  const datePick = screen.getByLabelText(/Date/i);
  fireEvent.change(datePick, { target: { value: "2025-12-12" } });
  expect(datePick.value).toBe("2025-12-12");
});
test("simulate adding an expense with everything", () => {
  render(<App />);
  const addButton = screen.getByRole("button", { name: /Add new expense/i });
  fireEvent.click(addButton);
  const titleInput = screen.getByLabelText(/Title/i);
  fireEvent.change(titleInput, { target: { value: "New shoes" } });
  const priceInput = screen.getByLabelText(/Price/i);
  fireEvent.change(priceInput, { target: { value: "0.12" } });
  const datePick = screen.getByLabelText(/Date/i);
  fireEvent.change(datePick, { target: { value: "2025-12-12" } });
  const addExpenseButton = screen.getByRole("button", { name: /Add expense/i });
  fireEvent.click(addExpenseButton)
});

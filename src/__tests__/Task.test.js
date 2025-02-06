import "@testing-library/jest-dom"; // Import at the top
import React from 'react';
import { render, screen } from '@testing-library/react';
import Task from '../components/Task';
import userEvent from '@testing-library/user-event';

test("displays the task text", () => {
  const task = { text: "text!", category: "category!" };
  render(<Task task={task} onDelete={() => {}} />);
  expect(screen.getByText("text!")).toBeInTheDocument();
});

test("displays the task category", () => {
  const task = { text: "text!", category: "category!" };
  render(<Task task={task} onDelete={() => {}} />);
  expect(screen.getByText("category!")).toBeInTheDocument();
});

test("calls onDelete when the delete button is clicked", () => {
  const task = { text: "text!", category: "category!" };
  const onDelete = jest.fn();
  render(<Task task={task} onDelete={onDelete} />);

  const deleteButton = screen.getByRole('button', { name: 'X' });
  userEvent.click(deleteButton);

  expect(onDelete).toHaveBeenCalled();
});

import React from "react";
import App from "./App";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

describe('App.js', () => {
    test('is renders without errors', () => {
        const { container } = render(<App />);

        expect(container).toBeInTheDocument();
    });
});
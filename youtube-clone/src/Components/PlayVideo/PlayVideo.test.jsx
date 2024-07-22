import React from "react";
import { render, screen } from "@testing-library/react";
import PlayVideo from "./PlayVideo";

describe("PlayVideo component", () => {
    it("renders without crashing", () => {
        render(<PlayVideo />);
    });

    it("displays the video title", () => {
        render(<PlayVideo />);
        const videoTitle = screen.getByText("Video Title");
        expect(videoTitle).toBeInTheDocument();
    });

    it("displays the video duration", () => {
        render(<PlayVideo />);
        const videoDuration = screen.getByText("10:30");
        expect(videoDuration).toBeInTheDocument();
    });

    it("displays the video description", () => {
        render(<PlayVideo />);
        const videoDescription = screen.getByText("Lorem ipsum dolor sit amet");
        expect(videoDescription).toBeInTheDocument();
    });

});
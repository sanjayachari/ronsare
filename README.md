# KonfHub Frontend Evaluation Task

This is a Next.js application built for the KonfHub frontend evaluation task. It demonstrates the required features and functionality for the assessment.

## Live Demo

You can access the live version of the app here: [KonfHub Frontend Evaluation Task](https://konfhub-assignment-delta.vercel.app/)

## Getting Started

Follow these instructions to get a copy of the project running on your local machine.

### Prerequisites

Ensure you have the following software installed:

- **Node.js** (v12.0.0 or higher)
- **npm** (v6.0.0 or higher) or **yarn** (v1.22.0 or higher) or **pnpm** or **bun**

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/konfhub-frontend-evaluation-task.git
   cd konfhub-frontend-evaluation-task

Install dependencies:

    - npm install

Running the Development Server

    - npm run dev

Building for Production

    - npm run build

Starting the Production Server

    - npm start

Visit http://localhost:3000 in your browser to view the production build.

Project Structure : 
This project follows the standard Next.js structure. Below are some key directories and their contents:

    pages/: Contains the application's page components.
    public/: Houses static assets like images and fonts.
    components/: Reusable UI components for the application.
    constant/: Api url
    context/ : initialized the context API

### Event Details Component

The Event Details component displays information about a specific event. Due to occasional missing data in the API response, such as the event description or organizer details, we've introduced static fallback values. These defaults ensure that the UI remains informative even when certain data is unavailable.

- **Description Placeholder**: When the event description is missing, a generic text like "Event Description Not Available" is displayed.
- **Organizer Default Image**: If the organizer's profile picture URL is missing, a default avatar image is shown to maintain visual consistency.



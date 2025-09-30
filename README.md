# Resumind: AI-based Resume Builder

Resumind is a modern, AI-powered resume builder built with React and Vite. It allows users to create, edit, and manage professional resumes with ease, featuring real-time editing, theme customization, and seamless PDF export for printing or sharing.

## Features
- User authentication (Clerk)
- Dashboard to manage multiple resumes
- Create, edit, and preview resumes
- Rich text editor for experience and summary sections
- Theme color customization
- Skills rating and progress bars
- Download/share resume as PDF (print-optimized)
- Responsive design with Tailwind CSS

## Tech Stack
- React 19
- Vite
- Tailwind CSS
- Clerk (authentication)
- Axios (API calls)
- Strapi (backend API)
- Lucide React (icons)
- Sonner (notifications)

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn

### Installation
1. Clone the repository:
	```bash
	git clone https://github.com/Kushalkush-dev/Resumind-Ai-based-Resume-Builder.git
	cd Resumind-Ai-based-Resume-Builder/resumemind
	```
2. Install dependencies:
	```bash
	npm install
	# or
	yarn install
	```
3. Set up environment variables:
	- Copy `.env.example` to `.env` and fill in your Clerk and Strapi API keys.

### Running Locally
```bash
npm run dev
```
The app will be available at `http://localhost:5173`.

### Backend Setup
- The backend is powered by Strapi. Make sure your Strapi server is running and accessible at the configured API URL.

## Folder Structure
```
resumemind/
├── src/
│   ├── pages/           # Main app pages (Dashboard, ResumeEdit, ResumeView, Home)
│   ├── components/      # UI and custom components
│   ├── Context/         # React context for resume info
│   ├── data/            # Dummy data for development
│   ├── lib/             # Utility functions
│   └── service/         # API service layer
├── public/              # Static assets
├── index.html           # App entry point
├── package.json         # Project metadata and scripts
└── README.md            # Project documentation
```

## Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License
MIT

## Author
Kushal J (Kushalkush-dev)

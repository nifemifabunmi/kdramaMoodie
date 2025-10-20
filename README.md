🎭 K-Drama Moodie

Find your perfect next K-Drama binge based on your current mood and never miss an episode with our personalized watch calendar!

Live Demo | Features | Installation | Usage

About
K-Drama Moodie is a mood-based K-Drama recommendation system with an integrated watch calendar. Whether you're feeling romantic, thrilled, emotional, or just need a good laugh, K-Drama Moodie helps you discover the perfect drama to match your vibe. Plus, keep track of all your ongoing dramas with our beautiful, interactive calendar!

Problems It Solves

Decision Paralysis: No more endless scrolling through streaming platforms wondering what to watch next
Mood Matching: Get recommendations that actually fit how you're feeling right now
Episode Tracking: Never miss an episode of your ongoing dramas with automatic calendar scheduling
Discovery: Find hidden gems and popular dramas curated by mood and genre


Features
🎬 Mood-Based Recommendations

6 Unique Moods: Romantic, Thrilling, Funny, Emotional, Inspirational, Mysterious
Smart Genre Filtering: Combine mood with specific genres for precise recommendations
Match Scoring: See how well each drama matches your current mood (85-100%)
Rich Drama Info: Synopsis, cast, ratings, episode count, and year
Mood Boards: Visual emoji storyboards for each recommendation

Personalized Watch Calendar

Weekly View: See your drama schedule at a glance
Episode Tracking: Track which episode you're on and when the next one airs
Add Multiple Dramas: Manage all your ongoing dramas in one place
Progress Bars: Visual progress tracking for each drama
Air Schedule: Set specific air days and times
Persistent Storage: Your watchlist saves automatically using browser storage
Navigation: Browse previous and upcoming weeks

Premium Design

Glassmorphism UI: Modern frosted-glass aesthetic
Dynamic Animations: Smooth transitions, hover effects, and particle backgrounds
Gradient Effects: Beautiful purple/pink/blue color scheme
Dark Mode: Eye-friendly dark theme with glowing elements
Responsive Design: Works perfectly on desktop, tablet, and mobile
Interactive Elements: Every button, card, and element responds to interaction


🚀 Installation
Quick Start

Clone the repository

bash   git clone https://github.com/yourusername/kdrama-moodie.git
   cd kdrama-moodie
Open in browser
Simply double-click index.html
Or right-click and choose "Open with" → your preferred browser


That's it! No build process, no dependencies, no server required. 🎉
Alternative: Use Live Server (Recommended for Development)

Install VS Code Live Server extension
Open project in VS Code
bash   code .
Right-click index.html → "Open with Live Server"


Usage
Getting Drama Recommendations
Select Your Mood
Click on one of the 6 mood buttons that matches how you're feeling
The selected mood will highlight with a gradient effect
Optional: Add Genre Filters
Click on any genre tags to narrow down recommendations
Multiple genres can be selected

Get Recommendations
Click the "🎬 Get My Recommendations" button
Wait for the AI-style analysis animation
Browse your personalized matches!


Managing Your Watch Calendar

Access Calendar
Click "📅 View My Watch Calendar" button
Or click the floating badge (if you have dramas saved)

Add a Drama
   Click "+ Add Drama to Calendar"
   Fill in:
   - Drama Title (e.g., "Crash Landing on You")
   - Total Episodes (e.g., 16)
   - Current Episode (e.g., 5)
   - Air Day (e.g., Saturday)
   - Air Time (e.g., 21:00)
Track Your Progress

View your watchlist with progress bars
See upcoming episodes in the weekly calendar
Remove dramas by clicking the × button

Navigate Weeks
Use "← Previous Week" and "Next Week →" to browse
Current day is highlighted



🛠️ Technology Stack
TechnologyPurposeHTML5Structure and semantic markupCSS3Styling, animations, glassmorphism effectsVanilla JavaScriptInteractive functionality and logicLocalStorage APIPersistent data storage for watchlistGoogle Fonts (Poppins)Modern, clean typography

Why Vanilla JavaScript?

✅ Zero dependencies - No npm, no build process
✅ Fast loading - Single HTML file under 50KB
✅ Easy to understand - Perfect for learning
✅ Universal compatibility - Works everywhere
✅ Easy deployment - Just upload and go!


📂 Project Structure
kdrama-moodie/
│
├── index.html          # Single-file application
├── README.md           # You are here!
└── .gitignore          # Git ignore rules
Code Organization
Within index.html:

Styles (<style> section)

Base styles and resets
Layout and grid systems
Component styles
Animations and keyframes
Responsive media queries


HTML (<body> section)

Header and branding
Mood selector interface
Genre tags
Results container
Calendar system
Watchlist manager


JavaScript (<script> section)

Drama database
Mood selection logic
Recommendation engine
Calendar management
LocalStorage handling
UI rendering functions


Design Philosophy
Visual Design

Glassmorphism: Translucent, frosted-glass effects for a modern premium feel
Dark Theme: Reduces eye strain and creates immersive experience
Gradients: Purple-to-pink gradients for brand consistency
Animations: Smooth, purposeful animations that enhance UX

UX Principles

Progressive Disclosure: Calendar only shows when needed
Immediate Feedback: Every interaction has visual response
Clear Hierarchy: Important actions are prominent
Forgiving Interface: Easy to undo/remove items


Drama Database
Currently includes 12 curated K-Dramas across 6 moods:
MoodDramas Included💕 RomanticCrash Landing on You, Hometown Cha-Cha-Cha😱 ThrillingSquid Game, Sweet Home😂 FunnyStrong Woman Do Bong-soon, Business Proposal😢 EmotionalMy Mister, Move to Heaven✨ InspirationalStart-Up, Racket Boys🔍 MysteriousSignal, Stranger
Expanding the Database
To add more dramas, edit the dramaDatabase object in the JavaScript section:
javascriptromantic: [
    {
        title: "Your Drama Title",
        year: 2024,
        episodes: 16,
        rating: 8.5,
        genres: ["romance", "comedy"],
        synopsis: "Your synopsis here...",
        cast: ["Actor 1", "Actor 2"],
        moodBoard: "💕🌸💝✨🎭🌙",
        whyMatch: "Why this matches the mood..."
    }
]

🚧 Future Enhancements
Phase 1: Enhanced Features

 Export calendar to Google Calendar/iCal
 Episode watched checkmarks
 Notifications when episodes air
 Search functionality
 User ratings and reviews

Phase 2: Backend Integration

 User accounts and authentication
 Cloud sync across devices
 Collaborative watchlists
 Social sharing features

Phase 3: ML & AI

 Real sentiment analysis on reviews
 Collaborative filtering recommendations
 Auto-suggest dramas for empty calendar days
 Personalized recommendation scoring based on watch history

Phase 4: Data Expansion

 Integration with MyDramaList API
 Real-time episode schedules
 Streaming platform links
 Cast and crew information
 Similar drama suggestions


🤝 Contributing
Contributions are welcome! Here's how you can help:

Fork the repository
Create a feature branch

bash   git checkout -b feature/AmazingFeature

Commit your changes

bash   git commit -m 'Add some AmazingFeature'

Push to the branch

bash   git push origin feature/AmazingFeature

Open a Pull Request

Contribution Ideas

Add more K-Dramas to the database
Improve mobile responsiveness
Add new mood categories
Enhance animations
Fix bugs or improve performance
Improve documentation


🐛 Known Issues

LocalStorage has size limits (~5-10MB depending on browser)
Calendar doesn't sync across devices (local storage only)
No push notifications for episode air times
Limited drama database (manually curated)


📄 License
This project is licensed under the MIT License - see the LICENSE file for details.
MIT License

Copyright (c) 2024 K-Drama Moodie

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software...

Acknowledgments

K-Drama Fans - For the inspiration and passion
MyDramaList - Drama information reference
Google Fonts - Poppins font family
Shields.io - Beautiful badges
The K-Drama Community - For making this hobby so enriching

 Contact
Project Creator: [Oluwanifemi (Nifemi) Fabunmi]

GitHub: @nifemifabunmi
Email: oluwanifemifabunmi6@example.com
LinkedIn: nifemifabunmi

Project Link: https://github.com/nifemifabunmi/kdrama-moodie

 Show Your Support
If you found this project helpful, please consider:

 Starring the repository
 Reporting bugs
 Suggesting new features
 Sharing with fellow K-Drama fans
 Buying me a coffee

Made with 💜 for K-Drama fans everywhere
Happy binge-watching! 🎬✨
⬆ Back to Top
</div>

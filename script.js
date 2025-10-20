const dramaDatabase = {
    romantic: [
        {
            title: "Crash Landing on You",
            year: 2019,
            episodes: 16,
            rating: 9.1,
            genres: ["romance", "comedy"],
            synopsis: "A South Korean heiress accidentally paraglides into North Korea and falls in love with an army officer who hides and protects her.",
            cast: ["Hyun Bin", "Son Ye-jin"],
            moodBoard: "💕✈️🪂🎖️💝🌸",
            whyMatch: "Perfect for when you want heart-fluttering romance with a touch of adventure and comedy."
        },
        {
            title: "Hometown Cha-Cha-Cha",
            year: 2021,
            episodes: 16,
            rating: 8.8,
            genres: ["romance", "slice-of-life"],
            synopsis: "A big-city dentist opens a clinic in a seaside village and meets a charming jack-of-all-trades who captures her heart.",
            cast: ["Shin Min-a", "Kim Seon-ho"],
            moodBoard: "🏖️💕🦷🏘️☀️🌊",
            whyMatch: "Cozy and heartwarming romance that feels like a warm hug on a perfect day."
        }
    ],
    thrilling: [
        {
            title: "Squid Game",
            year: 2021,
            episodes: 9,
            rating: 8.0,
            genres: ["thriller", "crime"],
            synopsis: "Hundreds of cash-strapped players accept a strange invitation to compete in children's games for a tempting prize with deadly stakes.",
            cast: ["Lee Jung-jae", "Park Hae-soo"],
            moodBoard: "🎮💀🔴🟢🎯💰",
            whyMatch: "Intense, gripping, and impossible to look away from. Perfect for adrenaline rush seekers."
        },
        {
            title: "Sweet Home",
            year: 2020,
            episodes: 10,
            rating: 7.3,
            genres: ["thriller", "fantasy"],
            synopsis: "After losing his family, a reclusive teen battles monsters and fellow survivors in an apocalyptic apartment complex.",
            cast: ["Song Kang", "Lee Jin-wook"],
            moodBoard: "👹🏢😱🔥💪🌙",
            whyMatch: "Dark, intense horror-thriller that keeps your heart racing throughout."
        }
    ],
    funny: [
        {
            title: "Strong Woman Do Bong-soon",
            year: 2017,
            episodes: 16,
            rating: 8.2,
            genres: ["comedy", "romance"],
            synopsis: "A woman with superhuman strength becomes a bodyguard for a CEO, leading to hilarious and heartwarming situations.",
            cast: ["Park Bo-young", "Park Hyung-sik"],
            moodBoard: "💪😂💕🦸‍♀️🏢✨",
            whyMatch: "Laugh-out-loud comedy with adorable romance and unique superhero twist."
        },
        {
            title: "Business Proposal",
            year: 2022,
            episodes: 12,
            rating: 8.1,
            genres: ["comedy", "romance"],
            synopsis: "An employee goes on a blind date pretending to be her friend to scare him away, but he turns out to be her CEO.",
            cast: ["Ahn Hyo-seop", "Kim Sejeong"],
            moodBoard: "😂💼💕🎭👔😍",
            whyMatch: "Hilarious rom-com with perfect chemistry and comedy timing that'll brighten your day."
        }
    ],
    emotional: [
        {
            title: "My Mister",
            year: 2018,
            episodes: 16,
            rating: 8.9,
            genres: ["melodrama", "slice-of-life"],
            synopsis: "A middle-aged engineer and a young woman with a difficult past form an unlikely friendship that heals them both.",
            cast: ["Lee Sun-kyun", "IU"],
            moodBoard: "💔😢🤝💪🌧️🌈",
            whyMatch: "Deeply moving and beautifully crafted story about healing and human connection."
        },
        {
            title: "Move to Heaven",
            year: 2021,
            episodes: 10,
            rating: 8.6,
            genres: ["melodrama"],
            synopsis: "A trauma cleaner with Asperger's syndrome and his ex-convict uncle clean crime scenes and uncover stories of the deceased.",
            cast: ["Lee Je-hoon", "Tang Jun-sang"],
            moodBoard: "😭💙🧹📦💫🕊️",
            whyMatch: "Tearjerker that celebrates life and death with beautiful storytelling."
        }
    ],
    inspirational: [
        {
            title: "Start-Up",
            year: 2020,
            episodes: 16,
            rating: 8.0,
            genres: ["romance", "slice-of-life"],
            synopsis: "Young entrepreneurs pursue their dreams in Korea's competitive tech industry while navigating love and friendship.",
            cast: ["Bae Suzy", "Nam Joo-hyuk"],
            moodBoard: "💡💻🚀✨📱💪",
            whyMatch: "Motivating story about chasing dreams with determination and heart."
        },
        {
            title: "Racket Boys",
            year: 2021,
            episodes: 16,
            rating: 8.5,
            genres: ["slice-of-life"],
            synopsis: "A middle school badminton team in a rural village dreams of becoming national champions.",
            cast: ["Kim Sang-kyung", "Oh Na-ra"],
            moodBoard: "🏸🏆😊🏫💪🌾",
            whyMatch: "Uplifting underdog story with wholesome characters and feel-good moments."
        }
    ],
    mysterious: [
        {
            title: "Signal",
            year: 2016,
            episodes: 16,
            rating: 8.5,
            genres: ["crime", "thriller"],
            synopsis: "Detectives from different timelines communicate through a mysterious walkie-talkie to solve cold cases.",
            cast: ["Lee Je-hoon", "Kim Hye-soo"],
            moodBoard: "📻🔍⏰🕵️💫🌙",
            whyMatch: "Mind-bending mystery with brilliant plot twists that'll keep you guessing."
        },
        {
            title: "Stranger",
            year: 2017,
            episodes: 16,
            rating: 8.4,
            genres: ["crime", "thriller"],
            synopsis: "A prosecutor lacking emotions and a passionate police officer team up to uncover corruption and solve murders.",
            cast: ["Cho Seung-woo", "Bae Doona"],
            moodBoard: "⚖️🔍🕵️🏛️🌑💼",
            whyMatch: "Intricately plotted mystery thriller with stellar performances and complex storytelling."
        }
    ]
};

let selectedMood = null;
let selectedGenres = [];

document.querySelectorAll('.mood-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.mood-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        selectedMood = this.dataset.mood;
    });
});

document.querySelectorAll('.genre-tag').forEach(tag => {
    tag.addEventListener('click', function() {
        this.classList.toggle('selected');
        const genre = this.dataset.genre;
        if (selectedGenres.includes(genre)) {
            selectedGenres = selectedGenres.filter(g => g !== genre);
        } else {
            selectedGenres.push(genre);
        }
    });
});

function getRecommendations() {
    if (!selectedMood) {
        alert('Please select a mood first! 🎭');
        return;
    }

    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '<div class="loading"><div class="loading-spinner"></div>Analyzing your mood and finding the perfect dramas...</div>';
    resultsDiv.style.display = 'block';

    setTimeout(() => {
        let dramas = dramaDatabase[selectedMood] || [];
        
        if (selectedGenres.length > 0) {
            dramas = dramas.filter(drama => 
                drama.genres.some(g => selectedGenres.includes(g))
            );
        }

        if (dramas.length === 0) {
            dramas = dramaDatabase[selectedMood];
        }

        let html = '<h2 style="color: white; text-align: center; margin-bottom: 30px; font-size: 2em;">🎬 Your Perfect Matches</h2>';
        
        dramas.forEach((drama, index) => {
            const matchScore = 85 + Math.floor(Math.random() * 15);
            html += `
                <div class="drama-card">
                    <div class="drama-header">
                        <div>
                            <h2 class="drama-title">${drama.title}</h2>
                            <p style="color: #666; font-size: 1.1em;">${drama.year} • ${drama.episodes} Episodes</p>
                        </div>
                        <div class="match-score">${matchScore}% Match</div>
                    </div>
                    <div class="drama-info">
                        <span class="info-badge">⭐ ${drama.rating}/10</span>
                        ${drama.genres.map(g => `<span class="info-badge">#${g}</span>`).join('')}
                    </div>
                    <p class="drama-synopsis">${drama.synopsis}</p>
                    <div style="margin-top: 15px;">
                        <strong style="color: #667eea;">Cast:</strong> ${drama.cast.join(', ')}
                    </div>
                    <div class="mood-board" title="Mood Board">${drama.moodBoard}</div>
                    <div class="why-match">
                        <strong>Why this matches your mood:</strong> ${drama.whyMatch}
                    </div>
                </div>
            `;
        });

        resultsDiv.innerHTML = html;
        resultsDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 1500);
}
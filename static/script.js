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
        }
    ],
    funny: [ /* ...other dramas... */ ],
    emotional: [ /* ...other dramas... */ ],
    inspirational: [ /* ...other dramas... */ ],
    mysterious: [ /* ...other dramas... */ ]
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
            dramas = dramas.filter(drama => drama.genres.some(g => selectedGenres.includes(g)));
        }
        if (dramas.length === 0) dramas = dramaDatabase[selectedMood];

        let html = '<h2 style="color: white; text-align: center; margin-bottom: 30px; font-size: 2em;">🎬 Your Perfect Matches</h2>';
        
        dramas.forEach(drama => {
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

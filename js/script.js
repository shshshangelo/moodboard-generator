// Mood data na may more options at iba't ibang combinations
const moods = {
  happy: {
    title: "You're feeling Happy!",
    quotes: [
      "Happiness is not by chance, but by choice.",
      "Smile! It’s free therapy.",
      "Choose to be happy and watch the world change around you."
    ],
    emojis: ["😊", "😁", "😂", "😄", "😎"],
    backgrounds: [
      "#FFD93D", "#FFB3D9", "#00C4B4", "#FF6347"
    ]
  },
  sad: {
    title: "It's okay to feel Sad.",
    quotes: [
      "Tears are words the heart can't express.",
      "Sadness flies away on the wings of time.",
      "Sometimes, you just need to cry and then let it go."
    ],
    emojis: ["😢", "😭", "😔", "😞"],
    backgrounds: [
      "#6C757D", "#A9A9A9", "#4A4A4A", "#333333"
    ]
  },
  motivated: {
    title: "Time to Hustle!",
    quotes: [
      "Push yourself, because no one else is going to do it for you.",
      "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      "Don’t stop when you’re tired, stop when you’re done."
    ],
    emojis: ["🔥", "💪", "🚀", "⚡"],
    backgrounds: [
      "#198754", "#FF6F61", "#00A4CC", "#F44336"
    ]
  },
  chill: {
    title: "Stay Chill",
    quotes: [
      "Relax. Refresh. Recharge.",
      "Don’t worry, be happy!",
      "Take it easy. Life is too short."
    ],
    emojis: ["🌴", "🍹", "☀️", "😌"],
    backgrounds: [
      "#0DCAF0", "#FFB6C1", "#98C9E6", "#56A0D3"
    ]
  },
  excited: {
    title: "You're Feeling Excited!",
    quotes: [
      "The best way to predict the future is to create it.",
      "Excitement is the spark that lights your soul on fire.",
      "Life is too short to wait for things to happen. Make it happen!"
    ],
    emojis: ["🎉", "🤩", "🥳", "🎶"],
    backgrounds: [
      "#F7A500", "#F45D48", "#9C27B0", "#E91E63"
    ]
  },
  love: {
    title: "All You Need is Love",
    quotes: [
      "Love is not just a feeling, it’s an action.",
      "To love and be loved is the greatest gift.",
      "Love yourself first, and everything else falls into line."
    ],
    emojis: ["❤️", "💘", "😍", "💋"],
    backgrounds: [
      "#FF0000", "#FF69B4", "#FFC0CB", "#DB7093"
    ]
  },
  nostalgic: {
    title: "Feeling Nostalgic...",
    quotes: [
      "Sometimes, the memories are the only things keeping us alive.",
      "The good old days are never really gone.",
      "Nostalgia is a dirty liar that insists things were better than they seemed."
    ],
    emojis: ["🕰️", "📸", "🖼️", "🎞️"],
    backgrounds: [
      "#8B4513", "#D2691E", "#6A5ACD", "#C71585"
    ]
  }
};

// Function to generate a random mood response
function generateMood() {
  const mood = document.getElementById("moodSelect").value;
  const result = document.getElementById("result");

  if (!mood || !moods[mood]) {
    alert("Please choose a mood.");
    return;
  }

  const selectedMood = moods[mood];

  // Randomly select quote, emoji, and background
  const randomQuote = selectedMood.quotes[Math.floor(Math.random() * selectedMood.quotes.length)];
  const randomEmoji = selectedMood.emojis[Math.floor(Math.random() * selectedMood.emojis.length)];
  const randomBackground = selectedMood.backgrounds[Math.floor(Math.random() * selectedMood.backgrounds.length)];

  document.getElementById("moodTitle").textContent = selectedMood.title;
  document.getElementById("moodQuote").textContent = randomQuote;
  document.getElementById("moodEmoji").textContent = randomEmoji;

  // Change background and show result
  result.classList.remove("d-none");
  result.style.background = randomBackground;
  document.body.style.background = randomBackground;
}

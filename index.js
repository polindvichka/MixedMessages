const generalFortune = [
    "Today is your lucky day.",
    "Be cautious in making decisions.",
    "Adventure awaits you."
  ];
  
  const loveLife = [
    "Love is just around the corner.",
    "You may face challenges in relationships.",
    "Your soulmate might be closer than you think."
  ];
  
  const dailyAdvice = [
    "Stay hydrated.",
    "Be kind to strangers.",
    "Keep an open mind."
  ];

  const randomGeneralIndex = Math.floor(Math.random() * generalFortune.length);
  const randomLoveIndex = Math.floor(Math.random() * loveLife.length);
  const randomDailyIndex = Math.floor(Math.random() * dailyAdvice.length);

  const message = `  General: ${generalFortune[randomGeneralIndex]}
  Love: ${loveLife[randomLoveIndex]}
  Daily: ${dailyAdvice[randomDailyIndex]}`;

  console.log(message);
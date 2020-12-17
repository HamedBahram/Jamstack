// some good vibe options
const vibes = ["... and you're awesome", '... have a wonderful day', "... and you've got this"]

// choose a random vibe
const vibe = vibes[Math.floor(Math.random() * vibes.length)]

// display a good vibe
document.querySelector('.vibe').append(vibe)

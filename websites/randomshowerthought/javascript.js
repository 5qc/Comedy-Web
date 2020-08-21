var quotes = [
	'Cleaning your skin is removing skin from your skin.',
    'The hardest part of doing something you hate is starting. The hardest part of doing something you love is stopping.',
    'One day your childhood ended and nothing was ever as easy and straightforward as sitting eating cereal and watching cartoons on a Saturday morning.',
    'Taking a bite from a burger determines where the front of it is',
    'We honor our best friends by calling them family and honor family members we like by calling them our best friend.',
    'Walking down the stairs is falling with extra steps.',
    'Less and less people will know how beautiful a clear night sky is.',
    'Everybody at one point in their life will forget a great memory and not even know it.',
    'If the water in the ocean was crystal clear, people who are scared of heights would avoid it.',
    'A duck only has to meow once for you to question every quack',
    '0 isn\'t a number, it is a portal that all the numbers that pass through it became negative or positive.',
    'There is a sense of relief when you find out that someone is an asshole in general, and not just towards you.',
    'If your significant other starts using your gibberish, you have their heart.',
    'Most of the trash you see on the ground is unhealthy food packaging because people who don’t care about their own health don’t care about the Earth’s either.',
    'People who set multiple alarms have trust issues with themselves.',
    'The longer you keep your socks on the better it feels when you take them off',
    'You legally have a family, you can legally have a partner and you can legally have children. However you never actually legally have any friends.',
    'I would get up so much more if life had visible EXP bars and levels for all the skillsets I could acquire.',
    'Eating cake alongside ice cream sounds fine, but eating cake and then eating ice cream an hour later seems unhealthy.',
    'Eating granola bars outside is a snack for the birds later.',
    'If people spoke every word their mind said they would sound batshit crazy.'
]

function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}
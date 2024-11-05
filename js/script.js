/* global monogatari */

// Define the messages used in the game.
monogatari.action ('message').messages ({
	'Help': {
		title: 'Help',
		subtitle: 'Some useful Links',
		body: `
			<p><a href='https://developers.monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p>
			<p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>
		`
	}
});

// Define the notifications used in the game
monogatari.action ('notification').notifications ({
	'Welcome': {
		title: 'Welcome',
		body: 'This is the Monogatari VN Engine',
		icon: ''
	}
});

// Define the Particles JS Configurations used in the game
monogatari.action ('particles').particles ({

});

// Define the canvas objects used in the game
monogatari.action ('canvas').objects ({

});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration ('credits', {

});


// Define the images that will be available on your game's image gallery
monogatari.assets ('gallery', {

});

// Define the music used in the game.
monogatari.assets ('music', {
	"background": "gta3.mp3"
});

// Define the voice files used in the game.
monogatari.assets ('voices', {

});

// Define the sounds used in the game.
monogatari.assets ('sounds', {

});

// Define the videos used in the game.
monogatari.assets ('videos', {

});

// Define the images used in the game.
monogatari.assets ('images', {

});

// Define the backgrounds for each scene.
monogatari.assets ('scenes', {
	"default": "default.jpg",
	"room": "room.jpg"
});


// Define the Characters
monogatari.characters ({
	'j': {
		name: '???',
		color: '#FFAAAA'
	},
	'p': {
		name: '{{player.name}}',
		color: '#7F7BE9'
	}
});

monogatari.script ({
	// The game starts here.
	'Start': [
		'show scene default with fadeIn',
		'p Hearthaven City. My home. A beautiful place to carve out a life, and fall in love.',

		// Fade into a version of the pic with some darkness attached
		'p ...',
		{
			'Input': {
				'Text': 'What is your name?',
				'Validation': function (input) {
					return input.trim ().length > 0;
				},
				'Save': function (input) {
					this.storage ({
						player: {
							name: input
						}
					});
					return true;
				},
				'Revert': function () {
					this.storage ({
						player: {
							name: ''
						}
					});
				},
				'Warning': 'You must enter a name!'
			}
		},
		'play music background fade 4',
		'show scene room fadeIn',
		'p Unless you’re me, of course. My name’s {{player.name}}, and lately-- Well, most of my life, actually, I’ve never really been lucky when it comes to dating.',
		'p On top of being gay, I’m kind of... Well, more like insanely shy and totally nervous.',
		'p Ever since I graduated, I’ve been searching for Mr. Right. So far, he hasn’t shown up yet, but I know in my heart that he’s out there somewhere... just waiting for the day to sweep me off my feet',
		'p My own Prince Charming. My knight in shining armor. My...',
		'p Hmm, what next?',
		'A young woman suddenly appears from over {{player.name}}’s shoulder, wearing a stylish blue tubetop and tight low cut jeans.',
		'j How about ‘My own personal stud with big ol’ muscles and an even bigger di-’',
		'p Jamie!',
		function () {
            monogatari.characters().j.name = 'Jamie';
            return true; // Ensures the script continues after updating
        },
		'j What? Is that not true?',
		'p Well... yeah... b-but don’t read my diary!',
		'"This is Jamie, my roommate and best friend in the world!"',
		'"She’s a bit flighty and always pushing me to do things like go out or socialize with people, but she means well."',
		'j Sorry, sorry, lol.',
		'j But just my two cents...',
		'j If you want Mr. Prince Charming-knight-in-shining-armor, you have to get out of your tower, princess.',
		'p If you say so...',
		'j I know so, bestie.',
		'j Speaking of which, you get that job at Pixii Boutique yet? Cuz I saw a handbag in their window that is totes to die for!',
		'p You know employee discounts are for employees, not their friends, right?',
		'j Come ooooooooooooooooooon! Please?',
		'p If I’m hired, I’ll see what I can do.',
		'j Yay! You’re the bestest bestie ever, bestie!',
		'A notification appears on {{player.name}}’s phone.',
		'p Oh, that’s them now.',
		'{{player.name}} reads from their phone',
		'p Hmm...',
		'p Seems they want me for the interview!',
		'j Oh my gosh, that’s amazing!',
		'{{player.name}} worries',
		'j ...',
		'j You don’t look very amazed.',
		'p It’s been a while since I had a job, much less retail.',
		'p They may not even hire-',
		'j {{player.name}}, don’t you do it.',
		'p Do what?',
		'j Worry yourself out of another opportunity!',
		'j You’re gonna go in there and show them who’s boss!',
		'p ...',
		'p The manager?',
		'j No, I mean you!',
		'j You are going to totes crush that interview! Just believe in yourself and be confident!',
		'p R-Right...',
		'j So, when’s your interview?',
		'p Well, it says here--',
		'p IN TWO HOURS?!',
		'j Yay! Shopping trip!',
	],
});
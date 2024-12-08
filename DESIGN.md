discusses, technically, how you implemented your project and why you made the design decisions you di
consider your design document your opportunity to give the staff a technical tour of your project underneath its hood.

Structure:
My project consists of individual room files (like room1.html, room2.html, finalroom.html, etc.) Each room offers a distinct puzzle or story beat. Each rom also has a background image relevant to its content (either based on the story information it provides or the puzzle/riddle it presents) and interactive elements that respond to user input. My project has a sequential flow. Just like in a real escape room, only once you solve the puzzle/challenge can you proceed to the next one. Here, once you solve the puzzle, a success message pops up and a button that will redirect you to the next room (that was previously hidden using CSS) appears. 

CSS Styling/Bootstrap: 
I designed the CSS with the intention to make the rooms very visually immersive. That's why I used very bold and unique background images that reflect the theme of the room, like the realistic red flames for the second room and the taxidermy workshop for the third room. I also used Bootstrap for interactive elements like the buttons to make them more visually appealing and readable. Also, I utilized CSS animations such as shake to give dynamic feedback (for example, if you input an incorrect answer to a riddle in the second room, the answer box would "shake") to the user. 

JavaScript Logic:
I mainly used JavaScript to make Escape the Museum much more interactive. Every puzzle in the game is associated with a function that responds to user input is correct. For example, for the first room, every action (i.e. clicking the lock, picking up the key, etc.) showed a message that informed the user what they did and hinted at the next action they should take. Also, in the room 3, I designed the drop-and-drop functionality using mouse events. To do that without relying on external libraries, I worked with custom mouse events and manually calulated positions. Each page also has two buttons in the bottom left that can play or sto the background. I used JavaScript to create an embedded iframe for playing the background music and two functions (playAudio and stopAudio) to send messages to this iframe to control the playback. 

Scalability:
I could scale up this project by adding more rooms.puzzles. Since each room is self-contained, adding new rooms would not interfere with exisiting functionality. 

Responsiveness: 
To ensure that Escape the Museum is responsive across different devices and browser sizes, I used the <meta> tag viewport to make sure the page scales correctly on mobile devices and the page doesn't get too large on smaller screens. Also, I used Flexbox to manage the layout because it dynamically adjusts elements based on screen size, making sure that content remains centered and spaced appropriately no matter how big the screen is. Finally, I utilized relative CSS units (i.e. width: 100%) so the elements would scale fluidly even when the window is resized. 
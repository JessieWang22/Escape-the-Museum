Hello! Thank you for reviewing my final project: Escape the Museum!

Video Link: https://youtu.be/8_kHgQ7mkk8

GitHub Link: https://github.com/JessieWang22/Escape-the-Museum 

General Overview:
Escape the Museum is designed to be an interactive web-based virtual escape room. It is set in a haunted museum and reveals more about the setting and backstory as the game goes on. Players move through the rooms by solving ancient riddles and completing challenges, making Escape the Museum highly interactive with elements like drag-and-drop functionality and audio controls (for starting and stopping the creepy ambient background music). I developed the game using HTML, CSS, and JavaScript. Each room has its own HTML structure and there is custom styling for each room and global styles for buttons, fonts, the layout, etc. I use JavaScript to handle the new room's logic (including riddle logic, music, and escape logic)

I wanted to ensure that every "room" ties back to the fact that the game is set in a museum to make the game more consistent and immersive. That is why the riddles are all pulled from historical periods and places like Ancient Sumeria and Medieval England (since they are supposed to be from different exhibits) and why I coded for a taxidermy room (since museums commonly display taxidermied animals) and etc.

Set-Up/Usage:
To play this game, you need a modern web browser like Chrome or Firefox or Safari. You can start by cloning the repository (using something like git clone https://github.com/___) AND OPENING entryroom.html. That is important: OPEN entryroom.html TO START!!!!!!

Walking Through the Game(Includes spoilers and answers):
- Entryroom: Once you load the page, you will be in the entryroom. Here, you meet Selena and get a little overview about the museum. However, Selena gets kidnapped and you have no choice but to follow her by clicking the "Follow Selena" button near, entering the first room.
- Room 1: You get a glimpse of Selena's kidnapper before you fall unconscious. You wake up in a prison cell. If you click on the lock, you get a message telling that there's a keyhole on the bottom of the lock, indicating that we should be looking for a key. The key is located on the bottom left of the page (if the browser is small enough, it will require the user to scroll down to find the key, which makes it harder). If you click on the key, you get the message "A rusty old key. No way...could it be? You put it in your pocket" and the key disappears. If you click on the lock AFTER you have picked up the key, you get a message saying that the lock opens and a button saying "Escape the Cell" appears, leading you to the next room. 
- Room 2: Next, you enter the historical exhibits section of the museum, only to find that it is on fire! I added this element to create tension. You need to answer three riddles from historical periods and places in order to proceed. The origin of the riddles are in parentheses after each riddle. If you answer a riddle incorrectly, the container of the riddles will shake and an omnious message will warn you that you are incorrect and that danger is imminent. After you answer all the riddles correct, a button that says "Flee the Flames" appears and you can proceed.
- Room 3: You stumble into the hall of taxidermied animals. You see four images of taxidermy supplies and an outline of a deer taxidermy mount. You need to drag the deer head and the glass eyes to the middle (on top of the outline) to solve the puzzle for the button to escape to the next page. 
- Final Room: You finally escape! You learn about how vampires invaded and cursed the museum. 

Debugging/Possible Questions:
- My audio is not playing
Double-check that the browser you are using allows autoplay and your volume is not muted (since the background music plays automatically).
- I'm struggling with the drag-and-drop feature. 
Refresh your page. If that doesn't work, check if JavaScript is enabled on your browser of choice. 

Just in general, like with many things in life, a good refresh can solve many issues :D 

VIDEO LINK (again): https://youtu.be/8_kHgQ7mkk8



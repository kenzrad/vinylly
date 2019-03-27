# vinylly

Vinylly will be an app that visually enhances the musical listening experience using the vintage vibes of vinyl. This app will allow a user to play on a record player in the comfort of their own computer or mobile device, without having to learn how to use those fancy record player thingamajigs. 

The primary focus of this project will be 1) the visual appeal of the UI and 2) the functionality of the record player. We will use Spotify as our primary API. Options for other APIs include where someone can get tickets to see the band, where they can buy their merch, or where they can find the band bio. Perhaps even will take them to Amazon where they can purchase the record (and a record player to go along with it!)

User Interface breakdown:
-The website will display album artwork at the top of the page, and a birds-eye image of an empty record player at the bottom of the page
-The user will be able to select an album for listening by clicking on the album (artwork). 
-The on click will toggle the record out of the record sleeve and the user will be able to see both the record and the album sleeve. 
-Upon clicking the record, the record will move to the record player
-This will trigger a "click" noise, and the record will begin to spin at a constant rate
-The needle will move to the outer edge of the record (XX degree rotation)
-The spotify API will then generate the song and it will begin to play
-The needle will move from the starting "edge" position to the center of the record at a rate determined by the length of the song (e.g., 1 degree per 20 seconds)
-When the song is over, the needle will return to "home" position and the record will stop spinning
-The user can choose to play the record again or return the record to the record sleeve
-If the user wants to return the record to the record sleeve, they can click the record
-If the user wants to play again, they can select the play button (a choice of buttom will be displayed at the bottom of the page, potentially)

Options for additional requirement:
-Explore libraries for animation, perhaps utilize SVG or Canvas (drawing and animation on website)
-Incorporate a firebase database that stores the users library (how many times they've listed to a song, or what songs they've added to their library, etc.)
-Utilize a second API for user shopping. Exploring the idea of this taking them to Amazon to purchase the album or a record plauyer (or both); or taking them to Ticketmaster; or something of that sort; alternatively the user can select a background image from an image API to display behind their record player (or record player "skins")
-Validation: user can select a genre prior to entering the "Record room"; if the genre is not valid or not available (because we didn't plan for it in our code), they will be asked to make another select (and perhaps a suggestion will be provided)

Things to do if time allows:
1) Background fades and the user can select stay here or select new genre
2) Queue song option (fancy)
3) Add buttons for pause/play
4) Hover controls for pause/play/shop/stop functionality
5) Add a RPM option to increase speed of the spinning and song
6) Add record sounds (click, white noise, speaker clap, etc.)
7) Record "wobble"
8) Check out modals for user input (song selection, feedback, etc.)
9) Mobile responsiveness -- likely will be played on someones phone

#Frågor att besvara i mitten av projektet.
<br>
<br>
# 1. Vilken extra funktionalitet har du tänkt implementera?
<br>
<br>
Svar: Jag har tänkt att efter jag klarat av grunden är att lägga till en visuell representation av hur gubben hängs. Men jag har också tänkt att fråga användaren ifall denne vill spela igen eller inte
<br>
<br>
# 2.Vilka variabler behöver du och till vilket syfte? Här vill jag ha med variabelnamn, datatyp och en förklaring på vad variabeln är till för - på varje variabel.
<br>
<br>
Svar: Dem variabler som jag har med i min kod är till dem arrayer där jag kommer pusha korrekta svar samt okorekta svar. Jag har även variabler till min min random word funktion där det finns en varibel till sjävla randomize delen samt en variabel till att dela upp ordet så man kan jämföra ordet mot vad användaren gissar.
<br>
<br>
# 3.Vilka olika konstrollstrukturer behövs och till vilket syfte? (Loopar, villkor, etc.) Var så detaljerad som möjligt.
<br>
<br>
Svar: Jag har en for loop till min random words funktion som gör att ordet inte random ordet randomiseras efter varje gissning som användaren gör. Det var ett problem innan, att ordet hela tiden slumpades efter varje gissning som användaren gjorde. Jag har en loop som går igenom mitt slumpade tal och sedan konverterar det till '_' som sedan fylls i av dem gissningar som är korrekta. 
<br>
<br>
Jag har även en major if sats där jag definerar hur många gissningar som användaren ska ha. Om användaren gissar rätt kommer bokstaven pushas till en array för rätta gissningar och samma sak när användaren gissar fel kommer det pushas till en array med felaktiga gissningar. I denna IF kommer gissningarna att minska för varje felaktig gissningarna. I denna IF skrivs det även ut vilka gissningar som användaren har gjort, både fel och korrekta. Jag skriver även ut hur många gissningar som användaren har kvar.
<br>
# 4.Vilken funktionalitet kan (och borde) du skapa funktioner av? Här vill jag ha funktionsnamn, returtyp, eventuella parametrar samt vad funktionen ska göra.
<br>
<br>
Svar: Min första funktion heter introductionToPLayer och innehåller console.log med beskrivning över hur spelet kommer gå till för användaren.
<br>
<br>
Funktionen som heter setUp innehåller funktionen introductionToPlayer samt variabler som har en .splice, wrongTries varibeln samt funktionen randomWords som slumpar fram ett random ord från en array. Jag har gjort en funktion som heter plyerGuess som innehåller en loop som går igenom mitt slumpade tal samt en stor IF sats
<br>
<br>
# 5.Vilka variabler behöver vara åtkomliga inom hela klassen?
<br>
<br>
Svar: De variabler som behöver vara åtkomliga i hela programmet är wrongTries som är hur många försök användaren har på sig att gissa ordet. Tre andra variabler som behöver kommas åt under hela programmet är rightGuesses, wrongGuesses. rightGuesses används för att pusha användarens felgissnigar. 
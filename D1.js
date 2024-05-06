/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.

*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* 
  -variabile numerica: un numero, in fase di dichiarazione o assegnazione non si scrive tra virgolette
    es: let n=7;
  -variabile stringa: un insieme di caratteri, il contenuto si racchiude tra apici in fase di dichiarazione o assegnazione
    es: let string="ciao"; 
  -variabile booleana: può assumere solo valore true(1) o false(0)
    es: let check=true;
  -costante: le costanti possono essere di tipo numerico, stringa o booleana ma hanno valore fisso
    es: const prova=3; 
  -keyword null (assenza di valore) e undefined (indefinito)
    es: let nome = null;
    */

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let myName = "Alex";

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/
let n1 = 12;
let n2 = 20;
console.log("La somma è: ", n1+n2);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let x=12

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
myName = "Di Gioia";

/*const c = 10;
let c = 20;*/ //ritorna errore come da consegna

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("La differenza è: ", 4-x);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name1 = "john";
let name2 = "John";
let diversi = false;
let lowercase = false;

if (name1==name2) 
  diversi = false;  
else diversi = true;

if (diversi)
  console.log("name1 e name2 sono diversi");
else console.log("name1 e name2 sono uguali");

if (name1===name2 && name2==="john") 
  lowercase = true;  
else lowercase = false;

if (lowercase)
  console.log("name1 e name2 sono uguali e in minuscolo");
else console.log("name1 e name2 sono diversi o non in minusculo");
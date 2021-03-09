// Getting DOM properties

const paragraphe = document.querySelector('.paragraph');
const  caracters = document.querySelector('#caracters');

const text = " First World War (1914-18) set the stage for another international conflict—World War II—which broke out two decades later and would prove even more devastating. Rising to power in an economically and politically unstable Germany, Adolf Hitler, leader of the Nazi Party, rearmed the nation and signed strategic treaties with Italy and Japan to further his ambitions of world domination. Hitler’s invasion of Poland in September 1939 drove Great Britain and France to declare war on Germany, marking the beginning of World War II. Over the next six years, the conflict would take more lives and destroy more land and property around the globe than any previous war. Among the estimated 45-60 million people killed were 6 million Jews murdered in Nazi concentration camps as part of Hitler’s diabolical “Final Solution,” now known as the Holocaust.The devastation of the Great War (as World War I was known at the time) had greatly destabilized Europe, and in many respects World War II grew out of issues left unresolved by that earlier conflict. In particular, political and economic instability in Germany, and lingering resentment over the harsh terms imposed by the Versailles Treaty, fueled the rise to power of Adolf Hitler and National Socialist German Workers’ Party, abbreviated as NSDAP in German and the Nazi Party in English..";
const order =5;
let ngrams = {};

for (let index = 0; index <= text.length - order; index++) {
    const gram = text.substring(index, index + order);
    if (!ngrams[gram]){
        ngrams[gram]=[];
    }
    ngrams[gram].push(text.charAt(order + index));
}
// console.log(JSON.stringify(ngrams));

ngrams = JSON.stringify(ngrams);
// console.log(ngrams);



const generateText =()=>{
    let randomStart = Math.floor(Math.random() * text.length);
    let currentGram = text.substring(randomStart ,order + randomStart);
    let result = currentGram ;
    for (let i = 0; i < caracters.value ; i++) {
    
        const possibilities = JSON.parse(ngrams)[currentGram];
        const  next = possibilities[Math.floor(Math.random() * possibilities.length)];
        result += next ;
        currentGram =result.substring(result.length - order , result.length);
    }

    // return result ; 

    paragraphe.innerHTML = result;
}
const result = generateText();
console.log(result);

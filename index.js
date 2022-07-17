//oznacenie label 
const label1 = document.getElementById('label1');

//spustenie casu
update();

//automaticky update casu kazdych 1000 ms co je 1s
setInterval(update, 1000);

//funkcia pre zobratie casu
function update(){
    let date = new Date();
    label1.innerHTML = formatDate(date);

    //formatovanie casu
    function formatDate(date){
        let hodiny = date.getHours();
        let minuty = date.getMinutes();
        let sekundy = date.getSeconds();
        
        //formatovanie casu
        hodiny = formatNuly(hodiny);
        minuty = formatNuly(minuty);
        sekundy = formatNuly(sekundy);

        return `${hodiny} : ${minuty} : ${sekundy}`
    }  

    //nastavenie casu aby tam boli nuly
    function formatNuly(cas){
        cas = cas.toString();
        return cas.length < 2 ? "0" + cas : cas;
    }
}
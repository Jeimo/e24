function renderDiv(){
    for(i=1;i<4;i++){
        cardClass = "card text-light mb-2 ";
        switch(i){
            case 1:
                cardClass += "bg-primary";
                unitLabel = "Grams: ";
                unitAbrev = "gm";
                break;
            case 2:
                cardClass += "bg-success";
                unitLabel = "Kilograms: ";
                unitAbrev = "kg";
                break;
            case 3:
                cardClass += "bg-danger";
                unitLabel = "Ounces: ";
                unitAbrev = "oz";
                break;
            default:
                cardClass = "";
        }

        document.write(`
            <div id="card_${i}" class="${cardClass}">
                <div class="card-body">
                    <h4>${unitLabel}</h4>
                    <div id="${unitAbrev}Output"></div>
                </div>
            </div>
        `);
    }

    document.getElementById("result").style.visibility = "hidden";
    document.getElementById("lbsInput").addEventListener(
        "input",
        function(e){
            let lbs = e.target.value
            document.getElementById("result").style.visibility = "visible";
            document.getElementById("gmOutput").innerHTML = lbs/0.00220462;
            document.getElementById("kgOutput").innerHTML = lbs/2.20462;
            document.getElementById("ozOutput").innerHTML = lbs*16;
        }
    );
}
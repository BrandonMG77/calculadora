'use strict'

sessionStorage.setItem("user", "Current User");
console.log(sessionStorage);
// Retrieve


let inputCopy = false;
let memory = false;
let mas = false;
let saving_result = false;
let globalResults = [];
let globalResults2 = [];
let printResults = false;
let arrayPrint = [];
let arraySum = 0;


document.querySelector('#add').addEventListener('click', function () {


    mas = document.querySelector('.operation').value;
    document.querySelector('.operation').value = mas + ' + ';



});

document.querySelector('#minus').addEventListener('click', function () {


    let minus = document.querySelector('.operation').value;
    document.querySelector('.operation').value = minus + ' - ';



});
document.querySelector('#multiply').addEventListener('click', function () {


    let multiply = document.querySelector('.operation').value;
    document.querySelector('.operation').value = multiply + ' * ';



});
document.querySelector('#division').addEventListener('click', function () {


    let division = document.querySelector('.operation').value;
    document.querySelector('.operation').value = division + ' / ';



});

document.querySelector('#change').addEventListener('click', function () {


    let cambio = prompt('Pago con:');
    let vuelto = cambio - inputCopy;
    
    document.getElementById('operation_result').innerHTML = 'Monto a pagar ' + inputCopy + ' ' + '<br>'+
    'Pagó con ' + cambio + ' ' + '<br>'+ 
     'El vuelto es de ' + vuelto;



});

document.querySelector('#delete').addEventListener('click', function () {



    document.querySelector('.operation').value = '';
    document.getElementById('operation_result').innerHTML = 0;
    saving_result = false;


});

document.querySelector('#result').addEventListener('click', function () {

    let paragraph = document.getElementById("operation_result");
    // let text = document.createTextNode(inputCopy);

    memory = (document.querySelector('.operation').value);
    inputCopy = eval(memory);

    //paragraph = document.getElementById("operation_result");
    //text = document.createTextNode(inputCopy);
    //paragraph.appendChild(text);

    document.getElementById('operation_result').innerHTML = inputCopy;

    saving_result = inputCopy;


});

document.querySelector('#save').addEventListener('click', function () {
    let checkPantalla = false;
     checkPantalla = document.querySelector('.operation').value;
    
        if (checkPantalla == false) {

            alert('Debe digitar una operación o un monto y presionar resultado antes de guardar');

        } else {

            
    let save = prompt('Resultado ' + inputCopy + ' | ' + new Date() + ' Indique el nombre de la persona');
    /*
    paragraph = document.getElementById("operation_result");
    text = document.createTextNode(0);
    paragraph.replaceWith(text);
*/

    /*
        let sp1 = document.createElement("span");
        sp1.setAttribute("id", "newSpan");
        let sp1_content = document.createTextNode("");
        sp1.appendChild(sp1_content);
        let sp2 = document.getElementById("operation_result");
        let parentDiv = sp2.parentNode;
        parentDiv.replaceChild(sp1, sp2);
    */

            if (save) {

                
                let array1 = [save, saving_result, new Date(), '<br>'];
                arrayPrint = [save, saving_result, new Date(), '\n'];
               
                arraySum = arraySum + saving_result;
            
                globalResults.push(array1.join(' '));
                globalResults2.push(arrayPrint.join(' '));
            
                // Cambios en el html 2 fase
                document.getElementById('operation_result').innerHTML = `Usuario ${save} salvado con éxito`;
                document.querySelector('.operation').value = '';
            
            
                // Imprimir todo
            
            
            
                document.getElementById('show_history').innerHTML = globalResults.join("");
            
                /*
                    for (let i in globalResults) {
                
                        for (let z = 0; z < 3; z++) {
                
                    
                            console.log(globalResults[i][z]);
                
                        }
                
                    }
                */


            } else {

                alert('Debe digitar un nombre!');

            }

            
        }




    // Arrays 1 fase
   

});


/*
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
});

*/

document.querySelector('#saveDay').addEventListener('click', function () {

    let sumaTotalDia = 0;
    let textoSuma = 0;
    
    
    textoSuma = 'La suma total del día es ' + arraySum + '\n';
    
    globalResults2.unshift(textoSuma);

   printResults = globalResults2.join("");

   var doc = new jsPDF('p', 'in', 'letter'),
  sizes = [12, 16, 20],
  fonts = [['Times', 'Roman']],
  font, size, lines,
  margin = 0.5, // inches on a 8.5 x 11 inch sheet.
  verticalOffset = margin,
  loremipsum = printResults;

// Margins:
doc.setDrawColor(0, 255, 0)
	.setLineWidth(1 / 72)
	.line(margin, margin, margin, 11 - margin)
	.line(8.5 - margin, margin, 8.5 - margin, 11 - margin)

// the 3 blocks of text
for (var i in fonts) {
  if (fonts.hasOwnProperty(i)) {
    font = fonts[i]
    size = sizes[i]

    lines = doc.setFont(font[0], font[1])
					.setFontSize(size)
					.splitTextToSize(loremipsum, 7.5)
		// Don't want to preset font, size to calculate the lines?
		// .splitTextToSize(text, maxsize, options)
		// allows you to pass an object with any of the following:
		// {
		// 	'fontSize': 12
		// 	, 'fontStyle': 'Italic'
		// 	, 'fontName': 'Times'
		// }
		// Without these, .splitTextToSize will use current / default
		// font Family, Style, Size.
    doc.text(0.5, verticalOffset + size / 72, lines)

    verticalOffset += (lines.length + 0.5) * size / 72
  }
}


    // Default export is a4 paper, portrait, using millimeters for units
   
    
    
    doc.save(`${new Date()}`);


});




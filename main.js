const dinosaurs = [ 
    {type: 't-rex', name: 'Wrex'},
    {type: 'stegosaurus', name: 'Steve'},
    {type: 'velociraptor', name: 'Ted'}
];

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;


}
const buildDinosaurCards = () => {
    let domString = '';
    for(let i = 0; i < dinosaurs.length; i++){
        domString += '<div class = "dinosaur">';
        domString += `<h3>${dinosaurs[i].type}</h3>`;
        domString += `<p>Name: ${dinosaurs[i].name}</p>`;
        domString += '</div>';
    }
    
printToDom('dino-barn', domString);
};

buildDinosaurCards();

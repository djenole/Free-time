const toggles = document.querySelectorAll('.toggle');
const programar = document.querySelector('#programar');
const comerBatata = document.querySelector('#comerBatata');

toggles.forEach(toggle => toggle.addEventListener('change', (e) => doTheTrick(e.target)));

function doTheTrick(theClickedOne) {
    if(programar.checked && comerBatata.checked) {
        if(programar === theClickedOne) {
            comerBatata.checked = false
        };

        if(comerBatata === theClickedOne) {
            programar.checked = false
        };

       
    };
};
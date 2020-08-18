// Blocked by CORS
// const url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQz80LDkKQWGC01dK_ssttOmgsMLbVeC2tsoa3qI_hOaw0qMUT5tq5BkgOlLmBFBRBQkF9fMbpXMwvS/pub?output=csv';

// const get_data = async (url) => {
//     let response = await fetch(url);
//     let csv = await response.text();
//     return csv; 
// }

// get_data(url).then(csv => {
//     console.log(csv);
// });

let form = document.getElementById('form');

form.onsubmit = e => {
    e.preventDefault();
    console.log(form.submitter);
    if(form.submitter === 'add') {

    } else {

    }
}

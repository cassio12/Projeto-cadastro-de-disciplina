const firebase = require("firebase");
require("firebase/firestore");

import firebase from "firebase/app";
import "firebase/database";

let db = firebase.firestore();

let submit = document.getElementById('btnSubmit')

firebase.initializeApp({
    apiKey: 'AIzaSyDJ0U7cCG-HNw_5wfF-K6IGkgz5tPgmYgE',
    authDomain: 'disciplina-facil.firebaseapp.com',
    projectId: 'disciplina-facil'
});
  
submit.addEventListener('click', function() {
    const nameProfessor = document.getElementById('name').value
    const startTime = document.getElementById('start').value
    const endTime = document.getElementById('end').value
    const days = document.getElementById('days').value
    const matter = document.getElementById('matter').value

    writeUserData(nameProfessor, startTime, endTime, days, matter)
    
    db.collection("available").add({
        professorname: nameProfessor,
        inicio: startTime,
        fim: endTime,
        dia: days,
        disciplina: matter,
    })
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
        console.log('materia salva') 
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
})

// let starCountRef = firebase.database().ref('posts/' + postId + '/starCount');
// starCountRef.on('value', (snapshot) => {
//   const data = snapshot.val();
//   updateStarCount(postElement, data);
// });


// function writeUserData(name, startTime, endTime, days, matter) {
//     firebase.database().ref('professors/' + name).set({
//         professorname: name,
//         email: email,
//         inicio: startTime,
//         fim: endTime,
//         dia: days,
//         disciplina: matter, 
//     });
// }
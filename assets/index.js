import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore"

main = () => {
    let config = {
        apiKey: "apiKey",
        authDomain: "projectId.firebaseapp.com",
        databaseURL: "https://databaseName.firebaseio.com",
        storageBucket: "bucket.appspot.com"
    };
    firebase.initializeApp(config)
    
    let database = firebase.database()

    const firebaseConig = {

    }
    firebase.initializeApp(firebaseConfig);

    saveData = () => {
        const nameProfessor = document.getElementById('name').value
        const startTime = document.getElementById('start').value
        const endTime = document.getElementById('end').value
        const days = document.getElementById('days').value
        const matter = document.getElementById('matter').value
    
        let info = {
            nome: nameProfessor,
            inicio: startTime,
            fim: endTime,
            dia: days,
            disciplina: matter, 
        }

        return info
    }

    createCard = () => {
        document.createElemente 


        saveData()
    }


}

main()

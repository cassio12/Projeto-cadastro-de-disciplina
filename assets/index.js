import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore"

main = () => {

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
    const firebaseConig = {

    }
    firebase.initializeApp(firebaseConfig);

    let config = {
        apiKey: "",
        
    }

}

main()

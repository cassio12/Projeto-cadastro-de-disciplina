// import firebase from "firebase/app";
// import "firebase/analytics";

// import "firebase/auth";
// import "firebase/firestore";

let inputValue = document.getElementsByClassName('entrada_tabela')

main = () => {
    editarTabela = () => {  
        console.log(inputValue[0].disabled)
        for(let i = 0; i < inputValue.length; i++) {
            if(inputValue[i].disabled === true){
                inputValue[i].disabled = !inputValue[i].disabled
                console.log(inputValue[0].disabled)
            }
        }
    }

    salvarMateria = () => {
        console.log(inputValue[0].disabled)
        for(let i = 0; i < inputValue.length; i++) {
            if(inputValue[i].disabled === false){
                inputValue[i].disabled = !inputValue[i].disabled
                console.log(inputValue[0].disabled)
            }
        }
    }


    // let firebaseConfig = {
    //     apiKey: "AIzaSyDJ0U7cCG-HNw_5wfF-K6IGkgz5tPgmYgE",
    //     authDomain: "disciplina-facil.firebaseapp.com",
    //     databaseURL: "https://disciplina-facil-default-rtdb.firebaseio.com",
    //     projectId: "disciplina-facil",
    //     storageBucket: "disciplina-facil.appspot.com",
    //     messagingSenderId: "669796964712",
    //     appId: "1:669796964712:web:82bd85c5d71bc92b5c5edd",
    //     measurementId: "G-REEWT5VMGX"
    // };
    // firebase.initializeApp(firebaseConfig);
    // firebase.analytics();

}

main()

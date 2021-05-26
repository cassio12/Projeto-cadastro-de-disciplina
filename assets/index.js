// import firebase from "firebase/app";
// import "firebase/analytics";

// import "firebase/auth";
// import "firebase/firestore";

let materias = [
    {
        segundaH1: 'gerencia de progetos',
        segundaH2: 'gerencia de progetos',
        segundaH3: 'gerencia de progetos',
        segundaH4: 'gerencia de progetos',
        segundaH5: 'gerencia de progetos',
    },
    {
        tercaH1: 'compiladores',
        tercaH2: 'compiladores',
        tercaH3: 'compiladores',
        tercaH4:null,
        tercaH5:null,
    },
    {
        quartaH1:null,
        quartaH2:null,
        quartaH3:null,
        quartaH4:null,
        quartaH5:null,
    },
    {
        quintaH1:null,
        quintaH2:null,
        quintaH3:null,
        quintaH4:null,
        quintaH5:null,
    },
    {
        sextaH1:null,
        sextaH2:null,
        sextaH3:null,
        sextaH4:null,
        sextaH5:null,
    },
]

let horarios = {
    primeiroH: '',
    segundoH: '',
    terceiroH: '',
    quartoH: '',
    quintoH: '',
}

let disponibilidadeList = {
    nome: null,
    inicio: null,
    fim: null,
    dia: null,
    materia: null,
}

let inputValue = document.getElementsByClassName('entrada_tabela')
let saveBtn = document.getElementById("saveBtn")
let editBtn = document.getElementById("editBtn")
let submit = document.getElementById('btnSubmit')

let segunda1 = document.getElementById('segundaHora1')
let segunda2 = document.getElementById('segundaHora2')
let segunda3 = document.getElementById('segundaHora3')
let segunda4 = document.getElementById('segundaHora4')
let segunda5 = document.getElementById('segundaHora5')

let terca1 = document.getElementById('tercaHora1')
let terca2 = document.getElementById('tercaHora2')
let terca3 = document.getElementById('tercaHora3')
let terca4 = document.getElementById('tercaHora4')
let terca5 = document.getElementById('tercaHora5')

let quarta1 = document.getElementById('quartaHora1')
let quarta2 = document.getElementById('quartaHora2')
let quarta3 = document.getElementById('quartaHora3')
let quarta4 = document.getElementById('quartaHora4')
let quarta5 = document.getElementById('quartaHora5')

let quinta1 = document.getElementById('quintaHora1')
let quinta2 = document.getElementById('quintaHora2')
let quinta3 = document.getElementById('quintaHora3')
let quinta4 = document.getElementById('quintaHora4')
let quinta5 = document.getElementById('quintaHora5')

let sexta1 = document.getElementById('sextaHora1')
let sexta2 = document.getElementById('sextaHora2')
let sexta3 = document.getElementById('sextaHora3')
let sexta4 = document.getElementById('sextaHora4')
let sexta5 = document.getElementById('sextaHora5')

main = () => {
    function atualisaTabela() {
        console.log( materias[1].tercaH1)
        segunda1.value = materias[0].segundaH1
        segunda2.value = materias[0].segundaH2
        segunda3.value = materias[0].segundaH3
        segunda4.value = materias[0].segundaH4
        segunda5.value = materias[0].segundaH5

        terca1.valeu = materias[1].tercaH1 
        terca2.valeu = materias[1].tercaH2 
        terca3.valeu = materias[1].tercaH3
        terca4.valeu = materias[1].tercaH4 
        terca5.valeu = materias[1].tercaH5 
    }
    atualisaTabela()

    
    editBtn.addEventListener('click', () => {  
        for(let i = 0; i < inputValue.length; i++) {
            if(inputValue[i].disabled === true){
                inputValue[i].disabled = !inputValue[i].disabled
            }
        }
    })
    
    saveBtn.addEventListener('click', () => {
        for(let i = 0; i < inputValue.length; i++) {
            if(inputValue[i].disabled === false){
                inputValue[i].disabled = !inputValue[i].disabled
            }
        }
    })
    
    segunda1.addEventListener('change', () => {
        // console.log(segunda1.value )
        materias[0].segundaH1 = segunda1.value
    })
    
    
    submit.addEventListener('click', function() {
        const nameProfessor = document.getElementById('name').value
        const startTime = document.getElementById('start').value
        const endTime = document.getElementById('end').value
        const days = document.getElementById('days').value
        const matter = document.getElementById('matter').value

        disponibilidadeList.name = nameProfessor
        disponibilidadeList.inicio = startTime
        disponibilidadeList.fim = endTime
        disponibilidadeList.dia = days 
        disponibilidadeList.materia = matter

    })    

    
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

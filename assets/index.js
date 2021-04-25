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
}

main()

window.addEventListener('load', ()=> {
    //referenciamos a los elementos del DOM
    const formCreate = document.getElementById('form-create')
    const toDoList = document.getElementById('to-do-list')
    const inputCreate = document.getElementById('create')
    const inputSearch = document.getElementById('search')
    /* Procedimiento para el ALTA */
    formCreate.addEventListener('submit', (e)=>{
        e.preventDefault()
        capturarValor()        
    })
    const capturarValor = ()=> {
        const tareaNombre = inputCreate.value.trim();
        (tareaNombre.length) ? mostrarTareaHtml(tareaNombre) : alert('You must enter a task')         
    }
    const mostrarTareaHtml = (tarea)=> {
        const liHtml = `<li><strong>${tarea}</strong><i class="fas fa-minus-circle delete"></i></li>`
        toDoList.innerHTML += liHtml
    }
    /* Procedimiento para el BUSCAR */
    inputSearch.addEventListener('keyup', ()=>{
        const character = inputSearch.value.trim()
        search(character)
    })
    const search = (cadena)=>{
        //console.log(toDoList.children)
        let arreglo = Array.from(toDoList.children)
        //console.log(arreglo)
        arreglo
            .filter(text => !text.textContent.toLowerCase().includes(cadena))                   
            .forEach(cadenaFiltrada => {
                cadenaFiltrada.classList.add('filterText')
            })
        arreglo
            .filter(text => text.textContent.toLowerCase().includes(cadena))                   
            .forEach(cadenaFiltrada => {
                cadenaFiltrada.classList.remove('filterText')
            })
    }
    /* Procedimiento para BORRAR */
    toDoList.addEventListener('click', (e)=> {
        //console.log(e.target.classList)
        //console.log(e.target.parentElement)
        if(e.target.classList.contains('delete')){
            e.target.parentElement.remove()
        }
        inputSearch.value = ''
    })
})
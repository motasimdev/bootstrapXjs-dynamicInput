let inputName = document.getElementById("inputName")
let inputDescription = document.getElementById("inputDescription")
let allIn = document.getElementById("allIn")
let submitBtn = document.getElementById("submitBtn")

// =======================================

let arr = []

function display () {
    arr.map(item=>{
    
    allIn.innerHTML +=  `<div class="col-lg-3">
                    <div class="card" style="width: 18rem;">
                        <div class="card-body">
                            <h5 class="card-title">${item.name} </h5>
                            <p class="card-text">${item.description} </p>
                            <button class="btn btn-success">Edit</button>
                            <button class="btn btn-danger">Delete</button>
                        </div>
                    </div>
                </div>`
})
}

submitBtn.addEventListener("click", ()=>{
    arr.push({
        name: inputName.value,
        description: inputDescription.value
    })
    display()
})


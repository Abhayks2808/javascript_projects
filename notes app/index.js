let notes = []
shownotes()
let adnotesbtn = document.querySelector('#Adnotes')
adnotesbtn.addEventListener('click', function () {
    let addtextnotes = document.querySelector('#adtext');
    let value = addtextnotes.value;
    if (value) {
        notes.push(value)
        addtextnotes.value = "";
    }
    else {
        alert('please enter some text before cliking on Addnote')
        notes = []
    }
    shownotes()

})

function shownotes() {
    let html = "";
    notes.forEach((element, index) => {
        html += `  
         <div class="col-md-4 col-sm-12 my-2" id="notescard">
            <div class="card" >
               <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text" id="text">${element}
                    </p>
                <a href="#" class="btn btn-primary" id="${index}" onclick="deletenode(this.id)">Delete node</a>
            </div>
        </div>    
    </div>
 </div>
</div>  
`
    })

    let shownotes = document.getElementById('shownotes')
    if (notes.length !== 0) {
        shownotes.innerHTML = html;
    }
    else {
        shownotes.innerHTML = 'Nothing to show use add a note section';
    }

}

function deletenode(index) {

    notes.splice(index, 1)
    shownotes()
}


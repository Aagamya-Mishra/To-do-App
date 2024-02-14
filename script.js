const input = document.querySelector("input");
const task = document.querySelector(".task-container");


input.addEventListener("keyup",function(val){
    if(val.key == "Enter"){
        newTask(input.value)
    }
})

const newTask = (item) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
        ${item}
        <i class="fa-solid fa-xmark"></i>
    `
    input.value = '';
    listItem.style.padding = "5px";

    listItem.addEventListener("click",function(){
        this.classList.toggle("done");
        const done = document.querySelector(".done");
        done.childNodes[1].addEventListener("click",function(){
            listItem.remove();
        })

    })
    task.appendChild(listItem);
}

class TaskManager {

    constructor(column) {
        this.column = column;
        this.getUserTask = null;
        this.cancelBtn = null;
        this.addBtn = null;
    }


    getUserData() {
        const containerofgetUserTask = document.createElement("div");
        containerofgetUserTask.classList.add("containerofgetUserTask");
        const getUserTask = document.createElement("input");
        this.getUserTask = getUserTask;
        this.getUserTask.classList.add("getUserTaskUi");
        this.getUserTask.setAttribute("type", "text");
        this.getUserTask.setAttribute("placeholder", "Enter Your Task");

        setTimeout(() => {
            this.getUserTask.focus();
        }, 0);

        const addBtn = document.createElement('button');
        this.addBtn = addBtn;
        this.addBtn.classList.add("addBtnOfGetUserTask");
        this.addBtn.textContent = "Add";

        const cancelBtn = document.createElement('button');
        this.cancelBtn = cancelBtn;
        this.cancelBtn.classList.add("cancelBtnOfGetUserTask");
        this.cancelBtn.textContent = "Cancel";

        containerofgetUserTask.appendChild(this.getUserTask);
        containerofgetUserTask.appendChild(this.cancelBtn);
        containerofgetUserTask.appendChild(this.addBtn);
        document.body.appendChild(containerofgetUserTask);
    }


    addBtnofData() {

        this.addBtn.addEventListener("click", () => {
            const taskValue = this.getUserTask.value;
            if (taskValue.trim() !== "") {
                const task = document.createElement("div");
                task.classList.add("task");
                task.textContent = taskValue;
                task.setAttribute("draggable", true);
                this.column.querySelector(".tasks").appendChild(task);
                document.querySelector(".containerofgetUserTask").remove();
            }
        });

        this.getUserTask.addEventListener('keydown', (event) => {
            if (event.key === "Enter") {
                this.addBtn.click();
            }
        });
    }

    cancelBtnOfData() {
        this.cancelBtn.addEventListener("click", () => {
            document.querySelector(".containerofgetUserTask").remove();
        });
    }

}

export default TaskManager;

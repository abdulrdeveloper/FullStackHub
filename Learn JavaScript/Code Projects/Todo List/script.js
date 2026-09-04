    const createButtonRef = document.getElementById('createButton');
    const todoInput = document.getElementById('todoInput');
    const todoContainerRef = document.getElementById('todoContainer');

    createButtonRef.addEventListener('click', function () {
        const value = todoInput.value;
        console.log(value);

        if (todoInput.value === '') {
            return null;
        }
        else {
            const li = document.createElement('li');
            li.innerText = value;
            li.addEventListener('click', function () {
                li.classList.toggle('completed');
            });

            li.addEventListener('dblclick', function () {
                setTimeout(() => {
                    li.remove();
                    li = null;
                }, 200);
            })

            todoContainerRef.appendChild(li);
            todoInput.value = '';
        }
    });

    todoInput.addEventListener('keydown', function (eventCheck) {
        if (eventCheck.key === "Enter") {
            createButtonRef.click();
        }
    });

    (async () => {

        fetch('https://api.freeapi.app/api/v1/public/quotes', { method: 'GET' })

            .then(response => response.json())

            .then(data => {
                for (const fetchData of data.data.data) {
                    const li = document.createElement('li');
                    li.innerText = fetchData.content;
                    todoContainerRef.append(li);
                }
                
            })
    })()

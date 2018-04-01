let container = document.querySelector("#container")
let divInfo = document.createElement("div")
divInfo.className = "info"
container.appendChild(divInfo)

// retrieve data from json
axios.get("https://api.github.com/users/Maria108")
    .then((response) => {
        let data = response.data
        console.log(data.url)

        let divPic = document.createElement("div")
        divPic.className = "pic"
        container.appendChild(divPic)
        let img = document.createElement("img")
        divPic.appendChild(img)

        let repos = document.createElement("p")
        divInfo.appendChild(repos)


        img.src = data.avatar_url
        repos.innerHTML = `The amount of repositories: ${data.public_repos}`

    }).catch((error) => {
        console.log(error)
    })

axios.get("https://api.github.com/users/Maria108/repos")
    .then((response) => {
        let data = response.data
        console.log(data[0].owner.html_url)

        let onl = document.createElement("ol")
        divInfo.appendChild(onl)

        data.forEach((item, index) => {
            let list = document.createElement("li")
            onl.appendChild(list)

            list.innerText = `${data[index].name} `
            let a = document.createElement("a")
            a.className = "link"
            list.appendChild(a)
            a.setAttribute('href', data[index].html_url);
            a.innerHTML = data[index].html_url;
        })

        let divBtn = document.createElement("div")
        divBtn.className = "divBtn"
        divInfo.appendChild(divBtn)

        let button = document.createElement("a")
        button.className = "btn"
        button.setAttribute('href', data[0].owner.html_url);
        button.innerHTML = "Visit my GitHub";

        divBtn.appendChild(button);

    }).catch((error) => {
        console.log(error)
    })
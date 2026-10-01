

fetch("./experience.json")
.then(Response => Response.json())
.then(experiences => {
    const container = document.getElementById("experiences");

    experiences.array.forEach(element => {
        const expDiv = document.getElementById("div")
        expDiv.innerHTML = `<h3>${exp.title}</h3><p>${exp.date}</p>`;
        const tagContainer = document.createElement("div");

        exp.tags.forEach(tag => {
            const tagElement = document.createElement("span")
            tagElement.textContent = tag;
            tagElement.style.padding = "4px 8px";
            tagElement.style.margin = "4px";
            tagElement.style.background = "#eee";
            tagElement.style.borderRadius = "8px";
            tagContainer.appendChild(tagElement);

        });

        expDiv.appendChild(tagContainer);
        container.appendChild(expDiv)
    });
})
.catch(err => console.error("Error loading JSON:", err));

const fetchedDataArray = [];

async function handleTagsUrl() {
    const inputUrl = document.getElementById('TagsUrl').value;

    try {
        const response = await fetch("http://localhost:3000/getUrl");
        const data = await response.json();
        const resultTagsDiv = document.getElementById('resultTags');

        const createVoidDiv = document.createElement('div');
        for (const [key, value] of Object.entries(data)) {
            const tagP = document.createElement('p');
            tagP.textContent = `${key}: ${value}`;
            createVoidDiv.appendChild(tagP);
        }
        const tagSeparation = document.createElement('div');
        tagSeparation.classList.add('line');
        createVoidDiv.appendChild(tagSeparation);

        resultTagsDiv.appendChild(createVoidDiv);
        fetchedDataArray.push(data); 

        if (Array.isArray(resultTagsDiv.children)) {
            const lastTag = resultTagsDiv.children[resultTagsDiv.children.length - 1];
            lastTag.textContent = lastTag.textContent.replace(',', '');
        }
    } catch (e) {
        console.log(e);
    }
}

document.getElementById('submitButton').addEventListener('click', handleTagsUrl);

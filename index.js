TagsUrl()
async function TagsUrl() {
    try {
    const response =  await fetch("http://localhost:3000/getUrl")
    const data = await response.json()

    const resultTagsDiv = document.getElementById('resultTags');

    const createVoidDiv = document.createElement('div')
    for(const items of Object.entries(data)) {
        const tagP = document.createElement('p')
        tagP.textContent = `${items[0]}: ${items[1]}`
        createVoidDiv.appendChild(tagP)
    }
        
    resultTagsDiv.appendChild(createVoidDiv)
    
    
} catch (e) {
    console.log(e)
}
}



if (resultTags.length > 0) {
    const lastTag = resultTags[resultTags.length - 1];
    lastTag.textContent = lastTag.textContent.replace(',', '');
}

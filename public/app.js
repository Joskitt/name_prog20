function showName(name){
    const root = document.createElement('div')
    const text = document.createElement('h2')
    text.innerHTML = name + ' was here!'
    root.appendChild(text)
    document.body.appendChild(root)
}

showName('Christian')



showName("Ossi");


showName('Willi');

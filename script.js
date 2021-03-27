const home = document.querySelector('#home');
const delta = document.querySelector('#delta');
const links = document.querySelectorAll('.pseudo-nav-link');
const calcDelta = document.querySelector('#calc-delta');
const board = document.querySelector('#board');
const deltaExample = document.querySelector('#example');
const deltaExampleScore = document.querySelector('#score');
const deltaRoot = document.querySelector('#root');
const deltaInfo = document.querySelector('#info');
const content = document.querySelectorAll('#content');

const linksArr = Array.from(links);
const contentArr = Array.from(content);

const RES_INFO = {
    TwoAns: "Your function have 2 answers",
    OneAns: "Your function have 1 answer",
    NoAns: "Your function don't have answers",
}

const getData = () => {
    const data = [];
        data[0] = document.querySelector('#A').value;
        data[1] = document.querySelector('#B').value;
        data[2] = document.querySelector('#C').value;
        
    const deltaScore = data[1]**2-4*data[0]*data[2];

    const exampleText = `&trie; &#61; ${data[1]}&#178; &#8722; 4 &#215; ${data[0]} &#215; ${data[2]}`;
    deltaExample.innerHTML = exampleText;
    const score = `&trie; &#61; ${deltaScore}`;
    deltaExampleScore.innerHTML = score;

    if (deltaScore > 0) {
        const deltaRootR = Math.sqrt(deltaScore);
        const root = `&#8730;&trie; &#61; ${deltaRootR}`;
        deltaRoot.innerHTML = root;
        deltaInfo.innerText = RES_INFO.TwoAns;
    } else if (deltaScore == 0) {
        deltaInfo.innerText = RES_INFO.OneAns;
    } else {
        deltaInfo.innerText = RES_INFO.NoAns;
    }
    return deltaScore;
}

const routs = document.querySelectorAll('.routs-container > div');
const routsArr = Array.from(routs);

linksArr.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        
        routsArr.forEach(item => {
            item.classList.remove('active');
         })

        const targetId = (event.target.hash);
        const chuj = document.querySelector(targetId);
        chuj.classList.add('active')
            
        
        
    })
})

calcDelta.addEventListener('click', () => {
    getData();
})
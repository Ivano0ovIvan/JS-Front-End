async function solution() {

    const mainSection = document.getElementById('main');

    const getArticlesTitles = await fetch('http://localhost:3030/jsonstore/advanced/articles/list ');
    const artticlesTitles = await getArticlesTitles.json();

    Object.values(artticlesTitles).forEach((article, index) => {
        
        const div = document.createElement('div');
        
        div.className = 'accordion';
        div.innerHTML = `
        <div class="head">
            <span>${article.title}</span>
            <button class="button" id="${article._id}">More</button>
        </div>
        `;

        const moreBtn = div.querySelector('.button');
        moreBtn.addEventListener('click', (e) => {
            console.log(e.currentTarget)
            let hiddenText = document.querySelector('.extra')

            if (moreBtn.textContent === 'More') {
                moreBtn.textContent = 'Less';
                hiddenText.style.display = 'block'
            } else if (moreBtn.textContent === 'Less') {
                moreBtn.textContent = 'More';
                hiddenText.style.display = 'none'
            }
        })

        async function getMoreInfo() {
            
            const getArticleMoreInfo = await fetch(`http://localhost:3030/jsonstore/advanced/articles/details/${article._id}`);
            const articleMoreInfo = await getArticleMoreInfo.json();
            
            const currentArticleElement = document.getElementById(`${article._id}`).parentElement.parentElement
            const divExtra = document.createElement('div')
            divExtra.className = 'extra'
            const p = document.createElement('p')
            p.textContent = articleMoreInfo.content
            divExtra.appendChild(p)
            currentArticleElement.appendChild(divExtra)            
            

            // toggle();
        };

        getMoreInfo()

        function toggle() {
            
            let hiddenText = document.querySelector('.extra')

            if (moreBtn.textContent === 'More') {
                moreBtn.textContent = 'Less';
                hiddenText.style.display = 'block'
            } else if (moreBtn.textContent === 'Less') {
                moreBtn.textContent = 'More';
                hiddenText.style.display = 'none'
            }
        }
        
        mainSection.appendChild(div);
      
    });
}

solution()
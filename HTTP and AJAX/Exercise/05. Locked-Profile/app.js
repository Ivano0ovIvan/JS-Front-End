async function lockedProfile() {
    
    const baseURL = 'http://localhost:3030/jsonstore/advanced/profiles';

    const getResponse = await fetch(baseURL);
    const profiles = await getResponse.json();

    const mainField = document.getElementById('main')
    
    Object.values(profiles).forEach((currentProfile, index) => {
        
        const div = document.createElement('div');
        const showMoreBtn = document.createElement('button')
        showMoreBtn.textContent = 'Show more'
        
        div.innerHTML = `
            <img src="./iconProfile2.png" class="userIcon" />
            <label>Lock</label>
            <input type="radio" name="user${index}Locked" value="lock" checked>
            <label>Unlock</label>
            <input type="radio" name="user${index}Locked" value="unlock"><br>
            <hr>
            <label>Username</label>
            <input type="text"  value="${currentProfile.username}" disabled readonly />
            <div class="hiddenInfo">
                <hr>
                <label>Email:</label>
                <input type="email"  value="${currentProfile.email}" disabled readonly />
                <label>Age:</label>
                <input type="text" value="${currentProfile.age}" disabled readonly />
            </div>
            
        `;
        console.log(div)
        div.className = 'profile';
        div.appendChild(showMoreBtn)

        mainField.appendChild(div);

        showMoreBtn.addEventListener('click', showMoreInfo);
        
        function showMoreInfo(event) {
            let btn = event.target;
            let profile = btn.parentElement;
            let children = Array.from(profile.children);

            let unlocked = children[4];
            let additional = children[9];
            
            console.log(additional);
            if (!unlocked.checked) {
                return;
            };

            if (btn.textContent === 'Show more') {
                additional.style.display = 'inline-block';
                btn.textContent = 'Hide it';
            } else if (btn.textContent === 'Hide it') {
                additional.style.display = 'none';
                btn.textContent = 'Show more';
            };
        };
    });
}
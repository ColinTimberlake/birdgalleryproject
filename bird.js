fetch('./birds.json') // Fetch the JSON data from the server
    .then(response => response.json())
    .then(birds => {
        const birdy = document.getElementsByClassName('birdCards')[0];
        birds.forEach(bird => {
            const card = document.createElement('div');
            card.className = 'birdCard';
            card.innerHTML = `
                <img src="${bird.image_url}" alt="${bird.name}">
                <h2>${bird.name}</h2>
                <p>${bird.description}</p>
                <p><strong>Location:</strong> ${bird.Location}</p>
            `;
            birdy.appendChild(card);
        });
    });
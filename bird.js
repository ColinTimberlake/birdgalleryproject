fetch('birds.json')
    .then(response => response.json())
    .then(birds => {
        const gallery = document.getElementById('bird-gallery');
        birds.forEach(bird => {
            const card = document.createElement('div');
            card.className = 'bird-card';
            card.innerHTML = `
                <img src="${bird.image_url}" alt="${bird.name}">
                <h2>${bird.name}</h2>
                <p><em>${bird.scientific_name}</em></p>
                <p>${bird.description}</p>
                <p><strong>Habitat:</strong> ${bird.habitat}</p>
            `;
            gallery.appendChild(card);
        });
    });
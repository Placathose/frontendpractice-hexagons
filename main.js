const musicType = document.querySelectorAll('ul.links > a');
const imageType = document.querySelectorAll('ul.album-grid > li');

// Note: musicType.forEach is not a function
// Array.from(musicType) makes it a function


musicType.forEach(type => {
    type.onclick = () => {
        // Makes an element active/underline and clears a previous element
        musicType.forEach((type) => {
            type.className = "store-link";
        });
        type.className = "store-link active";

        const innerText = type.textContent;
        
        imageType.forEach((img) => {
            img.style.display = 'none';
            if(img.getAttribute('data-filter') == innerText.toLocaleLowerCase() || innerText =="All") {
                img.style.display = 'block';
            }
        })
    }

    
});


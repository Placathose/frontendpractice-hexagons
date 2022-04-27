const musicType = document.getElementsByClassName('store-link');
const imageType = document.getElementsByClassName('album');

// Note: musicType.forEach is not a function
// Array.from(musicType) makes it a function


Array.from(musicType).forEach((type) => {
    type.onclick = () => {
        // Makes an element active/underline and clears a previous element
        Array.from(musicType).forEach(type => {
            type.className = "store-link";
        })
        type.className = "store-link active";

        const innerText = type.textContent;
        
        // console.log(innerText);
        Array.from(imageType).forEach((img) => {
            img.style.display = 'none';
            if(img.getAttribute('data-filter') == innerText.toLocaleLowerCase() || innerText =="All") {
                img.style.display = 'block';
            }
        })
    }

    
});


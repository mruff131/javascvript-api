// Start with authentication
//...no auths required for this project, limited 60 requests per min

// // include header as a good gesture
// curl 'https://api.artic.edu/api/v1/artworks/24645' \
// --header 'AIC-User-Agent: aic-bash (m@gmail.com)'


async function getArtInfo(button, paragraphID) {
    try{
        const artId = button.previousElementSibling.previousElementSibling.id; // id is pulled from the 2 previous elements, (button >> h2 >> image ID)
        console.log("artId:", artId); // Log the artId
        const response = await fetch(`https://api.artic.edu/api/v1/artworks/${artId}?field=title,alt_text,date_display`);

        if(!response.ok){
            throw new Error("could not locate Resource")
        }

        const data = await response.json();


        artist = data.data.artist_display
        publication = data.data.publication_history

        const textFromApi = `${artist}\n${publication}`
        document.getElementById(paragraphID).textContent = textFromApi 
    
    }
    catch(error){
        console.log('Fetch Error, double check api information')
        }
    
}



function showPopup(popupId) {
    var popupContent = document.getElementById(popupId).innerText;
    var popup = document.getElementById('popup');
    var popupContentContainer = document.getElementById('popupContent');
    
    popupContentContainer.innerText = popupContent;
    popup.style.display = 'block';
  }
  
  function hidePopup() {
    var popup = document.getElementById('popup');
    popup.style.display = 'none';
  }
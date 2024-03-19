let main = document.querySelector("#main");
let form = document.querySelector("#form");
form.addEventListener("submit", async (event) => {
  event.preventDefault();

  let details = await getUserDetails(form.elements[0].value);
  createUserCard(details);
});
// a. 	getUserDetails: It will make an API call to get data and internally it will call another method `createUserCard` with fetched data to create the card.
async function getUserDetails(username) {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);
    return await response.json();
  } catch (error) {
    return null;
  }
}

// b. 	createUserCard: Based on the data it will create a Profile card.

function createUserCard(details){
    console.log(details);
    main.innerHTML = `
    <div class= "container row p-3">
        <div class = "col-3">
            <img src = ${details.avatar_url} height=100px weight=100px>
        </div>
        <div class = "col-9">
                <h5 class="p-1 pb-0">${details.name}</h5>
                <p class="p-1 pb-0">${details.bio}</p>
                <div class="row p-1 pb-0 pt-1">
                  <div class = "col">
                    <bold>Followers:</bold> ${details.followers}
                  </div>
                  <div class = "col">
                    <bold>Following:</bold> ${details.following}
                  </div>
                  <div class = "col">
                    <bold>Repos:</bold> ${details.public_repos}
                  </div>
                </div>

                <div class="row p-1 pt-0">
                  <div class = "col">
                    <bold>Twitter:</bold> ${details.twitter_username}
                  </div>
                  <div class = "col">
                    <bold>Location:</bold> ${details.location}
                  </div>
                </div>


        </div>
    </div>
    `
}

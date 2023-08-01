const getdata = async () => {
    let username = document.getElementById("username");
    let fetchit = await fetch("https://api.github.com/users/" + username.value);
    let data = await fetchit.json();







    if (fetchit.status == 404) {
        err.style.display = "block";
        errpara.innerHTML = "User not found";
        card.style.display = "none";

        console.log(fetchit.status);
    }
    else {
        console.log("ok");
        err.style.display = "none";
        card.style.display = "flex";

        let prof = document.getElementById("profile").src = data.avatar_url
        let bio = document.getElementById("bio").innerHTML = data.bio
        let name = document.getElementById("name").innerHTML = `Name : ${data.name}`
        let email = document.getElementById("email").innerHTML = `Email : ${data.email}`
        let location = document.getElementById("location").innerHTML = `Address : ${data.location}`
        let following = document.getElementById("following").innerHTML = `Following : ${data.following}`
        let followers = document.getElementById("followers").innerHTML = `Followers : ${data.followers}`
        let a = document.getElementById("goto").href = data.html_url



    }

}



let run = document.getElementById("search").addEventListener("click", () => {
    getdata(username.value);
    console.log("clicked");

})





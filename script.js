let newRequest = new XMLHttpRequest();
newRequest.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        let einstein = JSON.parse(this.responseText);
        document.getElementById("einsteinName").innerHTML= einstein.name;
        document.getElementById("einsteinBirth").innerHTML = einstein.birthday;
      }
    };
    newRequest.open("GET", "einstein.json", true);
    newRequest.send();
  
    function loadBio() {
      newRequest.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          let einstein = JSON.parse(this.responseText);
          document.getElementById("bio").innerHTML = einstein.bio;
    }
  };
 
  newRequest.open("GET", "einstein.json", true);
  newRequest.send();
    }
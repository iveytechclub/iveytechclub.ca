function loadJSON(callback) {
  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open("GET", "pages/HomePage/companies.json", true);
  xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == "200") {
      // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
      callback(xobj.responseText);
    }
  };
  xobj.send(null);
}

window.addEventListener("load", function () {
  const targetDiv = document.getElementById("logo-container");
  loadJSON((response) => {
    var companiesObject = JSON.parse(response);
    companiesObject.companies.forEach((company) => {
      const img = document.createElement("img");
      img.setAttribute(
        "src",
        `pages/HomePage/assets/CompanyLogos/${company.logo_file}`
      );
      img.setAttribute("alt", `${company.name}`);
      img.setAttribute("title", `${company.name}`);
      img.setAttribute("class", "company-logo");
      targetDiv.appendChild(img);
    });
  });
});

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
  loadJSON((response) => {
    var companiesObject = JSON.parse(response);
    companiesObject.companies.forEach((company) => {
      console.log(company.name);
      console.log(company.logo_file);
    });
  });
});

var database;

window.onload = function () {
  var request = window.indexedDB.open("LinksDB2", 1);

  request.onsuccess = function(event) {
    alert("Created or opened database successfully.");

    // Make the database available everywhere in the code.
    database = request.result;

    // It's now safe to load the data.
    showLinks();
  };

  request.onerror = function (event) {
    alert(request.error + " occurred.");
  };

  request.onupgradeneeded = function(event) {
    alert("About to set up DB for the first time or upgrade it.");
    //alert("Database changing from " + event.oldVersion + " to " + event.newVersion)
    
    var db = request.result;    
    var objectStore = db.createObjectStore("Links", { keyPath: "url" });    
  }
};

function addLink() {  
  // Collect the data from the form.
  var name = document.getElementById("name").value;
  var url = document.getElementById("url").value;
  var description = document.getElementById("description").value;
  var notes = document.getElementById("notes").value;
  
  var linkRecord = new LinkRecord(name, url, description, notes);
  alert("Prepared LinkRecord object for " + linkRecord.name);
  
  var transaction = database.transaction(["Links"], "readwrite");
  var objectStore = transaction.objectStore("Links");

  var request = objectStore.put(linkRecord);
  request.onerror = function(event) {
    alert(request.error + " occurred.");
  };

  request.onsuccess = function(event) {
    alert("Successfully added link.");

    // Refresh the display. (For better performance, you could add just the one new item,
    // rather than refresh the whole list.)
    showLinks();
  };  
}

function showLinks() {
  alert("About to refresh link list.");

  var transaction = database.transaction(["Links"], "readonly");
  var objectStore = transaction.objectStore("Links");

  var request = objectStore.openCursor();
  
  request.onerror = function (event) {
    alert(request.error + " occurred.");
  };
  
  // Prepare the string of markup that will be inserted into the page.
  var markupToInsert = "";

  request.onsuccess = function (event) {    
    // Create a cursor.
    var cursor = event.target.result;

    // If there is data add it to the string and keep going.
    if (cursor) {
      var linkRecord = cursor.value;
      markupToInsert += "<a href=" + linkRecord.url + ">" + linkRecord.name + "</a> (" +
        "<span class='linkButton' data-url='" + linkRecord.url + "' onclick='getLinkDetails(this)'>Details</span>" + " " +
        "<span class='linkButton' data-url='" + linkRecord.url + "' onclick='deleteLink(this)'>Delete</span>" +
        ")<br>";

      // When the cursor steps to the next record (or reaches the end,
      // the request.onsuccess event fires again.).
      cursor.continue();
    }
    else {
      // You've reached the end of the results.

      // If there wasn't at least one result, substitute some placeholder text.
      if (markupToInsert == "") {
        markupToInsert = "<< No links. >>";
      }
      else {
        markupToInsert = "<i>Links you've added so far: </i><br>" + markupToInsert;
      }

      // Insert the markup.
      var resultsElement = document.getElementById("links");
      resultsElement.innerHTML = markupToInsert;

    }
  };
}

function getLinkDetails(element) {
  var url = element.getAttribute("data-url");
  alert("About to get details for " + url);
    
  var transaction = database.transaction(["Links"], "readonly");
  var objectStore = transaction.objectStore("Links");
    
  var request = objectStore.get(url);

  request.onerror = function(event) {
    alert(request.error + " occurred.");
  };

  request.onsuccess = function(event) {
    alert("Found matching record.");
    var linkRecord = request.result;

    var resultsElement = document.getElementById("linkDetails");
    resultsElement.innerHTML = "<b>" + linkRecord.name + "</b><br>" +
      "<b>URL:</b> " + linkRecord.url + "<br>" +
      "<b>Description:</b> " + linkRecord.description + "<br>" +
      "<b>Notes:</b> " + linkRecord.notes;
  }
}

function deleteLink(element) {
  var url = element.getAttribute("data-url");
  alert("About to delete " + url);

  var transaction = database.transaction(["Links"], "readwrite");
  var objectStore = transaction.objectStore("Links");

  var request = objectStore.delete(url);

  request.onerror = function (event) {
    alert(request.error + " occurred.");
  };

  request.onsuccess = function (event) {
    alert("Deleted record.");

    // Refresh the display.
    showLinks();
  }  
}

function LinkRecord(name, url, description, notes) {
  this.name = name;
  this.url = url;
  this.description = description;
  this.notes = notes;
}

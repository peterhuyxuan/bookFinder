function findBook() {
  var userSearch = document.getElementById("userInput").value;
  var bookResult = document.getElementById("result");

  bookResult.innerHTML = "";

  $.ajax({
    type: "GET",
    url: "https://www.googleapis.com/books/v1/volumes?q=" + userSearch,
    dataType: "JSON",
    success: function(book) {
      console.log(book);
      for (var i = 0; book.items.length; i++) {
        var wrapperDiv = document.createElement("div");
        wrapperDiv.className = "media";
        // creating img element for images
        var image = document.createElement("img");
        image.className = "mr-3";
        image.src = book.items[i].volumeInfo.imageLinks.thumbnail;
        // creating div element with class of media-body
        var div = document.createElement("div");
        div.className = "media-body";
        // creating header for body
        var header = document.createElement("h2");
        header.className = "mt-0";
        header.innerHTML = book.items[i].volumeInfo.title;
        // append header to the body
        div.appendChild(header);
        wrapperDiv.appendChild(image);
        wrapperDiv.appendChild(div);
        // creating the h5 element for the author
        var author = document.createElement("p");
        author.innerHTML = "<b>Author:</b> " + book.items[i].volumeInfo.authors;
        div.appendChild(author);
        // creating the paragraph for a country
        var country = document.createElement("p");
        country.innerHTML =
          "<b>Country:</b> " + book.items[i].accessInfo.country;
        div.appendChild(country);
        // creating the paragraph for the page count
        var pageCount = document.createElement("p");
        pageCount.innerHTML =
          "<b>Pages:</b> " + book.items[i].volumeInfo.pageCount;
        div.appendChild(pageCount);
        // creating element for the date
        var year = document.createElement("p");
        year.innerHTML =
          "<b>Published:</b> " + book.items[i].volumeInfo.publishedDate;
        div.appendChild(year);
        // creating element for the publisher
        var publisher = document.createElement("p");
        publisher.innerHTML =
          "<b>Publisher:</b> " + book.items[i].volumeInfo.publisher;
        div.appendChild(publisher);
        // creating element for the description
        var descript = document.createElement("p");
        descript.innerHTML = book.items[i].volumeInfo.description;
        div.appendChild(descript);
        // creating a to target book link
        var link = document.createElement("a");
        link.innerHTML = "View more";
        link.href = book.items[i].volumeInfo.previewLink;
        div.appendChild(link);
        // creating the hr to separate every book info
        var line = document.createElement("hr");
        // Make every element as the children element of bookResult
        bookResult.appendChild(wrapperDiv);
        bookResult.appendChild(line);
      }
    }
  });
}

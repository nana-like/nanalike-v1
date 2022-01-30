$(document).ready(function () {

  var url = "https://nykim.net/tapi/rss";

  $.ajax({
    url: url,
    type: 'GET',
    dataType: 'xml',
  })
    .done(function (data) {


      // * 리팩토링 필요


      $(data).find('channel item').each(function () {
        var itemTitle = $(this).find('title').text();
        var permaLink = $(this).find('link').text();
        var desc = $(this).find('description');

        var pubText = $(this).find('pubDate').text();
        var pubDate = new Date(pubText);
        var dateString = pubDate.getFullYear() + '.' + (pubDate.getMonth() + 1) + '.' + pubDate.getDate();

        var doc = new DOMParser().parseFromString($(this).find('description').text(), "text/html");
        var imgs = doc.getElementsByTagName('img');
        if (imgs.length === 0) return;

        var listItem = document.createElement("li");
        listItem.classList.add("blog-list__item");

        var link = document.createElement("a");
        link.classList.add("blog-list__link");
        link.href = permaLink;
        link.setAttribute("target", "_blank");

        var img = document.createElement("div");
        // img.src = doc.getElementsByTagName('img')[0].src;
        img.style.backgroundImage = `url('${imgs[0].src}')`;
        img.classList.add("blog-list__img");
        link.appendChild(img);

        var info = document.createElement("div");
        info.classList.add("blog-list__info");

        var title = document.createElement("strong");
        title.innerHTML = itemTitle;
        title.classList.add("blog-list__title");
        info.appendChild(title);

        var date = document.createElement("p");
        date.innerHTML = dateString;
        date.classList.add("blog-list__date");
        info.appendChild(date);

        link.appendChild(info);
        listItem.appendChild(link);

        var blogList = document.querySelector(".blog-list");
        blogList.appendChild(listItem);
      });
    })
    .fail(function () {
      console.error('Oops, 데이터 불러오기에 실패했습니다. 티스토리에 뭔가 문제가 있었을지도 몰라요.');
    });
});
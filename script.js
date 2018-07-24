// var xhr = new XMLHttpRequest();
// xhr.open('PUT', 'db.json');
// xhr.setRequestHeader('Content-Type', 'application/json');
// xhr.onload = function() {
//     if (xhr.status === 200) {
//         var userInfo = JSON.parse(xhr.responseText);
//         console.log(userInfo);
//     }
//     else {
//     	console.log("erroe");
//     }
// };
// xhr.send(JSON.stringify({
//     name: 'John Smith',
//     age: 34
// }));
function ajax_get(url, callback) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            console.log('responseText:' + xmlhttp.responseText);
            try {
                var data = JSON.parse(xmlhttp.responseText);
            } catch(err) {
                console.log(err.message + " in " + xmlhttp.responseText);
                return;
            }
            callback(data);
        }
    };
 
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}
 
ajax_get('db.json', function(data) {
	console.log(data);
 	let main = document.querySelector('main');
 	let out = '';
 	for (let key in data) {
 		let str = data[key].date;
 		let str2 = '';
 		for (let i=0; i<str.length; i++) {
 			if(str[i] == ' ') {
 				str2 += '</p><p class="borderdate">'; 
 			}
 			else {
 				str2 += str[i]; 
 			}
 		}
 		out += `<img class="mainimg" src="${data[key].img}" alt="${data[key].title}">`;
 		out += `<div class="bdrdiv">`;
 		out += `<div class="date">`;
 		out += `<p class="borderdate">${str2}</p>`;
 		out += `</div>`;
 		out += `<h1 class="h2style">${data[key].title}</h1>`;
 		out += `<p class="pstyle">${data[key].description}</p>`;
 		out += `<img class="videoimg" src="${data[key].img}" alt="${data[key].title}" width="48%">`;
 		out += `</div>`;
 		out += `<br>`;
 		str2 = '';
 	}
 	main.innerHTML = out;
 	console.log(out);
});
let btnScrollDown = document.querySelector('#scroll');

  function scrollDown() {
    let windowCoords = document.documentElement.clientHeight;
    (function scroll() {
      if (window.pageYOffset < windowCoords) {
        window.scrollBy(0, 10);
        setTimeout(scroll, 0);
      }
      if (window.pageYOffset > windowCoords) {
        window.scrollTo(0, windowCoords);
      }
    })();
  }

  btnScrollDown.addEventListener('click', scrollDown);
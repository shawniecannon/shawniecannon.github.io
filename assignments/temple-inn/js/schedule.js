   
   
   var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
        var request = new XMLHttpRequest();
        var info; // globally defined
        request.open('GET', requestURL);
        request.responseType = 'json';
        request.send();
        request.onload = function () {
            var townsection = request.response;
            showData(townsection);
        }

        function showSection(town, sectionId) {
            var section = document.getElementById(sectionId);
            var myArticle = document.createElement('article');
            var myPara1 = document.createElement('p');
            var myPara2 = document.createElement('p');
            var myPara3 = document.createElement('p');
            var myPara4 = document.createElement('p');
            for (var i = 0; i < info.length; i++) {
                if (info[i].name == town) {
                    myPara1.textContent = 'Motto: ' + info[i].motto;
                    myPara2.textContent = 'Year Founded: ' + info[i].yearFounded;
                    myPara3.textContent = 'Population: ' + info[i].currentPopulation;
                    myPara4.textContent = 'Rainfall: ' + info[i].averageRainfall;
                }
            }
            myArticle.appendChild(myPara1);
            myArticle.appendChild(myPara2);
            myArticle.appendChild(myPara3);
            myArticle.appendChild(myPara4);
            section.appendChild(myArticle);
        }

        function showData(jsonObj) {
            info = jsonObj['towns'];

            showSection("Soda Springs", "sodaSpringsSec");
            showSection("Preston", "prestonSec");
            showSection("Fish Haven", "fishHavenSec");
        }
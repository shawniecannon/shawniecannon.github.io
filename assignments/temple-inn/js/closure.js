const getCitySchedule = async (city) => {
    const response = await fetch('./js/city_closures.json');
    const data = await response.json();
    console.log(data);
    targetData = data.filter(item => item.city == city);
    return targetData[0];
 }

 const updateUI = (data) => {
    // destructure properties
    const { city, closures } = data;

    //document.querySelector('.city').innerHTML = city;
    const ul = document.getElementById('closures');

    for (let i = 0; i < closures.length; i++) {
       const node = document.createElement("LI");
       const textNode = document.createTextNode(closures[i]);
       node.appendChild(textNode);
       ul.appendChild(node);
    }
 }

 // const targetCity = "Salt Lake City";
 const targetCity = "San Diego";

 // update city with new ui
 getCitySchedule(targetCity)
    .then(data => updateUI(data))
    .catch(err => console.log(err));

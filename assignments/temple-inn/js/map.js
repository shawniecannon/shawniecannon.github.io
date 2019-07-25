function initMap() {

   // const loc = {
   //    lat: 40.743126,
   //    lng: -111.922174
   // };
   const mapCoordinates = document.getElementById("map").getAttribute("data-id").split(",");
   const loc = {
      lat: parseFloat(mapCoordinates[0]),
      lng: parseFloat(mapCoordinates[1])
   };
   console.log(loc);

   const map = new google.maps.Map(document.querySelector('.map'), {
      zoom: 14,
      center: loc
   });
   const marker = new google.maps.Marker({
      position: loc,
      map: map
   });

   console.log("loc = ", loc);
}
var waypoint;

$("#tinhTien").on("click", function() {
    var diemDen = $("#diemDen").val();
    $.get("https://nominatim.openstreetmap.org/search?q=" + diemDen + "&limit=1&format=json&addressdetails=1", function(data) {
        waypoint = L.Routing.control({
            waypoints: [
                L.latLng(10.741257451748634, 106.61900684065824),
                L.latLng(parseFloat(data[0].lat), parseFloat(data[0].lon))
            ],
            routeWhileDragging: true
        })
        waypoint.addTo(map);

        waypoint.on('routeselected', function(e) {
            var tongTien = 0;
            var totalKm = e.route.summary.totalDistance / 1000; //m
            if (totalKm < 1) {
                tongTien = $("#kmDauTien").val();
            } else {
                var methodCalc = $("#blockCalc").val();
                if (methodCalc == "ceil") {
                    tongTien = ((Math.ceil(totalKm) - 1) * parseInt($("#kmTiepTheo").val())) + parseInt($("#kmDauTien").val())
                } else {
                    tongTien = ((totalKm - 1) * parseInt($("#kmTiepTheo").val())) + parseInt($("#kmDauTien").val())
                }
            }

            console.log(tongTien)
            $("#tongTien").html(tongTien + " đồng")
        })
    })

    $("#tinhTien").attr("disabled", true)
    $("#diemDen").attr("disabled", true)
    $("#kmDauTien").attr("disabled", true)
    $("#kmTiepTheo").attr("disabled", true);
})

$("#reset").on("click", function() {
    $("#tinhTien").attr("disabled", false);
    $("#diemDen").attr("disabled", false)
    $("#kmDauTien").attr("disabled", false)
    $("#kmTiepTheo").attr("disabled", false);

    $("#diemDen").val("");
    $("#tongTien").html("")

    waypoint.setWaypoints([])
    $(".leaflet-routing-container.leaflet-bar.leaflet-control").hide();
})
var protocol = "http://";
// var protocol = "https://";
// var subdomain_geoserver = "10.151.46.88:8080/";
// var subdomain_geoserver = "geo.projgis.link/";
var subdomain_geoserver = "gisportal.vn:8080/";

/*----- Geoserver -----*/
var host_geoserver = "geoserver/";
/* var workspace = "camau_quyhoachgiadat"; */

/*** Services for WMTS ***/
var wmts = "gwc/service/wmts?"
var services = "&style=" +
    "&tilematrixset=EPSG:900913" +
    "&Service=WMTS" +
    "&Request=GetTile" +
    "&Version=1.0.0" +
    "&Format=image/png" +
    "&TileMatrix=EPSG:900913:{z}&TileCol={x}&TileRow={y}";

/* Cà Mau (thêm maxZoom cho các layer geoserver)

/* Thêm basemap Google Địa hình */
var ggmap = L.tileLayer('https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}', {
    attribution: 'Google Terrain',
    subdomains: 'abcd',
    maxZoom: 20,
    minZoom: 0,
    label: 'Bản đồ địa hình Google',
    iconURL: 'https://mt1.google.com/vt/lyrs=p&x=101&y=60&z=7'
})

/* Việt Bản đồ */
const vbd_map = new L.tileLayer('http://images.vietbando.com/ImageLoader/GetImage.ashx?Ver=2016&LayerIds=VBD&Level={z}&X={x}&Y={y}', {
    attribution: "<a href='http://maps.vietbando.com//' target='_blank'>VIETBANDO CORP</a>",
    maxZoom: 20
});

/* Google Earth */
const ggearth = new L.tileLayer('https://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}', {
    attribution: 'Google Satellite',
    subdomains: 'abcd',
    maxZoom: 20,
    minZoom: 0,
    label: 'Ảnh vệ tinh Google',
    iconURL: 'https://mt0.google.com/vt/lyrs=s&hl=en&x=101&y=60&z=7'
});

/* MAP */
const map = L.map('map', {
    center: [10.777, 106.701],
    zoom: 10.25,
    minZoom: 10.25,
    maxZoom: 20,
    zoomControl: false,
    layers: [ggmap],
    zoomSnap: 0.25
});

/* GPS */
var gps = new L.Control.Gps({
    autoCenter: true,
    maxZoom: 15,
});
gps.on('gps:located', function(e) {
    console.log(e.latlng)
    e.marker.bindPopup("Vị trí người dùng:<br>Vĩ độ: " + e.latlng.lat +
        "<br>Kinh độ: " + e.latlng.lng).openPopup()
}).on('gps:disabled', function(e) {
    e.marker.closePopup()
});
gps.addTo(map);

/* Side Bar */
var sidebar = L.control.sidebar('sidebar').addTo(map);
sidebar.open('search');

/* Zoom Home */
var zoomHome = L.Control.zoomHome();
zoomHome.addTo(map);

/* BaseLayer */
const Map_BaseLayer = {
    "Google Map": ggmap,
    "Google Earth": ggearth,
    "Bản đồ nền của Việt bản đồ": vbd_map,
    "Trống": blank()
};

const Map_AddLayer = {};

/* LayerControl */
L.control.layers(
    Map_BaseLayer,
    Map_AddLayer, {
        collapsed: false
    }
).addTo(map);

/* Scale bar */
L.control.scale().addTo(map);

/* Mouse position */
L.control.mousePosition().addTo(map);

function blank() {
    var layer = new L.Layer();
    layer.onAdd = layer.onRemove = function () {
    };
    return layer;
}

/* Search toolbox OpenCage */
var options = {
    key: '9a91a7d902484d88bea1e73b5971c7a1',
    position: 'topleft',
    addResultToMap: true,
    placeholder: 'Search...',
    limit: 5
};

$(".leaflet-control-zoomhome-home").on('click', function () {
    /* Tắt Popup */
    map.closePopup();
})

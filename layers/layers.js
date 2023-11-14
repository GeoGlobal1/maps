var wms_layers = [];


        var lyr_MAPABASE_0 = new ol.layer.Tile({
            'title': 'MAPA BASE',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_PROVINCIAS_1 = new ol.format.GeoJSON();
var features_PROVINCIAS_1 = format_PROVINCIAS_1.readFeatures(json_PROVINCIAS_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PROVINCIAS_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PROVINCIAS_1.addFeatures(features_PROVINCIAS_1);
var lyr_PROVINCIAS_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PROVINCIAS_1,
maxResolution:28004.466152261964,
 minResolution:168.0267969135718,

                style: style_PROVINCIAS_1,
                interactive: true,
    title: 'PROVINCIAS<br />\
    <img src="styles/legend/PROVINCIAS_1_0.png" /> Morona Santiago<br />\
    <img src="styles/legend/PROVINCIAS_1_1.png" /> Napo<br />\
    <img src="styles/legend/PROVINCIAS_1_2.png" /> Orellana<br />\
    <img src="styles/legend/PROVINCIAS_1_3.png" /> Pastaza<br />\
    <img src="styles/legend/PROVINCIAS_1_4.png" /> Sucumbios<br />\
    <img src="styles/legend/PROVINCIAS_1_5.png" /> Zamora Chinchipe<br />'
        });
var format_CANTONES_2 = new ol.format.GeoJSON();
var features_CANTONES_2 = format_CANTONES_2.readFeatures(json_CANTONES_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CANTONES_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CANTONES_2.addFeatures(features_CANTONES_2);
var lyr_CANTONES_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CANTONES_2,
maxResolution:532.0848568929773,
 minResolution:84.0133984567859,

                style: style_CANTONES_2,
                interactive: true,
                title: '<img src="styles/legend/CANTONES_2.png" /> CANTONES'
            });
var format_PARROQUIAS_3 = new ol.format.GeoJSON();
var features_PARROQUIAS_3 = format_PARROQUIAS_3.readFeatures(json_PARROQUIAS_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PARROQUIAS_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PARROQUIAS_3.addFeatures(features_PARROQUIAS_3);
var lyr_PARROQUIAS_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PARROQUIAS_3,
maxResolution:84.0133984567859,
 minResolution:0.00028004466152261963,

                style: style_PARROQUIAS_3,
                interactive: true,
                title: '<img src="styles/legend/PARROQUIAS_3.png" /> PARROQUIAS'
            });
var format_AIDCTEA202317S_4 = new ol.format.GeoJSON();
var features_AIDCTEA202317S_4 = format_AIDCTEA202317S_4.readFeatures(json_AIDCTEA202317S_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AIDCTEA202317S_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AIDCTEA202317S_4.addFeatures(features_AIDCTEA202317S_4);
var lyr_AIDCTEA202317S_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AIDCTEA202317S_4, 
                style: style_AIDCTEA202317S_4,
                interactive: true,
    title: 'AID CTEA 2023 17S<br />\
    <img src="styles/legend/AIDCTEA202317S_4_0.png" /> HIDROCARBURIFERA<br />\
    <img src="styles/legend/AIDCTEA202317S_4_1.png" /> HIDROELECTRICA<br />\
    <img src="styles/legend/AIDCTEA202317S_4_2.png" /> MINERA<br />'
        });
var format_CAPITALPROVINCIAL_5 = new ol.format.GeoJSON();
var features_CAPITALPROVINCIAL_5 = format_CAPITALPROVINCIAL_5.readFeatures(json_CAPITALPROVINCIAL_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CAPITALPROVINCIAL_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CAPITALPROVINCIAL_5.addFeatures(features_CAPITALPROVINCIAL_5);
var lyr_CAPITALPROVINCIAL_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CAPITALPROVINCIAL_5, 
                style: style_CAPITALPROVINCIAL_5,
                interactive: true,
                title: '<img src="styles/legend/CAPITALPROVINCIAL_5.png" /> CAPITAL PROVINCIAL'
            });
var format_COMUNIDADESAMAZONIA2020_6 = new ol.format.GeoJSON();
var features_COMUNIDADESAMAZONIA2020_6 = format_COMUNIDADESAMAZONIA2020_6.readFeatures(json_COMUNIDADESAMAZONIA2020_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_COMUNIDADESAMAZONIA2020_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_COMUNIDADESAMAZONIA2020_6.addFeatures(features_COMUNIDADESAMAZONIA2020_6);
var lyr_COMUNIDADESAMAZONIA2020_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_COMUNIDADESAMAZONIA2020_6, 
                style: style_COMUNIDADESAMAZONIA2020_6,
                interactive: true,
                title: '<img src="styles/legend/COMUNIDADESAMAZONIA2020_6.png" /> COMUNIDADES AMAZONIA (2020)'
            });
var format_ESTABLECIMIENTOSDESALUD_7 = new ol.format.GeoJSON();
var features_ESTABLECIMIENTOSDESALUD_7 = format_ESTABLECIMIENTOSDESALUD_7.readFeatures(json_ESTABLECIMIENTOSDESALUD_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ESTABLECIMIENTOSDESALUD_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ESTABLECIMIENTOSDESALUD_7.addFeatures(features_ESTABLECIMIENTOSDESALUD_7);
var lyr_ESTABLECIMIENTOSDESALUD_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ESTABLECIMIENTOSDESALUD_7, 
                style: style_ESTABLECIMIENTOSDESALUD_7,
                interactive: true,
                title: '<img src="styles/legend/ESTABLECIMIENTOSDESALUD_7.png" /> ESTABLECIMIENTOS DE SALUD'
            });

lyr_MAPABASE_0.setVisible(true);lyr_PROVINCIAS_1.setVisible(true);lyr_CANTONES_2.setVisible(true);lyr_PARROQUIAS_3.setVisible(false);lyr_AIDCTEA202317S_4.setVisible(false);lyr_CAPITALPROVINCIAL_5.setVisible(true);lyr_COMUNIDADESAMAZONIA2020_6.setVisible(true);lyr_ESTABLECIMIENTOSDESALUD_7.setVisible(false);
var layersList = [lyr_MAPABASE_0,lyr_PROVINCIAS_1,lyr_CANTONES_2,lyr_PARROQUIAS_3,lyr_AIDCTEA202317S_4,lyr_CAPITALPROVINCIAL_5,lyr_COMUNIDADESAMAZONIA2020_6,lyr_ESTABLECIMIENTOSDESALUD_7];
lyr_PROVINCIAS_1.set('fieldAliases', {'Provincia': 'Provincia', });
lyr_CANTONES_2.set('fieldAliases', {'Canton': 'Canton', });
lyr_PARROQUIAS_3.set('fieldAliases', {'Parroquia': 'Parroquia', 'Canton': 'Canton', 'Provincia': 'Provincia', 'Tipo': 'Tipo', });
lyr_AIDCTEA202317S_4.set('fieldAliases', {'Area de in': 'Área de influencia', 'Empresa': 'Empresa', 'Fase': 'Fase', 'Bloque': 'Bloque', 'Provincia': 'Provincia', 'Canton': 'Canton', 'Parroquia': 'Parroquia', 'Comunidad': 'Comunidad', 'Tipo doc': 'Tipo doc', 'Resolusion': 'Resolusión', 'Emision': 'Emisión', 'Proyecto': 'Proyecto', 'Observacio': 'Observaciones', 'anio': 'Año', });
lyr_CAPITALPROVINCIAL_5.set('fieldAliases', {'Descripcio': 'Descripción', 'Nombre': 'Nombre', 'Tipo': 'Tipo', });
lyr_COMUNIDADESAMAZONIA2020_6.set('fieldAliases', {'Comunidad': 'Comunidad', 'Pueblo': 'Pueblo', 'Total ha': 'Total (ha)', 'Referencia': 'Referencia', 'Altitud': 'Altitud', 'Medio de c': 'Medio de comunicación', 'Accesibili': 'Accesibilidad', 'Nacionalid': 'Nacionalidad', 'Poblacion': 'Población', });
lyr_ESTABLECIMIENTOSDESALUD_7.set('fieldAliases', {'Nombre': 'Nombre', 'Nivel': 'Nivel', 'Tipologia': 'Tipología', });
lyr_PROVINCIAS_1.set('fieldImages', {'Provincia': 'TextEdit', });
lyr_CANTONES_2.set('fieldImages', {'Canton': 'TextEdit', });
lyr_PARROQUIAS_3.set('fieldImages', {'Parroquia': 'TextEdit', 'Canton': 'TextEdit', 'Provincia': 'TextEdit', 'Tipo': 'TextEdit', });
lyr_AIDCTEA202317S_4.set('fieldImages', {'Area de in': 'TextEdit', 'Empresa': 'TextEdit', 'Fase': 'TextEdit', 'Bloque': 'TextEdit', 'Provincia': 'TextEdit', 'Canton': 'TextEdit', 'Parroquia': 'TextEdit', 'Comunidad': 'TextEdit', 'Tipo doc': 'TextEdit', 'Resolusion': 'TextEdit', 'Emision': 'TextEdit', 'Proyecto': 'TextEdit', 'Observacio': 'TextEdit', 'anio': 'Range', });
lyr_CAPITALPROVINCIAL_5.set('fieldImages', {'Descripcio': '', 'Nombre': 'TextEdit', 'Tipo': 'TextEdit', });
lyr_COMUNIDADESAMAZONIA2020_6.set('fieldImages', {'Comunidad': 'TextEdit', 'Pueblo': 'TextEdit', 'Total ha': 'TextEdit', 'Referencia': 'TextEdit', 'Altitud': 'TextEdit', 'Medio de c': 'TextEdit', 'Accesibili': 'TextEdit', 'Nacionalid': 'TextEdit', 'Poblacion': 'TextEdit', });
lyr_ESTABLECIMIENTOSDESALUD_7.set('fieldImages', {'Nombre': 'TextEdit', 'Nivel': 'TextEdit', 'Tipologia': 'TextEdit', });
lyr_PROVINCIAS_1.set('fieldLabels', {'Provincia': 'inline label', });
lyr_CANTONES_2.set('fieldLabels', {'Canton': 'inline label', });
lyr_PARROQUIAS_3.set('fieldLabels', {'Parroquia': 'inline label', 'Canton': 'inline label', 'Provincia': 'inline label', 'Tipo': 'inline label', });
lyr_AIDCTEA202317S_4.set('fieldLabels', {'Area de in': 'inline label', 'Empresa': 'inline label', 'Fase': 'inline label', 'Bloque': 'inline label', 'Provincia': 'inline label', 'Canton': 'inline label', 'Parroquia': 'inline label', 'Comunidad': 'inline label', 'Tipo doc': 'inline label', 'Resolusion': 'inline label', 'Emision': 'inline label', 'Proyecto': 'inline label', 'Observacio': 'inline label', 'anio': 'inline label', });
lyr_CAPITALPROVINCIAL_5.set('fieldLabels', {'Descripcio': 'inline label', 'Nombre': 'inline label', 'Tipo': 'inline label', });
lyr_COMUNIDADESAMAZONIA2020_6.set('fieldLabels', {'Comunidad': 'inline label', 'Pueblo': 'inline label', 'Total ha': 'inline label', 'Referencia': 'inline label', 'Altitud': 'inline label', 'Medio de c': 'inline label', 'Accesibili': 'inline label', 'Nacionalid': 'inline label', 'Poblacion': 'inline label', });
lyr_ESTABLECIMIENTOSDESALUD_7.set('fieldLabels', {'Nombre': 'inline label', 'Nivel': 'inline label', 'Tipologia': 'inline label', });
lyr_ESTABLECIMIENTOSDESALUD_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
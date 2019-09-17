var keyArray = ["trump_per", "clinton_per", "stein_per", "johnson_per"];
var expressed = keyArray[0];

window.onload = initialize();

function initialize(){
    setMap();
};

function setMap() {

    var height = 500,
        width= 320;

    var svg = d3.select("body")
        .append("svg")
        .attr("height", height)
        .attr("width", width)
        .append("g");

    var projection = d3.geoAlbers()
        .translate([width*1.5, height/2])
        .scale(999,999);

    var path = d3.geoPath()
        .projection(projection);

    d3.queue()
        .defer(d3.json, "data/counties.topojson")
        .defer(d3.json, "data/states.topojson")
        .defer(d3.csv, "data/votes.csv")
        .await(ready);


    function ready (error, data, usa, csv) {
        console.log(data)
        console.log(usa)
        console.log(csv)

        if (error) throw error;

            var recolorMap = colorScale(csv);

            var jsonCounties = data.objects.counties.geometries;

            for (var i=0; i < csv.legnth; i++){
                var csvCounties =csv[i];
                var csvAdm1= csvCounties.county;

                for (var a=0; a<jsonCounties.legnth; a++){

                    if(jsonCounties[a].properties.counties == csvAdm1){

                        for (var key in keyArray){
                            var attr =keyArray[key];
                            var val = parseFloat(csvCounties[attr]);
                            jsonCounties[a].properties[attr] = val;

                        };
                    };
                };

            };

            // var color = d3.scaleThreshold()
            //     .domain([5, 10, 25, 40, 50])
            //     .range(["#f2f0f7", "#dadaeb", "#bcbddc", "#9e9ac8", "#756bb1", "#54278f"]);

            // var votes = {};
            // csv.forEach(function(d){
            //     votes[d.county]= +d.trump_per;
            // });
            // console.log(votes)


            var ca = topojson.feature(data, data.objects.counties).features;
                console.log(ca)

            svg.selectAll(".counties")
                .data(ca)
                .enter().append("path")
                .attr("class", "counties")
                .attr("d", path)
                .style("fill", function(d) { //color enumeration units
                    return choropleth(d, recolorMap);
                })
                .append("desc") //append the current color
                    .text(function(d) {
                    return choropleth(d, recolorMap);
                });

            createDropdown(csv); //create the dropdown menu

            var us = topojson.feature(usa, usa.objects.collection).features;
                console.log(us)

            svg.selectAll(".states")
                .data(us)
                .enter().append("path")
                .attr("class", "states")
                .attr("d", path);

    }
}

function colorScale (csv){

    var color = d3.scaleQuantile()
        .range(["black", "#dadaeb", "#bcbddc", "#9e9ac8", "#756bb1", "#54278f"]);

    var domainArray =[];
        for (var i in csv){
            domainArray.push(Number(csv[i][expressed]));
        };

    color.domain(domainArray);

    return color;
};

function choropleth(d, recolorMap){
    var value =d.properties[expressed];
    if(value){
        return recolorMap(value);
    } else{
        return "#ccc";
    };

};

function createDropdown(csv){
    var dropdown = d3.select("map")
        .append("div")
        .attr("class", "dropdown")
        .html("<h2>Select</h2>")
        .append("select")
        .on("change", function(){
            changeAttribute(this.value, csv)
        });

    dropdown.selectAll("options")
        .data(keyArray)
        .enter()
        .append("option")
        .attr("value", function(d){ return d})
        .text(function (d){
            d = d[0].toUpperCase() +
                d.substring(1,3) + " " +
                d.substring(3);
            return d

        });
};

function changeAttribute(attribute, csv){
    expressed = attribute;

    d3.selectAll(".regions")
        .style("fill", function(d){
            return choropleth (d, colorScale(csv));
        });
};


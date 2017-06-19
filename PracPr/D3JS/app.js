
//Convert csv to JSON
function csvJSON(csv) {

    var lines = csv.split("\n");
    var result = [];
    var headers = lines[0].split(",");

    for (var i = 1; i < lines.length; i++) {
        var obj = {};
        var currentline = lines[i].split(",");

        for (var j = 0; j < headers.length; j++) {
            obj[headers[j]] = currentline[j];
        }
        result.push(obj);
    }
    return JSON.stringify(result); //JSON
}

var jsonData;

$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "census.csv",
        dataType: "text",
        success: function (data) {
            jsonData = csvJSON(data);
            var dataset = JSON.parse(jsonData);

            //       var margin = { top: (parseInt(d3.select('body').style('width'), 10) / 10), right: (parseInt(d3.select('body').style('width'), 10) / 20), bottom: (parseInt(d3.select('body').style('width'), 10) / 5), left: (parseInt(d3.select('body').style('width'), 10) / 20) },
            //width = parseInt(d3.select('body').style('width'), 10) - margin.left - margin.right,
            //height = parseInt(d3.select('body').style('height'), 10) - margin.top - margin.bottom;


            var margin = { top: 20, right: 20, bottom: 30, left: 40 };
            var width = 660 - margin.left - margin.right;
            var height = 500 - margin.top - margin.bottom;


            var x0 = d3.scale.ordinal()
                .rangeRoundBands([0, width], .1);

            var x1 = d3.scale.ordinal();

            var y = d3.scale.linear()
                .range([height, 0]);

            var colorRange = d3.scale.category20();
            var color = d3.scale.ordinal()
                .range(colorRange.range());

            var xAxis = d3.svg.axis()
                .scale(x0)
                .orient("bottom");

            var yAxis = d3.svg.axis()
                .scale(y)
                .orient("left")
                .tickFormat(d3.format(".2s"));

            var divTooltip = d3.select("body").append("div").attr("class", "toolTip");

            var svg = d3.select("body").append("svg")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)
                .append("g")
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


            //dataset = [
            //    { label: "Men", "Not Satisfied": 20, "Not Much Satisfied": 10, "Satisfied": 50, "Very Satisfied": 20 },
            //    { label: "Women", "Not Satisfied": 15, "Not Much Satisfied": 30, "Satisfied": 40, "Very Satisfied": 15 }
            //];


            var options = d3.keys(dataset[0]).filter(function (key) { return key !== "label"; });

            dataset.forEach(function (d) {
                d.valores = options.map(function (name) { return { name: name, value: +d[name] }; });
            });

            x0.domain(dataset.map(function (d) { return d.label; }));
            x1.domain(options).rangeRoundBands([0, x0.rangeBand()]);
            y.domain([0, d3.max(dataset, function (d) { return d3.max(d.valores, function (d) { return d.value; }); })]);

            svg.append("g")
                .attr("class", "x axis")
                .attr("transform", "translate(0," + height + ")")
                .call(xAxis);

            svg.append("g")
                .attr("class", "y axis")
                .call(yAxis)
                .append("text")
                .attr("transform", "rotate(-90)")
                .attr("y", 6)
                .attr("dy", ".71em")
                .style("text-anchor", "end")
                .text("Satisfaction %");

            var bar = svg.selectAll(".bar")
                .data(dataset)
                .enter().append("g")
                .attr("class", "rect")
                .attr("transform", function (d) { return "translate(" + x0(d.label) + ",0)"; });

            bar.selectAll("rect")
                .data(function (d) { return d.valores; })
                .enter().append("rect")
                .attr("width", x1.rangeBand())
                .attr("x", function (d) { return x1(d.name); })
                .attr("y", function (d) { return y(d.value); })
                .attr("value", function (d) { return d.name; })
                .attr("height", function (d) { return height - y(d.value); })
                .style("fill", function (d) { return color(d.name); });

            bar
                .on("mousemove", function (d) {
                    divTooltip.style("left", d3.event.pageX + 10 + "px");
                    divTooltip.style("top", d3.event.pageY - 25 + "px");
                    divTooltip.style("display", "inline-block");
                    var x = d3.event.pageX, y = d3.event.pageY
                    var elements = document.querySelectorAll(':hover');
                    l = elements.length
                    l = l - 1
                    elementData = elements[l].__data__
                    divTooltip.html((d.label) + "<br>" + elementData.name + "<br>" + elementData.value + "%");
                });
            bar
                .on("mouseout", function (d) {
                    divTooltip.style("display", "none");
                });


            var legend = svg.selectAll(".legend")
                .data(options.slice())
                .enter().append("g")
                .attr("class", "legend")
                .attr("transform", function (d, i) { return "translate(0," + i * 20 + ")"; });

            legend.append("rect")
                .attr("x", width - 18)
                .attr("width", 18)
                .attr("height", 18)
                .style("fill", color);

            legend.append("text")
                .attr("x", width - 24)
                .attr("y", 9)
                .attr("dy", ".35em")
                .style("text-anchor", "end")
                .text(function (d) { return d; });

        }
    });

});





//svg.append("g")
//    .attr("class", "x axis")
//    .attr("transform", "translate(0," + height + ")")
//    .call(xAxis);

//svg.append("g")
//    .attr("class", "y axis")
//    .call(yAxis)
//    .append("text")
//    .attr("transform", "rotate(-90)")
//    .attr("y", 6)
//    .attr("dy", ".71em")
//    .style("text-anchor", "end")
//    .text("Satisfaction %");

//var bar = svg.selectAll(".bar")
//    .data(jData)
//    .enter().append("g")
//    .attr("class", "rect")
//    .attr("transform", function (d) { return "translate(" + x0(d.label) + ",0)"; });

//bar.selectAll("rect")
//    .data(function (d) { return d.valores; })
//    .enter().append("rect")
//    .attr("width", x1.rangeBand())
//    .attr("x", function (d) { return x1(d.name); })
//    .attr("y", function (d) { return y(d.value); })
//    .attr("value", function (d) { return d.name; })
//    .attr("height", function (d) { return height - y(d.value); })
//    .style("fill", function (d) { return color(d.name); });

//bar
//    .on("mousemove", function (d) {
//        divTooltip.style("left", d3.event.pageX + 10 + "px");
//        divTooltip.style("top", d3.event.pageY - 25 + "px");
//        divTooltip.style("display", "inline-block");
//        var x = d3.event.pageX, y = d3.event.pageY
//        var elements = document.querySelectorAll(':hover');
//        l = elements.length
//        l = l - 1
//        elementData = elements[l].__data__
//        divTooltip.html((d.label) + "<br>" + elementData.name + "<br>" + elementData.value + "%");
//    });
//bar
//    .on("mouseout", function (d) {
//        divTooltip.style("display", "none");
//    });


//var legend = svg.selectAll(".legend")
//    .data(options.slice())
//    .enter().append("g")
//    .attr("class", "legend")
//    .attr("transform", function (d, i) { return "translate(0," + i * 20 + ")"; });

//legend.append("rect")
//    .attr("x", width - 18)
//    .attr("width", 18)
//    .attr("height", 18)
//    .style("fill", color);

//legend.append("text")
//    .attr("x", width - 24)
//    .attr("y", 9)
//    .attr("dy", ".35em")
//    .style("text-anchor", "end")
//    .text(function (d) { return d; });
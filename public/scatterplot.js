function getBirthField(year) { 
    return "B" + year;
}

function getUnempField(year) {
    return "C" + year;
}

var q = queue(1)
var year = 1992;

files.forEach(function(f) { q.defer(d3.json, f); });

q.awaitAll(function(error, allData) {
        var counties = Object.keys(allData[0]);
        data = []
        for(i = 0; i < counties.length; i+=1) {
            obj = {"name":counties[i]};
            for(j = 0; j < allData.length; j++) {
                var index = files[j].indexOf(".")-4;
                var key = files[j].slice(0,1) + files[j].slice(index, index+4);
                obj[key] = Number(allData[j][counties[i]]);
            }
            data.push(obj);
        }
        data = data.filter(function(d) { return "WA.AZ".indexOf(d["name"].split(",")[1]) != -1; });
        console.log("data length: " + data.length);

        var width = 600,
            height = 600;

        var BirthField = getBirthField(year);
        var UnempField = getUnempField(year);
        var xExtent = d3.extent(data, get(BirthField));
        var yExtent = d3.extent(data, get(UnempField));

        var xScale = d3.scale.linear().domain(xExtent).range([30, 570]);
        var yScale = d3.scale.linear().domain(yExtent).range([570, 30]);
        var xAxis = d3.svg.axis().scale(xScale);
        var yAxis = d3.svg.axis().scale(yScale);

        svg = d3.select("body").append("svg").attr("width", width).attr("height", height);

        var pts = svg.selectAll("circle")
            .data(data, get("name"))
            .enter()
            .append("circle")
            .attr("stroke", "black")
            .attr("cx", function(d) { return xScale(d[BirthField]); })
            .attr("cy", function(d) { return yScale(d[UnempField]); })
            .attr("r", 2);

        var xAxisSel = svg.append("g") // create a group node
            .attr("transform", "translate(0, 570)")
            .call(xAxis); // call the axis generator

        yAxis.orient("left");
        var yAxisSel = svg.append("g") // create a group node
            .attr("transform", "translate(30, 0)")
            .call(yAxis); // call the axis generator

        var xLabel = svg.append("g").append("text")
        .attr("x", "500")
        .attr("y", "560")
        .text(BirthField);
        var yLabel = svg.append("g").append("text")
        .attr("x", "10")
        .attr("y", "20")
        .text(UnempField);

        d3.select("#nYear").on("input", function() {
            var birthField = getBirthField(this.value);
            var unempField = getUnempField(this.value);
            xScale.domain(d3.extent(data, get(birthField))).range([30,570]);
            yScale.domain(d3.extent(data, get(unempField))).range([570,30]);
            xAxis.scale(xScale);
            yAxis.scale(yScale);
            console.log("x-data min and max: " + d3.min(data, get(birthField)) + ", " + d3.max(data, get(birthField)));
            console.log("y-data min and max: " + d3.min(data, get(unempField)) + ", " + d3.max(data, get(unempField)));
            console.log("xScale domain and range: " + xScale.domain() + " --> " + xScale.range());
            console.log("yScale domain and range: " + yScale.domain() + " --> " + yScale.range());
            console.log(data);
            xAxisSel.transition().duration(1000).call(xAxis);
            yAxisSel.transition().duration(1000).call(yAxis);
            pts.transition().delay(1000).duration(2000)
                .attr("cx", function(d) {return xScale(d[birthField]);})
                .attr("cy", function(d) {return yScale(d[unempField]);});
            xLabel.text(birthField);
            yLabel.text(unempField);
        });
});


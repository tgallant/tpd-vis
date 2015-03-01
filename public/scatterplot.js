d3.csv("data/yesterday.csv", function(error, allData) {
        var width = 600,
            height = 600;
        
        var xExtent = d3.extent(data, function(d) { return d["DATE:q);
        var yExtent = d3.extent(data, );

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
});


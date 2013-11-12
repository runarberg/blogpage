var Wealth = (function (N, W) {
    /* data = [{
           time: cycles,
           indv: N,
           wealth: W,
       }] */

    // initialize all with wealth W at time 0
    data = [[]];
    for (i = 0; i < N; i++) {
        data[0][i] = {time: 0, indv: i, wealth: W};
    }

    var trade = function() {
        var pairs,
            cycle,
            stake,
            pot,
            result,
            a, b, i;
        
        var old_data = this.data[this.data.length-1],
            new_data = [];
        
        // First shuffle in pairs
        pairs = d3.shuffle(d3.range(N));

        // and have them trade in the shuffled order
        for (i = 0; i < N; i += 2) {
            a = pairs[i];
            b = pairs[i+1];
            
            stake = Math.min(old_data[a].wealth,
                             old_data[b].wealth);
            pot = 2*stake;
            result = d3.random.normal(0.5, 0.1)();

            // assign the trade results.
            new_data[a] = {
                time: old_data[a].time + 1,
                indv: a,
                wealth: (old_data[a].wealth +
                         result * pot - stake)
            };
            new_data[b] = {
                time: old_data[b].time + 1,
                indv: b,
                wealth: (old_data[b].wealth +
                         (1-result) * pot - stake)
            }
        }
        this.data[data.length] = new_data;
    };
    return {'trade': trade, 'data': data};
});

var setup_wealth = function() {
    var div = d3.select("div.wealth_controls");

    div.append("label")
        .attr("for", "wealth_N")
        .text("Fjöldi þátttakenda");
    div.append("input")
        .attr("id", "wealth_N")
        .attr("type", "number")
        .attr("name", "wealth_N")
        .attr("min", "2")
        .attr("max", "40")
        .attr("step", "2")
        .attr("value", "10")
        .attr("placeholder", "Fjöldi þátttakenda");
    div.append("label")
        .attr("for", "wealth_W")
        .text("Upphafsfé");
    div.append("input")
        .attr("id", "wealth_W")
        .attr("type", "number")
        .attr("name", "wealth_W")
        .attr("min", "20")
        .attr("max", "1000000")
        .attr("step", "20")
        .attr("value", "100")
        .attr("placeholder", "Upphafsfé");
    div.append("button")
        .attr("class", "wealth_reset")
        .text("▶")
    div.append("button")
        .attr("class", "wealth_prew")
        .text("<<");
    div.append("button")
        .attr("class", "wealth_next")
        .text(">>");
}

var display_wealth = function() {
    var N = parseInt(document.getElementById("wealth_N").value),
        W = parseInt(document.getElementById("wealth_W").value);
    var yard = Wealth(N, W);
    var time = 0;

    var col_height = 20;

    var chart = d3.select("div.wealth_display-results")
        .append("svg")
        .attr("class", "bar-chart")
        .attr("width", "100%")
        .attr("height", col_height * (N+2))
        .append('g')
        .attr("transform", "translate(10,15)");

    var x = d3.scale.linear()
        .domain([0, W*4])
        .range(["0", "80%"]);

    // COSMETICS {
    chart.selectAll("line")
        .data(x.ticks(12))
        .enter().append("line")
        .attr("x1", x)
        .attr("x2", x)
        .attr("y1", 0)
        .attr("y2", col_height * N)
        .style("stroke", "#ccc");
    
    chart.selectAll(".rule")
        .data(x.ticks(12))
        .enter().append("text")
        .attr("class", "rule")
        .attr("x", x)
        .attr("y", 0)
        .attr("dy", -3)
        .attr("text-anchor", "middle")
        .text(String);
    // }

    chart.selectAll("rect")
        .data(yard.data[time])
        .enter().append("rect")
        .attr("y", function(d, i) { return i*col_height; })
        .attr("width", function(d) { return x(d.wealth) })
        .attr("height", col_height);

    var update = function() {
        chart.selectAll("rect")
            .data(yard.data[time])
            .transition()
            .duration(750)
            .attr("width", function(d) { return x(d.wealth) });
    };

    var update_chart = function() {
        d3.select(".bar-chart").remove();
        display_wealth();
    }

    d3.select(".wealth_next").on("click", function() {
        time += 1;
        if (yard.data.length === time) {
            yard.trade();
        }
        update();
    });
    
    d3.select(".wealth_prew").on("click", function() {
        if (time > 0){
            time -= 1;
            update();
        }
    });

    d3.select(".wealth_reset").on("click", function() {
        N = parseInt(document.getElementById("wealth_N").value);
        W = parseInt(document.getElementById("wealth_W").value);

        yard = Wealth(N, W);
        time = 0;
        update_chart();
        update();
    });
}

setup_wealth();
display_wealth();

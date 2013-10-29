var shuffle = function (arr) {
    return arr.sort(function () {
        return .5 - Math.random();
    });
};
var wealth = function (N, W, cycles) {
    // N: number of participants.
    // W: The initial amount of wealth to each participant.
    // cycles: The number of trade cycles to be applied.

    var a, b, i, data, cycle, stake, pot, result;

    // create a cycles × W dataframe to hold the data
    var data = new Array(),
        pairs = new Array();
    for (i = 0; i <= cycles; i++) {
        data[i] = new Array();
    }

    for (i = 0; i < N; i++) {
        // make the pairs to prepare for the trades
        pairs[i] = i;
        // Everyone starts with the initial amount of wealth (W).
        data[0][i] = W;
    }

    // Now everyone trades cycle times
    for (cycle = 1; cycle <= cycles; cycle++) {
        // First shuffle in pairs
        pairs = shuffle(pairs);
        // and have them trade in the shuffled order
        for (i = 0; i < N; i += 2) {
            a = pairs[i];
            b = pairs[i+1]
            
            stake = Math.min(data[cycle-1][a], data[cycle-1][b]);
            pot = 2*stake;
            result = Math.random();

            // append the trade results to their current wealth.
            data[cycle][a] = (data[cycle-1][a] + result * pot) - stake;
            data[cycle][b] = (data[cycle-1][b] + (1-result) * pot) - stake;
        }
    }
    return data;
};

var display_results = function() {
    var container = d3.select("div.wealth_display-results");
    var results = wealth(10, 100, 10)[10];
    var x_lim = d3.scale.linear()
        .domain([0, d3.max(results)])
        .range(["0", "80%"]);
    container.selectAll("div")
        .data(results)
        .enter().append("div")
        .style("width", x_lim)
        .text(function(d) { return d3.round(d, 2); });
}

display_results();

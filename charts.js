function init() {
    // Grab a reference to the dropdown select element
    var selector = d3.select("#selCast");
  }
// INITIALIZE DASHBOARD ///////////////////////////////////////////
init();
function optionChanged(newActor) {
  newGenre = d3.select('#selGenre').node().value
  newCast = d3.select('#selCast').node().value
  newDirect = d3.select('#selDirector').node().value
  newComposer = d3.select('#selComposer').node().value

  // CHART: Cast
  d3.json("/getData/"+newCast, {
    method: 'POST',
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    },
    // body: JSON.stringify({"actor":newCast})
    body: JSON.stringify(newCast)
}).then(function (data) {
  console.log(data)
  x_vals = data.map(x => x.title)
  console.log(x_vals)
  y_vals = data.map(y => y.revenue)
  console.log(y_vals)
// 8. Create the trace for the bar chart.
  var barData = [{
   x: x_vals,
   y: y_vals,
        type: "bar"
      }];
      // 9. Create the layout for the bar chart.
      var barLayout = {
        title: "Actor's Successful Movies",
        xaxis: { title: "Movie Titles"},
        yaxis:  { title: "Revenue"}
      };
      // 10. Use Plotly to plot the data with the layout.
      Plotly.newPlot("bar", barData, barLayout);
})

// CHART: Composer
d3.json("/getData/"+newComposer, {
  method: 'POST',
  headers: {
      "Content-type": "application/json; charset=UTF-8"
  },
  // body: JSON.stringify({"actor":newComposer})
  body: JSON.stringify(newComposer)
}).then(function (data) {
console.log(data)
x_vals = data.map(x => x.title)
console.log(x_vals)
y_vals = data.map(y => y.revenue)
console.log(y_vals)
// 8. Create the trace for the bar chart.
var barData = [{
 x: x_vals,
 y: y_vals,
      type: "bar"
    }];
    // 9. Create the layout for the bar chart.
    var barLayout = {
      title: "Composer's Successful Movies",
      xaxis: { title: "Movie Titles"},
      yaxis:  { title: "Revenue"}
    };
    // 10. Use Plotly to plot the data with the layout.
    Plotly.newPlot("bar", barData, barLayout);
})
};

// 1. CREATE buildCharts FUNCTION ///////////////////////////////////////
// function buildCharts(movies) {
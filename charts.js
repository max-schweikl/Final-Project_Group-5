function init() {
    // Grab a reference to the dropdown select element
    var selector = d3.select("#selCast");
  }
// INITIALIZE DASHBOARD ///////////////////////////////////////////
init();
function optionChangedCast(newActor) {
  newGenre = d3.select('#selGenre').node().value
  newCast = d3.select('#selCast').node().value

  // CHART: Cast
  d3.json("/getDataCast/"+newCast, {
    method: 'POST',
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    },
    body: JSON.stringify(newCast)
}).then(function (data) {
  console.log(data)
  x_vals = data.map(x => x.title)
  console.log(x_vals)
  y_vals = data.map(y => y.revenue)
  console.log(y_vals)
// Create the trace for the bar chart.
  var barData = [{
   x: x_vals,
   y: y_vals,
        type: "bar"
      }];
      // Create the layout for the bar chart.
      var barLayout = {
        title: "Actor's Successful Movies",
        xaxis: { title: "Movie Titles"},
        yaxis:  { title: "Revenue"}
      };
      // Use Plotly to plot the data with the layout.
      Plotly.newPlot("bar", barData, barLayout);
})
}
function optionChangedDirector(newActor) {
  newGenre = d3.select('#selGenre').node().value
  newDirect = d3.select('#selDirector').node().value
  newComposer = d3.select('#selComposer').node().value

  // CHART: Director
  d3.json("/getDataDirector/"+newDirect, {
    method: 'POST',
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    },
    body: JSON.stringify(newDirect)
}).then(function (data) {
  console.log(data)
  x_vals = data.map(x => x.title)
  console.log(x_vals)
  y_vals = data.map(y => y.revenue)
  console.log(y_vals)
// Create the trace for the bar chart.
  var barData = [{
   x: x_vals,
   y: y_vals,
        type: "bar"
      }];
      // Create the layout for the bar chart.
      var barLayout = {
        title: "Director's Successful Movies",
        xaxis: { title: "Movie Titles"},
        yaxis:  { title: "Revenue"}
      };
      // Use Plotly to plot the data with the layout.
      Plotly.newPlot("bar", barData, barLayout);
})
};

// CHART: Composer
function optionChangedComposer(newActor) {
  newGenre = d3.select('#selGenre').node().value
  newComposer = d3.select('#selComposer').node().value
d3.json("/getDataComposer/"+newComposer, {
  method: 'POST',
  headers: {
      "Content-type": "application/json; charset=UTF-8"
  },
  body: JSON.stringify(newComposer)
}).then(function (data) {
console.log(data)
x_vals = data.map(x => x.title)
console.log(x_vals)
y_vals = data.map(y => y.revenue)
console.log(y_vals)
// Create the trace for the bar chart.
var barData = [{
 x: x_vals,
 y: y_vals,
      type: "bar"
    }];
    // Create the layout for the bar chart.
    var barLayout = {
      title: "Composer's Successful Movies",
      xaxis: { title: "Movie Titles"},
      yaxis:  { title: "Revenue"}
    };
    // Use Plotly to plot the data with the layout.
    Plotly.newPlot("bar", barData, barLayout);
})
};

  // CHART: Genre
function optionChangedGenre(newActor) {
  newGenre = d3.select('#selGenre').node().value
  d3.json("/getDataGenre/"+newGenre, {
    method: 'POST',
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    },
    body: JSON.stringify(newGenre)
  }).then(function (data) {
    console.log(data[0]['count'])
  g_count = d3.select("#genreCount").text(data[0]['count'])
  g_rev = d3.select("#genreRev").text(data[0]['sum'])
  // g_count = data[0]['count']
  // g_rev = data[0]['sum']
})
};
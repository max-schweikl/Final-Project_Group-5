// Load data
// syntax to retrieve data from external data file (instead of web API)
// d3.json("samples.json").then(function(data){
//     console.log(data);
// });

    // THIS  SUBSECTION MAY NOT BE NECESSARY
    // WITH FOLLOWING CODE, CAN DISPLAY METADATA OF ANY INDIVIDUAL 
    // METADATA FUNC
// d3.json("samples.json").then(function(data){
//     firstPerson = data.metadata[0];
//     Object.entries(firstPerson).forEach(([key, value]) =>
//       {console.log(key + ': ' + value);});
// });

// Dropdown menu func "init"
// function init() {
    // var selector = d3.select("#selDataset");
  
    // d3.json("samples.json").then((data) => {
    // var sampleNames = data.names;
    // console.log(data);
    //   sampleNames.forEach((sample) => {
    //     selector
    //       .append("option")
    //       .text(sample)
    //       .property("value", sample);
    //   });

 // METADATA
    // function buildMetadata(sample) {
    //     d3.json("samples.json").then((data) => {
    //       var metadata = data.metadata;
    //       var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    //       var result = resultArray[0];
    //       var PANEL = d3.select("#sample-metadata");

// WITH FOLLOWING CODE, CAN DISPLAY METADATA OF ANY INDIVIDUAL 
d3.csv("archive/cast2.csv", function (data){
    console.log(data)
    console.log(data[1])
    console.log(data[1]["name"])
    }
);
    // This functions! prints every name
    // for (var i = 0; i < data.length; i++) {
    //     console.log(data[i]["name"]);
    //    }
    // });

////////////////////// INIT ATTEMPT #2 ///////////////////////////////////
// function init() {
// var selector = d3.select("#selCast"); 
//   d3.csv("archive/cast.csv", (data) =>
//   for (var i = 0; i < data.length; i++) {
//     console.log(data[i]["name"]);
//    }
//   )}

// SORT NAMES (https://stackoverflow.com/questions/42522588/sort-a-list-with-d3-showing-only-unique-values)
// What they started with:
// d3.map(buckets, function(d) { return d["Zip Code"]; }).size();
// var buckets = [...new Set(data.map(d => d.zip))];
// var heatmapChart = d3.csv("heatmap.csv", function(buckets) {
//     buckets.sort(function(a, b){
//         return d3.ascending(a["Zip Code"], b["Zip Code"]); 
//     })

// var data = d3.csvParse(d3.select("archive/cast2.csv").text());
// data.sort(function(a) {return d3.ascending(a.name);});
// console.log(data.map(d=>d.name));

// Dropdown menu func "init" ATTEMPT 1 ////////////////////////////////////
function init() {
    var selector = d3.select("#selCast");
    d3.csv("archive/cast2.csv", function (data) {
    var records = data
      records.forEach((record) => {
        console.log(record.name)
        {selector
          .append("option")
          .text(record.name)
          .property("value", record.name)
        }});
        })
    };
init()
// ADD UNIQUE NAMES EXAMPLE ////////////////////////////////////////////////
// data = d3.csv("archive/cast.csv")
// nameOuput = []
// var count = "Tom Hanks"
// for (j = 0; j < (data[j]["name"]).length; j++) {
//     for (k = 0; k < nameOutput.length; k++) {
//         if ( data[i]["name"][j] == nameOutput[k] ) {
//             start = true;
//         }
//     }
//     count++;
//     if (count == "Tom Hanks" && start == false) {
//         nameOutput.push((data[i]["name"])[j]);
//     }
//     start = false;
//     count = "Tom Hanks";
// }

// initialize dashboard
// init();

    // OPTIONCHANGED
    // function optionChanged(newCast) {
    //     //console.log(newCast);
    //     buildMetadata(newCast);
    //     //buildCharts(newCast);
    //     }

    // // METADATA
    // function buildMetadata(cast) {
    //     d3.csv("archive/cast.csv", (data) => {
    //       // var metadata = data.metadata;
    //       var resultArray = metadata.filter(castObj => castObj.id == cast);
    //       var result = resultArray[0];
    //       var PANEL = d3.select("#cast-metadata");

    //       PANEL.html("");
    //       //Object.entries(result).forEach(([key, value]) => {
    //       PANEL.append("h6").text(result.location);
    //     })};
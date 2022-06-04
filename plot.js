// Print data
d3.csv("archive/top100_unique4.csv", function (data){
    console.log(data)
    console.log(data[1])
    console.log(data[1]["name"])
    }
);

// Dropdown menu func "init" ////////////////////////////////////
function init() {
    // ACTORS //
    var selector = d3.select("#selCast");
    d3.csv("archive/top100_actors.csv", function (data) {
    var actors = data
      actors.forEach((actor) => {
        console.log(actor.name)
        {selector
          .append("option")
          .text(actor.name)
          .property("value", actor.name)
        }
        });
        })

    // COMPOSERS //
    var chooser = d3.select("#selComposer");
    d3.csv("archive/top100_composers.csv", function (data) {
    var composers = data
        composers.forEach((composer) => {
            console.log(composer.name)
            {chooser
              .append("option")
              .text(composer.name)
              .property("value", composer.name)
            }});
            })

    // DIRECTORS //
    var direct = d3.select("#selDirector");
    d3.csv("archive/top100_directors.csv", function (data) {
    var directors = data
      directors.forEach((director) => {
        console.log(director.name)
        {direct
          .append("option")
          .text(director.name)
          .property("value", director.name)
        }});
        })

    // GENRE //
    var gen = d3.select("#selGenre");
    d3.csv("archive/alph_genres.csv", function (data) {
    var genres = data
      genres.forEach((genre) => {
        console.log(genre.name)
        {gen
          .append("option")
          .text(genre.name)
          .property("value", genre.name)
        }});
        })

    };

init()

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
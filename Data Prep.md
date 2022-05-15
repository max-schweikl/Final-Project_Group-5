# Data Analysis

## Data Source Selected
Our group selected to utilize the full Kaggel movie database which was first seen in module 8 of the bootcamp, dealing with ETL. We chose this data source for completeness, size, and variability. 

## Description of Source Data

These files contain metadata for all 45,000 movies listed in the Full MovieLens Dataset. The dataset consists of movies released on or before July 2017. Data points include cast, crew, plot keywords, budget, revenue, posters, release dates, languages, production companies, countries, TMDB vote counts and vote averages.

This dataset also has files containing 26 million ratings from 270,000 users for all 45,000 movies. Ratings are on a scale of 1-5 and have been obtained from the official GroupLens website.

## Content of Source Files
This dataset consists of the following files:

<table>
<tr>
<td>
movies_metadata.csv 
</td>
<td>The main Movies Metadata file. Contains information on 45,000 movies featured in the Full MovieLens dataset. 
The data is in the format:

<pre>
    index bigint,
    belongs_to_collection text,
    budget integer,
    genres text,
    homepage text,
    id bigint,
    imdb_id text,
    original_language text,
    original_title text
    overview text,
    popularity double precision,
    poster_path text,
    production_companies text,
    production_countries text,
    release_date timestamp without time zone,
    revenue double precision,
    runtime double precision,
    spoken_languages text,
    status text,
    tagline text,
    title text,
    video boolean,
    vote_average double precision,
    vote_count double precision,
</pre>

Genres are a pipe-separated list, and are selected from the following:
<ul>
<li>
Action
</li>
<li>
Adventure
</li>
<li>
Animation
</li>
<li>
Children's
</li>
<li>
Comedy
</li>
<li>
Crime
</li>
<li>
Documentary
</li>
<li>
Drama
</li>
<li>
Fantasy
</li>
<li>
Film-Noir
</li>
<li>
Horror
</li>
<li>
Musical
</li>
<li>
Mystery
</li>
<li>
Romance
</li>
<li>
Sci-Fi
</li>
<li>
Thriller
</li>
<li>
War
</li>
<li>
Western
</li>
<li>
(no genres listed)
</ul>

The vote average and vote count fields hold the reviews from TMDB, <a link="www.themoviedb.org">The movie DataBase</a>, for the film.
</td>
</tr>
<tr>
<td>
credits.csv: 
</td>
<td>
Each line of this file after the header row represents one movie. A movie record has the following format:

cast,crew,id

The Cast and Crew columns are a stringified JSON Object containing the appropriate list.

The id field is the movie id
</td>
</tr>
<tr>
<td>
ratings.csv
</td>
<td>
All ratings are contained in the file ratings.csv. Each line of this file after the header row represents one rating of one movie by one user, and has the following format:

userId,movieId,rating,timestamp

The lines within this file are ordered first by userId, then, within user, by movieId.

Ratings are made on a 5-star scale, with half-star increments (0.5 stars - 5.0 stars).

Timestamps represent seconds since midnight Coordinated Universal Time (UTC) of January 1, 1970.
</td>
</tr>
</table>

## Data Preparation

### Movie Metadata

The first file we read in was the movie_metadata.csv file. We need to do some ETL to prepare the data for analysis. This includes:

<img src="week1/metadata_prep.png">

 - We drop all the adult movies, they are not included in this analysis.
 - We drop the adult column
 - We transform the budget column to a numeric
 - We transform the id column to a numeric
 - We transform the popularity column to a numeric
 - We transform the release_date column to a datetime

### Ratings

The next file we read in is the ratings.csv file. The only ETL we needy to perform on this dataset is to set the timestamp to timestamp, to make sure we have an appropriate date for analysis.

<img src="week1/ratings_prep.png">


### Credits

The last file we read in is the credits.csv file. This file needs the most extensive ETL to prepare the data for analysis.

The cast field of this file contains a string representation of a JSON object which is a list of dictionaries. Each dictionary in the list contains a cast members information.

The information contains things like:

- Movie ID
- Actor's Name
- Character Played  

An example would look like:

<pre>
[{'cast_id': 14, 'character': 'Woody (voice)', 'credit_id': '52fe4284c3a36847f8024f95', 'gender': 2, 'id': 31, 'name': 'Tom Hanks', 'order': 0, 'profile_path': '/pQFoyx7rp09CJTAb932F2g8Nlho.jpg'}, {'cast_id': 15, 'character': 'Buzz Lightyear (voice)', 'credit_id': '52fe4284c3a36847f8024f99', 'gender': 2, 'id': 12898, 'name': 'Tim Allen', 'order': 1, 'profile_path': '/uX2xVf6pMmPepxnvFWyBtjexzgY.jpg'}]
</pre>

The crew field of this file contains a string representation of a JSON object which is a list of dictionaries.  

The information contains things like:

- Movie ID
- Crew Member's Name
- Crew member's Department
- Crew members Job  

An example would look like:

<pre>
[{'credit_id': '52fe4284c3a36847f8024f49', 'department': 'Directing', 'gender': 2, 'id': 7879, 'job': 'Director', 'name': 'John Lasseter', 'profile_path': '/7EdqiNbr4FRjIhKHyPPdFfEEEFG.jpg'}, {'credit_id': '52fe4284c3a36847f8024f4f', 'department': 'Writing', 'gender': 2, 'id': 12891, 'job': 'Screenplay', 'name': 'Joss Whedon', 'profile_path': '/dTiVsuaTVTeGmvkhcyJvKp2A5kr.jpg'}]
</pre>

The ETL processing of this dataset involves the following steps:
<ol>
<li>Read the file into a dataframe</li>
<li>Set up a for loop to walk through the dataframe one record at a time</li>
<li>Set up a varibale which contains the string of the JSON object containing the list of cast for a movie</li>
<li>Utilize the literal_eval function to change a string into an actual JSON object</li>
<li>Set up a for loop to walk through the JSON object one dictionary at a time</li>
<li>Read the data out of the dictionary</li>
<li>append the read data in to a new dataframe for cast members</li>
<li>Set up a varibale which contains the string of the JSON object containing the list of crew for a movie</li>
<li>Utilize the literal_eval function to change a string into an actual JSON object</li>
<li>Set up a for loop to walk through the JSON object one dictionary at a time</li>
<li>Read the data out of the dictionary</li>
<li>append the read data in to a new dataframe for crew members</li>
</ol>
<img src="week1/credit_prep.png">

After the process runs, our final cast dataframe looks like:

<img src="week1/cast_data.png">

After the process runs, our final crew dataframe looks like:

<img src="week1/crew_data.png">


## Calculated Fields

## Ratings

Our data file for ratings, rating.csv, has 26,024,289 ratings for movies. The first set of calculated fields we want to do is to do counts of ratings by movie. 

<img src="week1/ratings_count.png">

This will allow us to add these values to the movies data, and not have to keep a ratings table in the database. 

<img src="week1/movies_ratings_prep.png">

# First pass at Database

Now that our data is ready, we can build the three tables we need

<img src="week1/load_database.png">

We have the following tables loaded and ready for further analysis:

<ul>
<li>Cast</li>
<li>Crew</li>
<li>Movies with ratings</li>
</ul>

# Next Steps in Data Prep for Analysis

Now that we have the data in tables in the database, we can do the next stages of data analysis with SQL.

The next steps of data cleansing will include:
<ul>
<li>we have found a number of columns which won't be necessary for the analysis process. These columns will be dropped:</li>
<ul>
<li>Belong to Collection</li>
<li>Homepage</li>
<li>Overview</li>
<li>Poster</li>
<li>Spoken_Language</li>
<li>Status</li>
<li>Tagline</li>
<li>Video</li>
</ul>
<li>we have found a number of columns which look like JSON lists. we will have to process these into new tables:</li>
<ul>
<li>Production Company</li>
<li>Genre</li>
</ul>
The finally thing we will have to do to finalize the data for analysis is when the counts for ratings were calculated, there a number of columns with NULL as the value. We will have to replace those NULLs with zeros.  
</ul>






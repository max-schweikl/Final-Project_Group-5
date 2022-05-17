// HOW TO CONNECT TO POSTGRESS (at least from jupyter)
// --IMPORTS
// from config import db_pw
// from sqlalchemy import create_engine
// -- POSTGRES
// # f"postgresql://[user]:[password]@[location]:[port]/[database]"
// db_string = f"postgresql://postgres:{db_pw}@127.0.0.1:5432/movie_data"
// --CREATE DB ENGINE
// engine = create_engine(db_string)
// -- PUT IT ALL TOGETHER
// movies_df.to_sql(name='movies', con=engine)

// HOW TO CREATE A CHART (matplotlib)
// --IMPORTS
// # Add Matplotlib inline magic command
// %matplotlib inline
// # Dependencies and Setup
// import matplotlib.pyplot as plt
// import pandas as pd
// # Load data
// name_file = "file_path/doc.csv"
// # Read data
// name_file_df = pd.read_csv(name_file)

// CHART
// # 8. Using the object-oriented interface method, plot the resample DataFrame using the df.plot() function. 

// # Import the style from Matplotlib.
// from matplotlib import style

// from matplotlib.dates import DateFormatter
// import matplotlib.dates as mdates
// import datetime as dt

// # Use the graph style fivethirtyeight.
// style.use('fivethirtyeight')

// # Add labeling to graph
// fig, ax = plt.subplots(figsize=(20, 5))
// ax.plot(weekly_sum_of_fares)
// plt.ylabel("Fare ($USD)")
// plt.xlabel("Date (in 2019)")
// plt.title("Total Fare by City Type")

// # Format labels on x-axis
// xfmt = mdates.DateFormatter('%b')
// months = mdates.MonthLocator()
// ax.xaxis.set_major_locator(months)
// ax.xaxis.set_major_formatter(xfmt)

// # Create a legend
// plt.legend(["Rural","Suburban","Urban"], mode="Expanded", loc="center", title="type")

// # Save the figure.
// plt.savefig("PyBer_fare_summary.png")
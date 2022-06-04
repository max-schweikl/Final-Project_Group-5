from flask import Flask, render_template, request, jsonify
import os
import pandas
app = Flask(__name__)
@app.route("/")
def index():
    return render_template("index.html")

@app.route("/getData/<actor>", methods=["POST", "GET"])
def getData(actor):
    filePath = os.getcwd()
    # Read in csv's
    castFile = pandas.read_csv(filePath +"\\static\\archive\\cast2.csv")
    moviesFile = pandas.read_csv(filePath +"\\static\\archive\\movies_ratings.csv")
    # Use loc on castFile
    castList = castFile.loc[castFile.name==actor]
    # use merge to find movies
    moviesFound = moviesFile.merge(castList, left_on = 'id', right_on = 'movie_id')
    print(moviesFound)
    # buildCharts(moviesFound)
    # replace null values
    moviesFound = moviesFound.fillna(0)
    return jsonify(moviesFound.to_dict("records"))

if __name__ == "__main__":
    app.run(debug=True)
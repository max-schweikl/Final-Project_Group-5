# IMport dependencies
%matplotlib inline
import matplotlib.pyplot as plt
import psycopg2
import pandas as pd
from sqlalchemy import create_engine
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score

# Create and engine instance
engine = create_engine('postgresql+psycopg2://test:@127.0.0.1', pool_recycle=3600)

# Connect to PostgreSQL server
dbConnection = engine.connect()

# Read data from PostgreSQL database table and load into a DataFrame instance
df = pd.read_sql("select * from #############", dbConnection)
pd.set_option('display.expand_frame_repr', False)

# Print the DataFrame
print(df)

#Split the data into test and training datasets
X_train, X_test, y_train, y_test = train_test_split(X,
    y, random_state=1)

#Setup up the Logistic regression model
classifier = LogisticRegression(solver='lbfgs', random_state=1)
classifier

LogisticRegression(C=1.0, class_weight=None, dual=False, fit_intercept=True,
   intercept_scaling=1, max_iter=100, multi_class='warn', penalty='12',
   random_state=1, solver='lbfgs' tol=0.0001, warm_start=False)

#train the model
classifier.fit(X_train, y_train)

#results dataframe
predictions = classifier.predict(X_test)
pd.DataFrame({"Prediction": predictions, "Actual": y_test})

accuracy_score(y_test, predictions)

#This is just a basic outline of the machine learning code
#We will have to add some bucketing or scaling depending on how 
#the final dataset looks. 
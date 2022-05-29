# Segment 2 - Machine Learning

## Description of preliminary data preprocessing
A bulk of the preprocessing was done using the OneHotEncoder module to change the categorical features (actors, directors, genres, writers, and composers) into usable numerical columns.  I tried to do this inline while creating the machine learning model. this was unable to be accomplished due the memory restriction on my computer. So instead, we had to One Hot Encode each table individually. We then loaded the encoded tables back into Postgres and joined them there, again due to system limitations. Once joined we were able to load the table back into Jupyter Notebook.  

## Description of preliminary feature engineering and preliminary feature selection 
The initial features that we want to look at are budget, rating, runtime, top 100 actors, directors, writers and composers. After testing the data, we learned that the dataset was too large to process. We limited it top 50 directors, writers and composers.   

## Description of how data was split into training and testing sets
The data was split into training and testing data using the standard test_train_split module in sklearn.model_selection. One question we ran was to rebalance the training data or not. Before rebalancing there were twice as many successes as failures in our y values. 

## Explanation of model choice, including limitations and benefits
Initially we were looking at the logistic regression and random forest models. At this point, neither model is working out ideally. The logistic regression model is predicting all the test data as a success, which is not proper. Even when the training data is rebalanced, we still get the model predicted all successes. 
The random forest model isn't working that well either. It is predicting with a 99.9% accuracy. Given the amount of features that it is being presented with, this accuracy is too great and the model is probably being overfitted. Even rebalancing didn’t correct this overfitting. 

Application Overview:

Farmers can take a picture of the diseased plant leaves using the user interface, which is 
designed as an Android mobile app. The illness category and confidence level are then 
displayed. This approach is anticipated to improve farmers' ability to maintain healthy crops 
and prevent the use of inappropriate fertilizers that can stress plants. Finally, our system is
using a variety of performance indicators, including processing speed and classification 
accuracy.



Instructions for running android application

You need Android Emulator to run this code
Run this code using following command
-Unzip the planapp
-cd <user>/plantapp/
-npm install
-npm start
press "a" to run it over android

Database:
database is running on UTA cloud, sql schema file is provided in zip.

How to run ML model
python predict.py
predicy.py file have UPLOAD_FOLDER to use it for temporary storage of your image
along with that model.h5 file is provided 
We have provided the sample images to run in ./TestData directory

NOTE: AFTER RUNNING MODEL YOU NEED TO PROVIDE YOUR "localhost:5000/detect" 
      ADDRESS IN APPLICATION DETECTON MODULE TO PREDICT.

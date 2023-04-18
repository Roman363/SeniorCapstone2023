# CS4311_Naive_6SunCitySoftware_Spring2023

#Version Number : 1.2


This is Team 6 with our own version of the Naive Project we have been working on since the fall 2022 semester.
In order to be able to run our Naive system, you will need to have the following libraries installed 
which are : React, flask , flask_cors, pymongo, and yaml.
 
Commands to install each of them go as follow:
flask : pip install flask
flask_cors: pip install flask_cors
pymongo : pip instal pymongo
yaml: pip install pyyaml

To run the project properly, run with two terminals in which one runs the app.py file located
in the server folder, while the other terminal is running the frontend code.

To run client code : 
1. use "cd client" to switch into the client folder
2. put in command "npm start" which will enable you to view the site for NAIVE via localhost

To run server code:
1. In another terminal, use the command "cd server" to switch into the server folder 
2. Afterwards use the command "python app.py" for the app.py file to run and you will see the data retrieved 
from MongoDB for the tables and also the maps that we are creating from the data.


# Project description

The Naive system will allow the analyst to create and define
different network maps which show the nodes and the connections between them.
The analyst will need to login with their initials in order to start using the system,
and along with that they have three different options to create, open or delete a project.
If the analyst decided to create a new project, they will be allowed to browse the local files
in their laptop or computer in order to create the project from the INVA/DE rollup file.
If the file is chosen and there are no errors, a message will appear stating that the rollup 
creation was successful and will return you to the main page.  

If the analyst decides to open a previous project, they will be redirected to the OpenProject page 
which has a selection menu to open project 1 or project 2 (doing it for testing purposes) along with a 
search bar which they can type in the project that they are looking for. There is also a back button 
which will lead the analyst back to the main page. 

# How to use Naive / Boot up the system.


The Naive interface first gives the user a series of prompts to ascertain the data that is going to be used within the system; requiring information about the Network - Internet, Intranet, or Otherwise - that will be observed. Once applied, the user in question will receive access to a network map created by the system given the default parameters. At this point, a user is free to alter the data given to them, via Node interaction – the Map can be told to invoke new interactions between network and devices or be told that a device may jeopardize the network and be set as ‘Attacked’, which the system will take any nodes reliant on the affected and mark them accordingly. When finished, the user can save and retrieve this information by exporting it to physical media or other digital media such as PDF. 

1.Ensure latest version of Kali Linux is up and running

2.Login with credentials to start up NAIVE.


3.Select from the options to “create a new project” , “open a recent project”, or “delete project” 

3a)  If you have selected “Create project” : enter the project name, and press the enter button for the new project to be created.

3b)  If you have selected “open project”, you will be given a drop down menu of the different projects that you are allowed to open from. (go to step 4)

3c)  If you have selected “delete project”, you will be given the list of maps stored within this program for selection. Choosing any with the prompt will highlight them for deletion - shown at the bottom of the prompt.


4. After choosing the project, you will be redirected to the main dashboard page where there are three buttons which will allow you to stay in the “Main dashboard”, go to the “Cyber VA Dashboard” or go to the “Assessment Dashboard”.

4a. Clicking on the “Cyber VA Dashboard” button will allow you to select from a drop down menu to view information such as the network map, network statistics, network volume, or the TAK map. 

4b. Clicking on the “Assessment Dashboard” button will allow you to view a different drop-down menu where the focus revolves on understanding map factoids such as date created, file size, networks involved in the map.

5.In the Cyber VA Dashboard, you will be able to make changes to the network statistics, vulnerabilities, network map and TAK map by allowing edits, deletions, additions, and the ability to export each of these options. 

# Dependencies
Linux Version - Kali Linux 2022.4 Debian 11

Laptop Specs - 



# Environmental Information 

Testing database : Located in MongoDB 
url: https://cloud.mongodb.com/v2/63e7ecdae91bc92f7b039373#/metrics/replicaSet/63e863ce80db0533d656da05/explorer/Naive/canvasmaps/find

Testing NAIVE: Localhost and Kali Linux








# CS4311_Naive_-Team-6-Sun-City-Software-_Spring2023

#Version Number : 1.1


This is Team 6 with our own version of the Naive Project we have been working on since the fall 2022 semester.
In order to be able to run our Naive system, you will need to have the following libraries installed 
which are : React, flask , flask_cors, pymongo, and yaml.
 
Commands to install each of them go as follow:
flask : pip install flask
flask_cors: pip install flask_cors
pymongo : pip instal pymongo
yaml: pip install pyyaml


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

# How to use Naive


The Naive interface first gives the user a series of prompts to ascertain the data that is going to be used within the system; requiring information about the Network - Internet, Intranet, or Otherwise - that will be observed. Once applied, the user in question will receive access to a network map created by the system given the default parameters. At this point, a user is free to alter the data given to them, via Node interaction – the Map can be told to invoke new interactions between network and devices or be told that a device may jeopardize the network and be set as ‘Attacked’, which the system will take any nodes reliant on the affected and mark them accordingly. When finished, the user can save and retrieve this information by exporting it to physical media or other digital media such as PDF. 








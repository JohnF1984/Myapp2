#Assignment 1 - AngularJS app.

Name: John Fitzpatrick

###Overview.
Based on the inspirational George Constanza (of Seinfeld fame) who became rich by creating an app that listed all the public toilets in New York City and where they were, I decided I wanted to do something similar with breastfeeding facilities around Ireland. The source of this idea came from a family holiday last year in which we were travelling from Waterford to Westport but had to stop somewhere around Gort to feed our child. I thought at the time... Wouldn't it be wonderful if there was an application that would let me know where such a public amenty might be? 

This is an attempot at such an application. It has such a list of breastfeeding facilities available. (based on underlying json data). Here you can search by county/town or what's the most popular. Underlying information for each facility deals with on-site parking/directions and other baby friendly amenities close by.

In addition, there is a also a community form for parents to leave feedback about various experiences they have had while out with their young children. Here you can search these experiences by type, town/county and most popular. 


###List of user features (excluding user registration and authentication)  
 
 + List of Breastfeeding facilities around Ireland - and to filter a search around these (static list stored in json data)
 + Ability to drill down to view each facility - includes information on parking/direction/other baby amenities (static data stored in json data)
 + Feature to suggest further breastfeeding facilities to be added to the above list
 + Feature to create 'baby adventure story'.Basically a community form to share feedback with other parent
 + Feature to search these stories by toen/county/type and most popular
 + Feature to upvote both the breastfeeding facilities and the user stories

###Installation requirements.
+ AngularJS 1.x
+ Bootstrap 3
+ Firebase

To view the application. Pull all files from this directory (Myapp) and In a terminal redirect to that directory. Run the http-server and enter the following in the browser: http//locahost/8080/BabyAdventuresApp/#/home 

###Data Model Design.

There are two sources of data for the app. (as it currently stands - with no back end development)

For /Feedback - The community form it is user based information and stored locally in memory

![][image1]

For /Facilities - List of Breastfeeding facilities. This is stored json data in the facilities folder (which is attached) 

![][image5]![][image6]

The data is all relevent to what you might want to find for such an app

###App Design.

A simple diagram showing the app's component design, in particular controllers and services (see example below).

![][image4]

###UI Design.

Screenshot of /landing

![][image7]

Screenshot of /facilities:

![][image8]

Screenshot of /facilities/:id:

![][image9]

Screenshot of /add

![][image10]

Screenshot of /feedback

![][image11]

Screenshot of /about

![][image12]

Screenshot of /home

![][image13]

###Routing.

. . . . List each route supported and state the associated view . . . . . 
+ /landing - Home page
+ /about - Information about this app (the inspiration behind it etc)
+ /facilities - lists all breastfeeding facilities
+ /facilities/:id/{location} - information on that specific breastfeeding facility
+ /add - page that allows users to suggest additional facilities
+ /feedback - Page that allows users share their baby adventure experiences
+ /feedback/:id/comment - view/add comments on each specific post from the /feedback
+ /home - Login page
+ /Register - Register page


###Extra features

All features used in the creation of this app came from or were extended from the activities developed in the labs for this course. These were amended in the following way:
Developed Phonecatalogue app:
+ Added upvotes to the list of statis data created from a jsaon file
+ changed the structure of the json file to make information more relavent
+ Added a link to the drill down page to leave feedback (which linked back to the feedback page)
+ Changed the search criteria in the sidebar to search by town, county and what was most popular
Developed hackerapp:
+ Resturctred page so that data was more relavent, including changing the appearence of the entry boxes and what the output was.
+ Added a drop down list to the data entry form
+ Changed the search criteria in the sidebar to search by type (from drop down), town, county and what was most popular
+ The search by type filter means that the app will only show posts that relate to the option chosen and not everything else in a specific order
+ Used this specific feature to create a second coment/post page that allows users reccommend additional breastfeeding facilities
Other pages:
Added a navbar to each page (via index)
+ Added Home and about pages with specific bootstrap conditioning. This included changing the background to stored inamges for improved appearence
+ User authentication - Added a firebase structured user authentication* This is only half done. As you can see, you can still freely move around the application - so the log on authentication is actually useless

###Independent learning.

I sure wished I had stored the url's of every stack overflow discussion page now. Here are a few of the sites searched for inspiration in trying to find out how to do the following:
+ How does Angular work
+ What is bootstrap
+ Form validation
+ How to create an interactive map with html (nice if I had time)
+ User authentication - How to add it
+ How to add a form with a drop down list
+ How to edit a json file and save the changes from the front end (its impossible you dummy)
+ how to style a webpage
+ how to hide a navbar for a particular page
+ how to use firebase to redirect all views to the login screen

Links:
+ https://docs.angularjs.org/api/ng/directive/ngController
+ https://scotch.io/tutorials/angularjs-form-validation
+ http://viralpatel.net/blogs/angularjs-controller-tutorial/
+ http://jasonwatmore.com/post/2015/03/10/AngularJS-User-Registration-and-Login-Example.aspx
+ http://embed.plnkr.co/tg25kr/preview
+ http://stackoverflow.com/questions/30791458/username-and-password-validation-in-html
+ http://stackoverflow.com/questions/2906582/how-to-create-an-html-button-that-acts-like-a-link
+ http://dev.filkor.org/2013/04/14/create-an-interactive-map-using-javascript-and-html-5-canvas/
+ http://www.w3schools.com/css/css_font.asp
+ http://stackoverflow.com/questions/16261348/descending-order-by-date-filter-in-angularjs
+ http://v4-alpha.getbootstrap.com/components/input-group/
+ http://www.w3schools.com/html/html_forms.asp
+ http://www.w3schools.com/tags/att_input_type.asp
+ http://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_input_type_time
+ http://www.w3schools.com/html/html_form_elements.asp 
+ http://www.w3schools.com/cssref/css_colors.asp





[image1]: ./model.png
[image2]: ./design.png
[image3]: ./screen.png
[image4]: ./controllers.png
[image5]: ./image5.png
[image6]: ./image6.png
[image7]: ./image7.png
[image8]: ./image8.png
[image9]: ./image9.png
[image10]: ./image10.png
[image11]: ./image11.png
[image12]: ./image12.png
[image13]: ./image13.png


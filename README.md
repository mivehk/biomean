**<h1>Impaired Kidney Monitoring</h1>**
**BMP Dependent Early Detection **</br>
Demo Video: https://youtu.be/4EihpP14J7k
</br>
<h4>Since March 2020 many people lost their family members due to direct or indirect circumstances of COVID-19 infection despite courageous effort exerted by health care professionals around the globe; nevertheless, there are instances of negligence in decision making or medical errors that demands implementing stronger guidelines to leverage evidence based preventative measures backed up by medical science, epidemiologic studies and prospective research trials. </br></br>
Kidney Disease often has no symptoms until your kidneys are badly damaged. So, the only way to know how efficiently they are working, is to get tested. Blood and urine test!  Blood test checks filtration rate and the level of muscle waste in blood stream and urine test checks for protein, which may indicate kidney damage. This is especially important for people who have diabetes, high blood pressure or family history of kidney disease.  The fact is that even before covid-19 pandemic, renal impairment was hypothesized to be associated with insufficient monitoring of kidneys. for example, importance of kidney monitoring in children after pediatric cardiac surgery to avoid kidney injuries or patients with irregular heart beat rate who are using blood thinner medications. If patients with impaired kidney could monitor their kidney functionality on daily basis like how they can measure their blood pressure and blood sugar level at home , then we can certainly help to resolve the insufficiency in monitoring. </br></br>
One big problem is that currently there is no reliable and FDA approved wearable sensor for monitoring kidney at home. Today we see fitness activity smartwatches that can monitor heart rate and quality of sleep or there are even continuous glucose monitoring sensors like Dexcom that can transmit glucose levels wirelessly to an insulin pump with a monitoring software on a smart phone.  This is a prototype for an application that collects basic metabolic panels to combine relevant patterns of data for a cue in clinical decision support system and perform statistical analyses using single patient’s historical data compared with broader population.</br></br>

Here is an instruction on how to prepare a node.js application:</h4>
</br>
============================================================

1- Prepare a dedicated directory for application binary and files.

Make sure Node and Node package manager(npm) are installed on system (you can usually verify it using these two commands "npm --version" and "node --version")

https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/setting-up-node-on-ec2-instance.html

----------------------------------------------
2- Setup local Git Repositiry and connect it to Github (optional).

```
%git init
%touch readme.md
%touch .gitignore
%git add readme.md
%git commit -m "first commit"
%git status
%git branch
%git remote add "name-of-remote-repo" "https://<link-to-github-repositry>"
#you may have to configure access token on Github repo.
%git remote
%git push <name-of-remote-repo> master
```
-------------------------------------------------------
3- Install mongodb community and mongosh.
  
https://docs.mongodb.com/manual/administration/install-community/


Here is a recap of steps for Mac:
<br/>
```
#brew update
%brew tap mongodb/brew
%brew install mongodb-community@5.0
%mongod --config /usr/local/etc/mongod.conf --fork
%ps aux | grep -v grep | grep mongod
user1           32113   0.1  0.2  5530616  27800   ??  S     2:14PM   0:44.47 mongod --config /usr/local/etc/mongod.conf --fork
```
=======

-------------------------------
4- Initialize Node and required packages.
<br/>
```
%npm init
%npm install express
%npm install babel-cli babel-preset-env babel-preset-stage-0
%npm install body-parser nodemon
```
5- Deploy your code and start Node.

=======


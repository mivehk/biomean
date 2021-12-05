*<h1>Save a Life</h1>*
**BMP Tracker as a marker for Pathogenesis of Ischemic Stroke.**</br>
####Many people lost their family members due to direct or indirect covid circumstances since March 2020 despite courageous effort exerted by medical staff around the globe; however, there are instances of negligence in decision making or medical malpractice which makes you think about the necessity of implementing stronger guidelines to leverage preventative measurements which are backed up by data presented for hundreds and thousands other patients in similar circumstances.  Referencing records provided by Biomedical findings supposed to be translated into better clinical decision making and help to identify risk factors that contribute strongly to disease states. I recently lost my mother in one of those cases that Physician ignored records of a patient with Hyperglycemia with high Creatinine Serum levels despite symptoms such as dizziness or pain in the left upper arm and neck during a virtual visit without any sense of urgency to transfer the patient into Emergency Service when she suffered through an Embolic Ischemic Stroke at the same night.
####There has been some research conducted by NIH since the 90s to emphasize the Epidemiological relationships between Renal Dysfunction in patients with cardiovascular disease which suggests Pathogenesis to Ischemic Stroke but, it does not seem that result has been translated from bench to bed properly. Studying in the field of Bioinformatics can help to build Computational tools which provide the evidence required for better decision making and my goal is to help patients such as my mother
####This is a prototype for a tool that collects basic metabolic panels such as eGFR, Creatinine Serum, and Glucose levels powered by MEAN Stack to provide tracking charts for better patient monitoring.
Below is an instruction on how to prepare a simple node application:
</br>
============================================================

1- Prepare a dedicated directory for application binary and files:

make sure node and node package manager(npm) are installed on system (you can verify this using "npm --version" and "node --version")

----------------------------------------------
2- Setup local Git Repositiry and connect it to Github (optional)

```
<br/>#git init
<br/>#touch readme.md
<br/>#touch .gitignore
<br/>#git add readme.md
<br/>#git commit -m "first commit"
<br/>#git status
<br/>#git branch
<br/>#git remote add "name-of-remote-repo" "https://<link-to-github-repositry>"
  <br/>you may have to configure access token on Github repo.
<br/>#git remote
<br/>#git push <name-of-remote-repo> master
```
-------------------------------------------------------
3- Install mongodb community and mongosh
  
https://docs.mongodb.com/manual/administration/install-community/
<<<<<<< HEAD

Here is a recap of steps for Mac
<br/>
```
#brew update
<br/>#brew tap mongodb/brew
<br/>#brew install mongodb-community@5.0
<br/>#mongod --config /usr/local/etc/mongod.conf --fork
<br/>#ps aux | grep -v grep | grep mongod
<br/>user1           32113   0.1  0.2  5530616  27800   ??  S     2:14PM   0:44.47 mongod --config /usr/local/etc/mongod.conf --fork
```
=======

Here is a recap of steps for Mac
<br/>
```
#brew update
<br/>#brew tap mongodb/brew
<br/>#brew install mongodb-community@5.0
<br/>#mongod --config /usr/local/etc/mongod.conf --fork
<br/>#ps aux | grep -v grep | grep mongod
<br/>user1           32113   0.1  0.2  5530616  27800   ??  S     2:14PM   0:44.47 mongod --config /usr/local/etc/mongod.conf --fork

<br/>#npm install mongodb mongoos
```
-------------------------------
4- Initialize node and required packages
<br/>
```
#npm init
<br/>#npm install express
<br/>#npm install babel-cli babel-preset-env babel-preset-stage-0
<br/>#npm install body-parser nodemon
```
<<<<<<< HEAD

=======


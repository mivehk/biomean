**Basic Metabolic Tracker.**

Many people lost their family members due to direct or indirect covid circumstances since March 2020 in spite of courageous effort exerted by Health around the globe; however, there are instances of negligence in decision making or medical malpractice which makes you think deeper about the necessity of implementing stronger guidelines for non-critical medical staff to leverage preventative action items which are backed up by data presented for hundreds and thousands other patients in similar circumstances.  Reference to records provided by biomedical findings supposed to be translated into better clinical decision making and help to identify risk factors that contribute strongly to disease states and I recently lost my mother in one of these cases that physician did not pay attention to the history of patients with renal dysfunction specifically with high creatinine serum while complaining about symptoms such as dizziness or pain in left upper arm and neck during a virtual visit without any sense of urgency to inform me of transferring my mother into Emergency Service at the same night she suffered from acute embolic ischemic stroke.
There has been research conducted by NIH since the 90s to emphasize the epidemiological relationships between renal dysfunctions in patients with cardiovascular disease which suggests pathogenesis to ischemic stroke but, it does not seem that result has been translated from bench to bed properly to mandate clinical team for diagnosis measurement. Studying in the field of bioinformatics can help to build computational tools which provide the evidence required for better decision making and my goal is to help patients such as my mother who could have continued their life if it was not for such medical malpractices. 
This is a tool that collects some basic metabolic panels such as eGFR , creatinine serum, and glucose levels powered by MEAN Stack to provide tracking charts for better patient's health risk analysis.

This is an instruction on how to prepare a simple node application: 

============================================================

1- Prepare a dedicated directory for application binary and files:

make sure node and node package manager(npm) are installed on system (you can verify this using "npm --version" and "node --version")

----------------------------------------------
2- Setup local Git Repositiry and connect it to Github (optional)

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

-------------------------------------------------------
3- Install mongodb community and mongosh
  
https://docs.mongodb.com/manual/administration/install-community/

Here is a recap of steps for Mac
<br/>#brew update
<br/>#brew tap mongodb/brew
<br/>#brew install mongodb-community@5.0
<br/>#mongod --config /usr/local/etc/mongod.conf --fork
<br/>#ps aux | grep -v grep | grep mongod
<br/>user1           32113   0.1  0.2  5530616  27800   ??  S     2:14PM   0:44.47 mongod --config /usr/local/etc/mongod.conf --fork

<br/>#npm install mongodb mongoos

-------------------------------
4- Initialize node and required packages
<br/>#npm init
<br/>#npm install express
<br/>#npm install babel-cli babel-preset-env babel-preset-stage-0
<br/>#npm install body-parser nodemon

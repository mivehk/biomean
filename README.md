#####Basic Metabolic Tracker.
Many people lost their family members due to direct or indirect covid circumstances since March 2020 in spite of courageous effort exerted by medical staff around the globe; however, there are instances of negligence in decision making or medical malpractice which makes you think deeper about the necessity of implementing stronger guidelines for non-critical medical staff to leverage preventative action items which are backed up by data presented for hundreds and thousands other patients in similar circumstances.  Reference to records provided by biomedical findings supposed to be translated into better clinical decision making and help to identify risk factors that contribute strongly to disease states and I recently lost my mother in one of these cases that physician did not pay attention to the history of patients with renal dysfunction specifically with high creatinine serum while complaining about symptoms such as dizziness or pain in left upper arm and neck during a virtual visit without any sense of urgency to inform me of transferring my mother into Emergency Service at the same night she suffered from acute embolic ischemic stroke.
There has been research conducted by NIH since the 90s to emphasize the epidemiological relationships between renal dysfunctions in patients with cardiovascular disease which suggests pathogenesis to ischemic stroke but, it does not seem that result has been translated from bench to bed properly to mandate clinical team for diagnosis measurement. Studying in the field of bioinformatics can help to build computational tools which provide the evidence required for better decision making and my goal is to help patients such as my mother who could have continued their life if it was not for such medical malpractices. 
This is a tool that collects some basic metabolic panels such as eGFR , creatinine serum, and glucose levels powered by MEAN Stack to provide tracking charts for better patient's health risk analysis.

This is an instruction on how to prepare simple node app 
============================================================
1- Prepare a dedicated application directory:
make sure node and npm are installed on system (npm --version , node --version)
----------------------------------------------
2-Setup git connectivity(optional)
#git init
#touch readme.md
#touch .gitignore
#git add readme.md
#git commit -m "first commit"
#git status
#git branch
#git remote add "name-of-remote-repo" "https://<link-to-github-repositry>"
#git remote
#git push <name-of-remote-repo> master

-------------------------------------------------------
3- Install mongodb community and mongosh
https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/
#brew update
#brew tap mongodb/brew
#brew install mongodb-community@5.0
#mongod --config /usr/local/etc/mongod.conf --fork
#ps aux | grep -v grep | grep mongod
user1           32113   0.1  0.2  5530616  27800   ??  S     2:14PM   0:44.47 mongod --config /usr/local/etc/mongod.conf --fork

#npm install mongodb mongoos

-------------------------------
4- Initialize node and install package requirements
#npm init
#npm install express
#npm install babel-cli babel-preset-env babel-preset-stage-0
#npm install body-parser nodemon

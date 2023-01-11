# Welcome to the BidLite README!

BidLite is a web application built to help small scale plumbing companies bid jobs within a matter of seconds. It consists of two main components, the bid machine and user's job list. User's additionally have the ability to add/edit job factors for unique job scenarios.

BidLite was built using PostgreSQL, Node.js, React.js, Express.js, Javascript, CSS, Sequelize and Redux.

The live application can be viewed and tested here: https://bidlite.onrender.com

## BidLite's Creation Story

The genesis of BidLite came from the need for small scale plumbing companies to speed up bid time. As a small scale plumber, more time spent bidding jobs means more time not working at your hourly rate. At the same time, an accurate bid is extremely important because a low bid means there may be no profits on the job and a high bid may mean that the company is not awarded the job.

This is where BidLite may come in handy.

## The Bid Machine

The bid machine gets an average install cost per fixture using all the data entered into the user's job list. This value allows the bid machine to work very quickly with one piece of information, the number of fixtures on the job. As new jobs are entered in the user's job list, the bid machine gets more accurate. It is important to note that the bid machine needs at least 7 jobs to start becoming accurate. Jobs bid before 7 completed jobs have been entered in the user's job list, will not be accurate.

<img src="./frontend/src/images/README_Images/bid_machine.png" alt="BidLite Bid Machine" title="BidLite Bid Machine" />

### Job Factors (Built into the Bid Machine)

Not all jobs and clients are simple and straight forward. The bid machine has an extra feature to account for this. There are four factors that can be quickly turned on/off and updated to account for unique jobs scenarios and help the user produce an accurate bid.

<img src="./frontend/src/images/README_Images/edit_job_factors.png" alt="BidLite Edit Job Factors Modal" title="BidLite Edit Job Factors Modal" />

## The Job List

The user's job list is a place where the user can add new jobs with a title, description, list of fixtures, number of fixtures, job estimate and final job cost. The user can use these columns to help keep track of specifics for each job. Each job is conveniently equipped with an update and delete button allowing the user to fine tunes their list of jobs as they see fit.

<img src="./frontend/src/images/README_Images/jobs_list.png" alt="BidLite Splash Page" title="BidLite Splash Page" />

## Splash Page

<img src="./frontend/src/images/README_Images/splash.png" alt="BidLite Splash Page" title="BidLite Splash Page" />

## Add Job Modal

<img src="./frontend/src/images/README_Images/add_job.png" alt="BidLite Splash Page" title="BidLite Splash Page" />

# Running This App Locally

1. Clone the repo, cd into the backend directory and run "npm install"
2. Create a .env file in the root of your backend directory, refer to the .env.example for reference
3. Create a database user (with createDB) using the same information you wrote inside of your .env file
4. After that you will want to run "npx dotenv sequelize-cli db:migrate" and then "npx dotenv sequelize-cli db:seed:all"
5. While still in your backend directory run "npm start"
6. Open another local terminal and cd into the frontend directory and run "npm install"
7. While still in your frontend directory run "npm start"
8. The app will then open up automatically on localhost:3000

# Technical Implementation Details

Although this is not that tricky, because this app is actually quite simple, the below code block shows how classes are dynamically added and removed for the cool slider buttons in the bid machine. I feel this brings a full experience to the app with a playful transition affect.

```
const toggleFamilyFriend = () => {
    setFamilyFriend(!familyFriend);
    let familyFriendButton = document.getElementById("family-friend-button");
    let familyFriendSlider = document.getElementById("family-friend-slider");
    if (familyFriend) {
      familyFriendButton.classList.remove("active");
      familyFriendSlider.classList.remove("active-slider");
      setFamilyFriendFactor(1);
    } else {
      familyFriendButton.classList.add("active");
      familyFriendSlider.classList.add("active-slider");
      setFamilyFriendFactor(1 - factors.familyFriend / 100);
    }
  };
```

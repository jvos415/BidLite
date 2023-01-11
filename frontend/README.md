# Welcome to the BidLite README!

BidLite is a web application built to help small scale plumbers bid jobs within a matter of seconds. It consists of two main pieces, the bid machine and user's job lists. User's additionally have the ability to add job factors for unique job scenarios.

BidLite was built using PostgreSQL, Node.js, React.js, Express.js, Javascript, CSS and Redux.

The live application can be viewed and tested using the demo user button here: https://bidlite.onrender.com

## BidLite's Creation Story

The genesis of BidLite came from the need for small scale plumbing companies to speed up bid time. As a small scale plumber, more time spent bidding jobs means more time not working at your hourly rate. At the same time, an accurate bid is extremely important because a low bid means there may be no profits on the job and a high bid may mean that the company is not awarded the job.

This is where BidLite really gets to work! BidLite consists of two main parts, the bid machine and the user's job list.

## The Bid Machine

The bid machine takes an average install cost per fixture using all the data entered into the user's job list. This value allows the bid machine to work very quickly with one piece of information, the number of fixtures on the job. As new jobs are entered in the user's job list, the bid machine gets more accurate. It is important to note that the bid machine needs at least 7 jobs to start becoming accurate. Jobs bid before 7 completed jobs are entered in the user's job list will not be accurate.

## Job Factors (Part of the Bid Machine)



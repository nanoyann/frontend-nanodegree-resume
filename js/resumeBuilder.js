// BIO
var bio = {
	name: "John Smith",
	role: "International Spy",
	contacts: {
		mobile: "212 123 1234",
		email: "nano@github.com",
		github: "nanoGit",
		twitter: "nanoTwitt",
		location: "175 5th Ave, New York, NY 10010"
	},
	welcomeMessage: "Hello world!",
	skills: ['HTML', 'CSS', 'JavaScript', 'Boomerang'],
	bioPic: "http://placehold.it/250x200",
	display: function() {
		// basics
		var headerName = HTMLheaderName.replace(/%data%/, bio.name),
			headerRole = HTMLheaderRole.replace(/%data%/, bio.role);
			bioPic = HTMLbioPic.replace(/%data%/, bio.bioPic),
			welcomeMsg = HTMLwelcomeMsg.replace(/%data%/, bio.welcomeMessage);
		$('#header').prepend(headerRole);
		$('#header').prepend(headerName);
		$('#header').append(bioPic);
		$('#header').append(welcomeMsg);
		// contacts
		var mobile = HTMLmobile.replace(/%data%/, bio.contacts.mobile),
			email = HTMLemail.replace(/%data%/, bio.contacts.email),
			twitter = HTMLgithub.replace(/%data%/, bio.contacts.twitter),
			github = HTMLgithub.replace(/%data%/, bio.contacts.github);
		$('#topContacts, #footerContacts').append(mobile);
		$('#topContacts, #footerContacts').append(email);
		$('#topContacts, #footerContacts').append(github);
		$('#topContacts, #footerContacts').append(twitter);
		// skills
		if (bio.skills.length > 0) {
			var skillsNum = bio.skills.length,
				skillsList = '';
			$('#header').append(HTMLskillsStart);
			for (var i = 0; i < skillsNum; i++) {
				skillsList += HTMLskills.replace(/%data%/, bio.skills[i]);
			}
			$('#skills').append(skillsList);
		}
	}
};

bio.display();


// EDUCATION
var education = {
	"schools": [
		{
			name: "Harvard",
			location: "Boston",
			degree: "Masters Degree",
			major: "Philosophy",
			dates: "2001",
			url: "http://havard.edu"
		},
		{
			name: "Princeton Univercity",
			location: "Princeton, NJ 08544",
			degree: "PhD",
			major: "Economics",
			dates: "2007",
			url: "http://princeton.edu"
		}
	],
	"onlineCourses": [
		{
			title: "Font End Development",
			school: "Udacity",
			dates: "2015",
			url: "http://udacity.com"
		}
	],
	display: function() {
		for (var school in education.schools) {
			var currentSchool = education.schools[school],
				schoolName = HTMLschoolName.replace(/%data%/, currentSchool.name),
				schoolDegree = HTMLschoolDegree.replace(/%data%/, currentSchool.degree),
				schoolDates = HTMLschoolDates.replace(/%data%/, currentSchool.dates),
				schoolLocation = HTMLschoolLocation.replace(/%data%/, currentSchool.location),
				schoolMajor = HTMLschoolMajor.replace(/%data%/, currentSchool.major),
				educationList = schoolName + schoolDegree + schoolDates + schoolLocation + schoolMajor;
				$(HTMLschoolStart).appendTo('#education').append(educationList);
		}
		$('#education').append(HTMLonlineClasses);
		for (var online in education.onlineCourses) {
			var currentonline = education.onlineCourses[online],
				onlineTitle = HTMLonlineTitle.replace(/%data%/, currentonline.title),
				onlineSchool = HTMLonlineSchool.replace(/%data%/, currentonline.school),
				onlineDates = HTMLonlineDates.replace(/%data%/, currentonline.dates),
				onlineUrl = HTMLonlineURL.replace(/%data%/, currentonline.url),
				onlineEducationList = onlineTitle + onlineSchool + onlineDates + onlineUrl;
				$(HTMLschoolStart).appendTo('#education').append(onlineEducationList);
		}
	}
};

education.display();


// WORK
var work = {
	"jobs" : [
		{
			employer: "Coffee Lab",
			title: "Barista",
			location: "R. Fradique Coutinho, 1340 - Pinheiros, São Paulo - SP, 05416-001, Brazil",
			dates: "1993",
			description: "I needed some cash to study for the FBI exam."
		},
		{
			employer: "FBI",
			title: "Super Secret Agent",
			location: "23rd, 26 Federal Plaza, New York, NY 10278",
			dates: "1997",
			description: "I could tell you… But I would have to kill you."
		},
		{
			employer: "MI6",
			title: "Double Agent",
			location: "85 Albert Embankment, London SE1 7TP, United Kingdom",
			dates: "2002",
			description: "Killed a bunch of people who wanted to be the masters of the world."
		}
	],
	display: function() {
		for (job in work.jobs) {
			var currentJob = work.jobs[job],
				employer = HTMLworkEmployer.replace(/%data%/, currentJob.employer),
				title = HTMLworkTitle.replace(/%data%/, currentJob.title),
				dates = HTMLworkDates.replace(/%data%/, currentJob.dates),
				loc = HTMLworkLocation.replace(/%data%/, currentJob.location),
				description = HTMLworkDescription.replace(/%data%/, currentJob.description),
				workList = employer + title + dates + loc + description;
			$(HTMLworkStart).appendTo('#workExperience').append(workList);
		}
	}
};

work.display();


// PROJECTS
var projects = {
	"project" : [
		{
			title: "Paper Plane",
			dates: "2005",
			description: "It flew for about 2 meters. It was a great success. I lost it shortly after that.",
			images: [
				"http://placehold.it/300x150",
				"http://placehold.it/300x150",
				"http://placehold.it/300x150"
			]
		},
		{
			title: "Breakfast",
			dates: "2015",
			description: "Steal cut oatmal slightly toasted with coconut oil, slowly cooked in coconut milk, with a cubed organic apple, and some pecans. Served with maple sirup.",
			images: [
				"http://placehold.it/300x150",
				"http://placehold.it/300x150",
				"http://placehold.it/300x150"
			]
		}
	],
	display: function() {
		for (p in projects.project) {
			var currentProject = projects.project[p],
				projectTitle = HTMLprojectTitle.replace(/%data%/, currentProject.title),
				projectDates = HTMLprojectDates.replace(/%data%/, currentProject.dates),
				projectDescription = HTMLprojectDescription.replace(/%data%/, currentProject.description),
				projectImages = '';
				for (i in currentProject.images) {
					projectImages += HTMLprojectImage.replace(/%data%/, currentProject.images[i]);
				}
				formatedProject = projectTitle + projectDates + projectDescription + projectImages;
			$(HTMLprojectStart).appendTo("#projects").append(formatedProject);
		}
	}
};

projects.display();


// GOOGLE MAP
$('#gmap').append(googleMap);

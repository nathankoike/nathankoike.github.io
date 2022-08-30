let body = document.body;

// Set the CSS for the body
body.style.padding = "0px";
body.style.margin = "0px";

const PROJECT_DESCRIPTIONS = {
	"Project::SCRIBE": [
		"https://github.com/nathankoike/project-scribe",
		`<p>
      A Python project that uses Qt for its graphics and allows the user to
      train and run a Tensorflow neural network model to read handwriting
      from any natural language. This started as my senior thesis, but I've
      spent a little time refactoring it and hope to make it significantly
      more useable eventually. The neural network design is in a paper cited
      on the Github page accessible by clicking on the name of the project.
    </p>
    <br>
    <p>
      So far, we have tested this project with pre-standardized Spanish,
      modern (yet not contemporary) German, contemporary Japanese,
      contemporary English, and Nahuatl, all to varying degrees of success
      which is likely due to the complexity of the characters, the size of
      the character set, and the amount of training time.
    </p>`,
	],
	"Shadow of the Ghost: An Analysis of Japanese Cinema": [
		"https://docs.google.com/document/d/1AfubNOfnv7ROGrUE_KnpAkEEYCZgrlGLqPB1Un190aI/edit?usp=sharing",
		`<p>
      This is my senior thesis for Asian Studies. In it, I look at the theory of
      adaptation, using <i> Ghost in the Shell</i> (both the anime movie and
      the Hollywood adaptation) as a case study. I noticed that I often felt
      live-action adaptations were sub-par, in a sense, and I took this as an
      opportunity to take a closer, more analytical look at what might be the
      cause. I felt as though these two films would be a favorable comparison
      due to their visual similarity. While this is a lengthy read (and
      admittedly rather biased), if a brief explanation of the theory of
      adaptation, followed by an analysis of both movies and comparative
      analysis of the previous analyses sounds interesting, then this might be
      worth a read.
    </p>`,
	],
	"UnFuNN: the Unnecessarily Functional Neural Network": [
		"https://github.com/nathankoike/UnFuNN",
		`<p>
      After taking an AI class in my final semester of college (and stupidly
      choosing to write a NN with OOP in Python), I wondered if I could take the
      lessons I learned there and apply them to functional programming. However,
      this time I wanted to open the doors to nearly endless potential (like
      faster processing thanks to the V8 engine for JS), and I resolved to write
      the entire thing in vanilla JS that could be integrated into a backend or
      run client-side. On top of this, I wouldn't repeat my past mistakes. No,
      I would make new ones. This time I did this with as much functional
      programming as possible (read "reasonable"). It's decently fast too! That
      is, as long as you don't drag race it against a framework like Tensorflow,
      or even NumPy. It was a fun experiment (despite its name), and I hope you
      enjoy it too!
    </p>`,
	],
	"Simple Stock": [
		"https://github.com/khalid050/Simple-Stock",
		`<p>
      A JavaScript project (actually, my first JavaScript project) that uses
      React for its frontend and NodeJS for its backend. There are a few quirks
      about this project, likely because this was done for a hackathon and
      needed to interface between both Python and JavaScript, although the
      majority of the project is in JavaScript with just a command line script
      running with Python. Admittedly, this project has not been well
      maintained, so feel free to try it, with the warning that it might not
      work properly or at all.
    </p>`,
	],
};

// CITE: https://stackoverflow.com/questions/1038727/how-to-get-browser-width-using-javascript-code
function getWidth() {
	return Math.max(
		document.body.scrollWidth,
		document.documentElement.scrollWidth,
		document.body.offsetWidth,
		document.documentElement.offsetWidth,
		document.documentElement.clientWidth
	);
}

// Build the template for the navbar
function buildNavbarTemplate() {
	let navbar = document.createElement("DIV");
	navbar.id = "navbar";
	navbar.style.position = "fixed";
	navbar.style.top = "0";
	navbar.style.width = "100%";
	navbar.style.zIndex = "10";
	navbar.style.background = "#1c4587ff";

	return navbar;
}

// Build the about section
function buildAbout(desktop = true) {
	let about = document.createElement("DIV");
	about.id = "about";
	about.style.padding = desktop ? "70px 20px 0px" : "145px 20px 0px";
	if (desktop) about.style.cssFloat = "left";

	let aboutHeader = document.createElement("H2");
	aboutHeader.innerText = "ABOUT ME";

	let aboutImg = document.createElement("IMG");
	aboutImg.src = "images/headshot.jpg";
	aboutImg.style.width = desktop ? "30%" : "80%";
	aboutImg.style.maxWidth = desktop ? "512px" : "80%";
	aboutImg.style.height = "auto";
	aboutImg.style.padding = "20px";

	if (desktop) aboutImg.style.cssFloat = "left";

	let aboutContent = document.createElement("P");
	aboutContent.innerHTML = `
      <br>
      <p>
        I'm a System Analyst / Developer at eWorld and a recent graduate from
        Hamilton College. Though some of my friends might call me DJ SegFault, I
        have a strong theoretical background for Computer Science and a
        particular interest in artificial intelligence, web development, and
        software engineering. I enjoy all kinds of programming, but I'm probably
        most fluent in JavaScript, Python, and C++. I also have knowledge of
        Clojure, Haskell, Rust, and a few others that you can find on my Github,
        linked above.
      </p>
      <br><br>
      <p>
        Aside from Computer Science, I also study Japanese. Though I'm not the
        best, I do have a certification to prove some level of proficiency
        uploaded to my LinkedIn, linked above. Cliché as this sounds, I had a
        truly wonderful and life-changing experience when I studied abroad in
        Kyoto during the Spring semester of 2020. Even with my early departure
        due to a certain global pandemic, I would still say this easily ranks as
        the best semester of my college career. After returning home and living
        with huge time zone differences for a semester, I made my return to "The
        Hill," the place I called my home for the prior two-and-a-half years,
		and graduated on time with a double major in both Computer Science and
		Asian Studies.
      </p>`;

	if (desktop) {
		about.appendChild(aboutHeader);
		about.appendChild(aboutImg);
	} else {
		about.appendChild(aboutImg);
		about.appendChild(aboutHeader);
	}

	about.appendChild(aboutContent);

	return about;
}

// Build the projects section
function buildProjects() {
	let projects = document.createElement("DIV");
	projects.id = "projects";
	projects.style.padding = "20px";
	projects.style.cssFloat = "left";

	// Add a horizontal line
	projects.appendChild(document.createElement("HR"));

	let projectsHeader = document.createElement("H2");
	projectsHeader.innerText = "PROJECTS AND PAPERS";

	let projectsContent = document.createElement("UL");

	// Add the projects to the list
	Object.keys(PROJECT_DESCRIPTIONS).forEach(proj => {
		let project = document.createElement("LI");

		let pj = PROJECT_DESCRIPTIONS[proj];

		project.innerHTML = `<a\
      class="project"
      href="${pj[0]}"\
      target="_blank"> ${proj} </a>
      ${pj[1]}<br>`;

		projectsContent.appendChild(project);
	});

	projects.appendChild(projectsHeader);
	projects.appendChild(projectsContent);

	return projects;
}

// Render the desktop version of the page
function renderDesktop() {
	let desktopRender = document.createElement("div");
	desktopRender.id = "render";

	// Build the navbar
	let navbar = buildNavbarTemplate();

	let navlist = document.createElement("UL");

	let home = document.createElement("SPAN");
	home.innerHTML = `<a class="name"><b>Nate Koike</b></a>`;

	let linkedin = document.createElement("SPAN");
	linkedin.innerHTML = `<a class="navbar"\
    href="https://www.linkedin.com/in/nate-koike/"\
    target="_blank"
    style="right: 0">
      LinkedIn
    </a>`;

	let github = document.createElement("SPAN");
	github.innerHTML = `<a class="navbar"\
    href="https://github.com/nathankoike"\
    target="_blank">Github</a>`;

	let resume = document.createElement("SPAN");
	resume.innerHTML = `<a class="navbar"\
    href="documents/resume.pdf"\
    target="_blank">Résumé</a>`;

	// Finish styling all the elements and add them to the navbar
	[home, linkedin, github, resume].forEach(e => {
		if (e != home) e.style.cssFloat = "right";

		e.style.padding = "0px 20px";

		navlist.appendChild(e);
	});

	navlist.style.margin = "0px";
	navlist.style.padding = "20px 0px";

	navbar.appendChild(navlist);

	desktopRender.appendChild(navbar);

	desktopRender.appendChild(buildAbout());
	desktopRender.appendChild(buildProjects());

	body.appendChild(desktopRender);
}

// Render the mobile version of the page
function renderMobile() {
	let mobileRender = document.createElement("div");
	mobileRender.id = "render";

	let navbar = buildNavbarTemplate();

	// Put name on navbar
	let name = document.createElement("P");
	name.innerHTML = "<b>NATE KOIKE</b>";
	name.className = "name";
	name.style.textAlign = "left";

	// Make menu page
	let menu = document.createElement("DIV");
	menu.id = "menu";
	menu.className = "menu";

	// CITE: https://www.w3schools.com/howto/howto_js_fullscreen_overlay.asp
	menu.style.color = "white";
	menu.style.width = "100%";
	menu.style.height = "0%";
	menu.style.background = "rgba(255, 255, 255, 0)";
	menu.style.display = "block";

	// Populate the menu
	let linkedin = document.createElement("DIV");
	linkedin.innerHTML = `<a class="menu"\
    href="https://www.linkedin.com/in/nate-koike/"\
    target="_blank"
    style="text-align: center; position: relative">
      <b>LinkedIn</b>
    </a>`;

	menu.appendChild(linkedin);

	let github = document.createElement("DIV");
	github.innerHTML = `<a class="menu"\
    href="https://github.com/nathankoike/"\
    target="_blank"
    style="text-align: center; position: relative">
      <b>Github</b>
    </a>`;

	menu.appendChild(github);

	let resume = document.createElement("DIV");
	resume.innerHTML = `<a class="menu"\
    href="documents/resume.pdf"\
    target="_blank"
    style="text-align: center; position: relative">
      <b>Résumé</b>
    </a>`;

	menu.appendChild(resume);

	// Make hamburger icon
	// CITE: https://codepen.io/Danilo06/pen/PoNNvGm
	let hamburger = document.createElement("LABEL");
	hamburger.for = "check";
	hamburger.style.cssFloat = "left";
	hamburger.style.padding = "36px";

	let button = document.createElement("INPUT");
	button.type = "checkbox";
	button.id = "check";

	hamburger.appendChild(button);

	for (let _ = 0; _ < 3; _++) {
		let sp = document.createElement("SPAN");
		sp.className = "ham";
		hamburger.appendChild(sp);
	}

	// Add event listener to hamburegr icon
	hamburger.addEventListener("mouseup", () => {
		menu.style.height = menu.style.height == "0%" ? "100%" : "0%";
		menu.style.background =
			menu.style.background == "rgba(255, 255, 255, 0)"
				? "rgba(255, 255, 255, 100)"
				: "rgba(255, 255, 255, 0)";
	});

	navbar.appendChild(hamburger);
	navbar.appendChild(name);

	mobileRender.appendChild(navbar);
	mobileRender.appendChild(menu);

	mobileRender.appendChild(buildAbout(false));
	mobileRender.appendChild(buildProjects());

	body.appendChild(mobileRender);
}

// Decide which version of the page to render
function render() {
	let rendered = document.getElementById("render");
	if (rendered) rendered.remove();

	// Determine whether to serve a mobile page or a desktop page
	getWidth() < 900 ? renderMobile() : renderDesktop();
}

// Rerender the page on resize
window.onresize = render;

// Render the page
render();

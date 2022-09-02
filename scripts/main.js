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

// CITE: https://stackoverflow.com/questions/11381673/detecting-a-mobile-browser
function getMobile() {
	let check = false;
	(function (a) {
		if (
			/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
				a
			) ||
			/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
				a.substr(0, 4)
			)
		)
			check = true;
	})(navigator.userAgent || navigator.vendor || window.opera);
	return check;
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
        software engineering. While I enjoy all kinds of programming, I'm
		probably most fluent in JavaScript, Python, and C++, but I also have
		knowledge of Clojure, Haskell, Rust, and a few others. This is one of
		those "take me at my word" situations since I've had to hide all of the
		code I wrote in languages other than JS and Python (ignoring the one
		batch/bash project I have). As much as I wish I could share my code and
		versatility as a developer, I am presently unable to do so.
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
	// If the page is desktop, do nothing
	let rendered = document.getElementById("desktop");
	if (rendered) return;

	// If there is a mobile view, remove it
	rendered = document.getElementById("mobile");
	if (rendered) rendered.remove();

	let desktopRender = document.createElement("div");
	desktopRender.id = "desktop";

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
	// If the page is mobile, do nothing
	let rendered = document.getElementById("mobile");
	if (rendered) return;

	// If there is a desktop view, remove it
	rendered = document.getElementById("desktop");
	if (rendered) rendered.remove();

	let mobileRender = document.createElement("div");
	mobileRender.id = "mobile";

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
	// Determine whether to serve a mobile page or a desktop page
	getMobile() || getWidth() < 900 ? renderMobile() : renderDesktop();
}

// Rerender the page on resize
window.onresize = render;

// Render the page
render();

// function er shomoy jei guli duplicate hoise sheguli ekta function e niye gesi jate duplicate kom hoy..
// every object has a prototype.

// class banate gele jei information gulo bar bar repeat hoy , shei repeat information guloke 1 ta jaygay niye jete hoy.

// common class : to write duplicate class property (instructor, developer, jobInstructor) egulo shobai team member
class TeamMember{
    name;
    location;
    constructor (name, location) {
        this.name = name;
        this.location = location;
    }
    provideFeedback() {
        console.log(`${this.name} thank you for your feedback.`);
    }

}

// teammember er shathe relationship build korar jonno (extends) keyword use korte hobe
class Instructor extends TeamMember{
    // name;
    designation = 'Web course Instructor'
    team = 'web team'
    // location;
    
    constructor (name, location) {
        // this.name = name;
        // this.location = location;
        //* ekhane (TeamMember) parent tai parent k call korte hole (super) keyword use korte hoy
        super(name, location);
    }
    
    startSupportSession(time) {
        console.log(`start the support session at ${time}`);
    }
    createQuiz(module) {
        console.log(`please create quiz for module ${module}`);
    }

    // giving feedback
    /*
    provideFeedback() {
        console.log(`${this.name} thank you for your feedback.`);
    }
    */
}


// Another class developer team
class Developer extends TeamMember{
    // name;
    designation = 'Web course Instructor'
    team = 'web team'
    tech;
    // location;
    constructor (name, location, tech) {
        // this.name = name;
        // this.location = location;
        super(name, location);
        this.tech = tech;    
    }
    developFeature(feature) {
        console.log(`Please develop the ${feature}`);
    }
    release(version) {
        console.log(`please release the version ${version}`);
    }

    // giving feedback
    /*
    provideFeedback() {
        console.log(`${this.name} thank you for your feedback.`);
    }
    */
}


// Another class job placement team
class JobPlacement extends TeamMember{
    // name;
    designation = 'Job Placement Commandos'
    team = 'Job Placement'
    region;
    // location;
    constructor (name, location, tech) {
        // this.name = name;
        // this.location = location;
        super(name, location);
        this.region = region;    
    }
    provideResume(feature) {
        console.log(`Please develop the ${feature}`);
    }
    prepareStudent(version) {
        console.log(`please release the version ${version}`);
    }

    // giving feedback
    /*
    provideFeedback() {
        console.log(`${this.name} thank you for your feedback.`);
    }
    */
}

// input given
const alia = new Developer('Alia Bhatt', 'Dhaka', 'React');
console.log(alia);
alia.provideFeedback();
const bipasha = new JobPlacement('bipasa', 'kolkata', 'india');
console.log(bipasha);


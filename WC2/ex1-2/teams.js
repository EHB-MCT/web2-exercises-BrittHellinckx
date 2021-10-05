class Team {
    constructor(teamName, trainer, roster) {
        this.teamName = teamName,
            this.trainer = trainer,
            this.roster = [...roster]
    }
    describe() {
        document.getElementById("team").innerHTML = `
        Meet ${this.teamName}: led by ${this.trainer}, consisting of ${this.roster}`
    }
}

export default Team;
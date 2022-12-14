class TeamMember {
    constructor (salary) {
        this.salary = salary
    }
    getSalary = () => console.log(`Your salary: ${this.salary}`)
}

class Developer extends TeamMember {
    constructor (code, salary) {
        super(salary)
        this.code = code
    }
    coding = () => console.log(this.code);
}


class FrontEndDev extends Developer {
    #level
    constructor(name, lang, framework, level, code, salary) {
        super(code, salary)
        this.name = name
        this.lang = lang
        this.framework = framework
        this.#level = level
        this.occupation = 'Front-end developer'
    }
    
    intro = () => console.log(`Hello! My name is ${this.name}. I'm ${this.occupation}.`);
    sayLevel = () => console.log(this.level);
}

class BackEndDev extends Developer{
    #level
    constructor(name, lang, os, level, code, salary) {
        super(code, salary)
        this.name = name
        this.lang = lang
        this.os = os
        this.#level = level
        this.occupation = 'Backend developer'
    }
    intro = () => console.log(`Hello! My name is ${this.name}. I'm ${this.occupation}.`);
    sayLevel = () => console.log(this.level);
}

class QA extends TeamMember {
    #level
    constructor(name, level, isAutomation, salary) {
        super(salary)
        this.name = name
        this.#level = level
        this.occupation = 'QA Engineer'
        this.isAutomation = isAutomation;
    }
    testing = () => console.log(`A new bug has been opened!`);
    intro = () => console.log(`Hello! My name is ${this.name}. I'm ${this.occupation}.`);
}

class PM extends TeamMember {
    #level
    constructor(name, level, isTechBackground, salary) {
        super(salary)
        this.name = name
        this.#level = level
        this.occupation = 'Project manager'
        this.isTechBackground = isTechBackground
    }
    asking = () => console.log(`What are your statuses?`);
    intro = () => console.log(`Hello! My name is ${this.name}. I'm ${this.occupation}.`);
    sayLevel = () => console.log(this.level);
}

const feDev1 = new FrontEndDev('Mykola', 'Java Script', 'React', 'Middle', `<div class="greeting">Hello, world!</div>`, `4000$`);
const beDev1 = new BackEndDev('Petro', 'Ruby', 'Linux', 'Middle', `<<-SQL
INNER JOIN (#{transfer_receivers_uniq_query}) AS "trs_uniq" ON "trs_uniq"."utps_id" = "utps"."id"
SQL`, `4000$`);
const qa1 = new QA('Stepan', 'Junior', false, `2000$`)
const pm1 = new PM('Vasyl', 'Senior', true, `8000$`)

feDev1.coding();
beDev1.coding();

feDev1.getSalary();
qa1.getSalary();
pm1.getSalary();
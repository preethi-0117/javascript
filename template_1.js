let params = new URLSearchParams(document.location.search);
let index = params.get("index");

let desk=localStorage.getItem("detail")
let converted=JSON.parse(desk)


let resumeObj = converted[index];


document.getElementById("re_name").innerHTML = resumeObj.name
document.getElementById("re_designation").innerHTML = resumeObj.title
document.getElementById("welcome_msg").innerHTML ="Hello!  " + resumeObj.name
document.getElementById("re_objectives").innerHTML = resumeObj.objectives
document.getElementById("re_dob").innerHTML = "Birthday: " +resumeObj.personal_details.dob
document.getElementById("re_contact").innerHTML ="Contact No: " + resumeObj.phone
document.getElementById("re_mail").innerHTML = "Mail id: " +resumeObj.email
document.getElementById("re_address").innerHTML ="Residential Address: " + resumeObj.address
document.getElementById("re_linkedin").innerHTML ="Linkedin id: "+ resumeObj.linkedin



let edu_li = '';

for(let each of resumeObj.education){

    edu_li = edu_li + `
    <li class="time-line-item">
    <span class="badge badge-primary">${each.Year}</span>
    <h6 class="time-line-item-title">${each.course_name}</h6>
    <p class="time-line-item-subtitle">${each.ins_name}</p>
    <p class="time-line-item-content">${each.percentage}
        
    </p>
</li>
                        `

}
document.getElementById('re_education').innerHTML = edu_li

let exp_li = '';

for(let each of resumeObj.experience){

    exp_li = exp_li + `<li class="time-line-item">
    <span class="badge badge-primary">${each.company_name}</span>
    <h6 class="time-line-item-title">${each.role}</h6>
    <p class="time-line-item-subtitle">${each.year_of_experience}</p>
</li> `

}
document.getElementById('re_experience').innerHTML = exp_li

let language_li="";
for (let each of resumeObj.personal_details.languages_known){
    language_li=language_li+ `<p>${each}</p>`
}
document.getElementById('re_languages').innerHTML = language_li


let hobbies_li="";
for (let each of resumeObj.personal_details.hobbies){
    hobbies_li=hobbies_li+ `<p>${each}</p>`
}
document.getElementById('re_hobbies').innerHTML = hobbies_li

let certification_li="";
for (let each of resumeObj.certificates){
    certification_li=certification_li+ `<li><h5 class="service-title">${each.course_name}</h5>
                                        <p class="service-description">${each.year}</p></li>`
}
document.getElementById("re_certification").innerHTML = certification_li

let projects_li="";
for (let each of resumeObj.projects){
    projects_li=projects_li+   `<li ><h5 class="service-title">${each.project_name}</h5>
                                    <p class="service-description">${each.duration}</p>
                                    <p class="service-description">${each.organization}</p>
                                </li>`
}
document.getElementById("re_projects").innerHTML = projects_li





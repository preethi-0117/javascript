let params=new URLSearchParams(document.location.search)
let index=params.get("index")


let resume_item=localStorage.getItem("detail");
let parse_item=JSON.parse(resume_item);
let resumeList=parse_item[index];
console.log(resumeList.name);


document.getElementById("mi_name").innerHTML=resumeList.name
document.getElementById("mi_title").innerHTML=resumeList.title
document.getElementById("mi_mail").innerHTML=resumeList.email
document.getElementById("mi_phone").innerHTML=resumeList.phone
document.getElementById("mi_objectives").innerHTML=resumeList.objectives
document.getElementById("mi_linkedin").innerHTML=resumeList.linkedin
document.getElementById("mi_github").innerHTML=resumeList.github


let education_list=""

for(each of resumeList.education){

    education_list=education_list+`  <div class="item" id="mi_education">
                                     <h4 class="degree">${each.course_name}</h4>
                                     <h5 class="meta">${each.ins_name}</h5>
                                     <div class="time">${each.percentage}</div>
                                     </div><!--//item-->`
}

document.getElementById("mi_education").innerHTML=education_list


let language_list=""

for(each of resumeList.personal_details.languages_known){

    language_list =language_list +`
                      <li> <span class="lang-desc">${each}</span></li>`
            
}
document.getElementById("mi_language").innerHTML=language_list


let hobby_list=""

for(each of resumeList.personal_details.hobbies){

    hobby_list=hobby_list+` <li>${each}</li>`

}
document.getElementById("mi_hobby").innerHTML=hobby_list


let experience_list=""

for(each of resumeList.experience){

    experience_list=experience_list+`<div class="upper-row" id="mi_experience">
                                     <h3 class="job-title">${each.company_name}</h3>
                                     <div class="company">${each.year_of_experience}</div>
                                    </div>`
 }
document.getElementById("mi_experience").innerHTML=experience__list



let project_list=""

for(each of resumeList.projects){

project_list=project_list+`  <div class="intro" id="mi_project">
<p>${each.project_name}</p>
</div>
<!-- //intro--> -->
<div class="item" >
    <span class="project-title">${each.duration}</span> - <span class="project-tagline">A responsive website template designed to help developers launch their software projects. </span>
    
</div>`
}
document.getElementById("mi_project").innerHTML=project_list



let skill_list=""

for(each of resumeList.skills){

    skill_list=skill_list +`
                  <div class="item" id="mi_skills">
                 <h3 class="level-title"></h3>
                 <div class="progress level-bar">
                 <div class="progress-bar theme-progress-bar" role="progressbar" style="width: 99%" aria-valuenow="99" aria-valuemin="0" aria-valuemax="100">${each}</div>
                </div>                               
                 </div><!--//item-->`
    

}
document.getElementById("mi_skills").innerHTML=skill_list









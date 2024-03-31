let params=new URLSearchParams(document.location.search)
let index=params.get("index")


let resume_list=localStorage.getItem("detail");
let parse_list=JSON.parse(resume_list);
let resumearray=parse_list[index];
console.log(resumearray.name);


document.getElementById("name").innerHTML=resumearray.name
document.getElementById("role").innerHTML=resumearray.title
document.getElementById("mail").innerHTML=resumearray.email
document.getElementById("contact").innerHTML=resumearray.phone
document.getElementById("address").innerHTML=resumearray.address
document.getElementById("objectives").innerHTML=resumearray.objectives

let skill_list=""

for (each of resumearray.skills){
        skill_list=skill_list + ` 
        <div class="title" id="skills">
          <p class="bold">skill's</p>
       
        <ul>
          <li>
            <div class="skill_name" id="skills">
              ${each}
            </div>
            <!-- <div class="skill_progress">
              <span style="width: 80%;"></span>
            </div>
            <div class="skill_per">80%</div> -->
          </li>`
    }
    document.getElementById("skills").innerHTML=skill_list


let certify=""
   for (each of resumearray.certificates){
         certify=certify+ 
    `<div class="data">
    <p class="semi-bold">${each.course_name}</p>
    <p>${each.year}</p>
  </div>`}
  document.getElementById("certificat").innerHTML=certify


//   let edu_list=""

// for (let each of resumeObj.education){

//     edu_list= edu_list + `<li class="time-line-item">
//     <span class="badge badge-primary">${each.course_name}</span>
//     <h6 class="time-line-item-title">${each.year}</h6>
//     <p class="time-line-item-subtitle">${each.ins_name}</p>
//     <p class="time-line-item-content">${each.percentage}
        
//     </p>
// </li>`
// }

// document.getElementById("re_education").innerHTML=edu_list

// let proj_list=""

// for (let each of resumeObj.projects){

//     proj_list=proj_list +  `<h5 class="service-title">${each.project_name}</h5>
//                            <p class="service-description">${each.organization}</p>`
// }

// document.getElementById("re_project").innerHTML=proj_list

let exp_list=""

for (let each of resumearray.experience){

    exp_list=exp_list + ` <li>
    <div class="date">${each.company_name}</div>
    <div class="info">
           <p class="semi-bold">${each.year_of_experience}</p> 
   
      </div>
  </li>`
}

document.getElementById("re_experience").innerHTML=exp_list


// let language=""

// for (let each of resumeObj.personal_details.languages_known){

//     language=language +    `<p>${each}</p>`
                           
// }
// document.getElementById("re_language").innerHTML=language


let hobbies=""

for (let each of resumearray.personal_details.hobbies){

  hobbies=hobbies+ ` <li><i class="fas fa-book">${each}</i></li>`
}
document.getElementById("hobby").innerHTML=hobbies
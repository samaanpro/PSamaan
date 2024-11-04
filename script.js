$(document).ready(function() {
    // تحميل المشاريع من ملف JSON
    $.getJSON("data.json", function(data) {
        let projectsHTML = '';
        data.projects.forEach(project => {
            projectsHTML += `
                <div class="project">
                    <img src="${project.image}" alt="${project.name}">
                    <div class="project-overlay">${project.name}</div>
                </div>
            `;
        });
        $('.project-gallery').html(projectsHTML);
    });

    // تحميل المهارات من ملف JSON
    $.getJSON("data.json", function(data) {
        let skillsHTML = '';
        data.skills.forEach(skill => {
            skillsHTML += `
                <div class="skill-item">
                    <img src="${skill.logo}" alt="${skill.name}">
                    <p>${skill.name}</p>
                    <div class="skill-bar" style="width: ${skill.percentage}%"></div>
                </div>
            `;
        });
        $('.skills-list').html(skillsHTML);
    });

    // إرسال البيانات عند الضغط على زر الإرسال
    $('#contact-form').submit(function(e) {
        e.preventDefault();
        alert("Your message has been sent!");
    });
});

<template>
  <div class="resume-content">
    <div class="resume-header">
      <h1>Sunhakoch Techaakarasethi</h1>
      <span>0659577869 sunhakoch.t@gmail.com 8/45 rathburana Bangkok 10140</span>
    </div>
    <div class="resume-body">
      <div class="resume-profile">
        <h2>Profile</h2>
        <p>
          A full stack developer with an experience of
          1 year who had delivered many projects for the company.
          With only a year of experience but gained many kind of
          hard skills and soft skills. I am able to work professionally
          under pressure and manage my working hours efficiently.
        </p>
      </div>
      <div class="resume-skills">
        <h2>Skills</h2>
        <ul class="skill-list">
          <li>PHP</li>
          <li>Node.Js</li>
          <li>Javascript <br> (ES6 and below)</li>
          <li>Restful Api</li>
          <li>GraphQL Api</li>
          <li>Python (3 or below)</li>
          <li>Laravel Framework</li>
          <li>MVC</li>
          <li>OOP</li>
          <li>React</li>
          <li>Mysql</li>
          <li>MongoDB</li>
          <li>Jquery</li>
          <li>Redis</li>
          <li>Memcache</li>
          <li>Authentication (OAuth 2.0)</li>
          <li>Scrum/Agile</li>
        </ul>
      </div>
      <div class="resume-experience">
        <h2>Experience</h2>
          <p style="margin-bottom: 0;">FULL-STACK DEVELOPER,
            DEK-D INTERACTIVE CO.,LTD — 2018–PRESENT</p>
          <p>Key Responsibility</p>
          <ul class="experience-list">
            <li>
              Developed a full stack web application. (selling exam, exam registration)
              <ul>
                <li>Get requirement from another team, setup timeline for project, design the
                  project accordingly to the requirement such as (ER diagram, flow charts,
                  block diagram, etc.), developed the project both in front end, and back end,
                  and test the product.</li>
              </ul>
            </li>
            <li>
              Involved in debugging web application, mobile application, and api service.
            </li>
            <li>
              Design, and developing new feature for web application, mobile application
              and api service.
            </li>
          </ul>
      </div>
      <div class="resume-education">
        <h2>Education</h2>
          <p>Bachelor’s degree in Computer Engineering - 2019
            ( King Mongkut’s University of Technology Thonburi ) <br>
            High School ( Ekamai International School )</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sunhakoch',
};
</script>

<style scoped>
  .resume-content{
    display: block;
    padding: 20px;
    width: 669px;
    margin: 0 auto;
  }
  .resume-header{
    display: block;
    width: 100%;
    margin-bottom: 45px;
  }
  .resume-body{
    display: block;
    width: 100%
  }
  .resume-skills{
    display: block;
    width: 100%;
    height: 200px;
  }
  .skill-list{
    -webkit-column-count: 4;
    -moz-column-count: 4;
    column-count: 4;
  }
</style>

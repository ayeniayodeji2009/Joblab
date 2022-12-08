import React from 'react';
import Navigation from './Navigation';



export default function About(){
  return (
    <section class="about_body">
        {/*errorTest*/}
      <Navigation />
      <header class="about_header">
        <h1 class="about_header_1">ABOUT JOBLAB</h1>
        <p class="about_header_2">Key features of our company</p>
      </header>

      
      <section class="about_features">
      <div class="about_features_point">
      <br />
 <img src="https://th.bing.com/th/id/R.0c9e47578be8eb6314af429932904646?rik=b99bBvutEOEYGg&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_452486.png&ehk=zc7PuCGResvZb5eZvVa%2baafKQ4W0il5%2fAy5gGGr5BKo%3d&risl=&pid=ImgRaw&r=0" width="50%" />
      <br />
      <br />
      <h2>Responsive</h2>
      <p>We give you the very best of job openings across country any where you are.</p>
      </div>

      <div class="about_features_point">
<img src="https://th.bing.com/th/id/OIP.QJLVsg33Pf_a6zLuvWZ5UgHaHZ?pid=ImgDet&rs=1" width="50%" />
      <h2>Passion</h2>
      <p>We are highly committed to serving you every moment.</p>
      </div>

      <div class="about_features_point">
      <img src="https://th.bing.com/th/id/R.0717530695ea175d1ba40fb5e3d6ee51?rik=A5DgMmsLzGJwPw&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_462264.png&ehk=fpU%2btKX4xCk7QFEhLXwzKUdZvb9cEH2mKJiawtDk7L4%3d&risl=&pid=ImgRaw&r=0" width="50%" />
      <h2>Design</h2>
      <p>Our platform is specially structured and design for your use.</p>
      </div>

      <div class="about_features_point">
      <img src="https://www.nepad.org/sites/default/files/styles/485_350/public/resourceimage/1.1_image.jpg?itok=7_Ae5Gvk" width="50%" />
      <h2>Support</h2>
      <p>Adequate and prompt service is also added to the value you our dear customers stand to enjoy any day, any time.</p>
        </div>
      </section>
      
      <section class="team_body">
        <header class="about_header">
        <h1 class="about_header_1">THE TEAM</h1>
        <p class="about_header_2">The ones who runs this company</p>
        </header>

        <section class="team_features">
        <div class="team_features_point">
          <img src="./src/images/man-avater.jpg" width="100%" class="avater"/>
          <div class="team_features_point_info">
          <h2>Ayodeji Ayeni</h2>
          <h6>Front-End Engineer</h6>
          <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
          <div class="team_contact">
            <img src="https://th.bing.com/th/id/R.43f22a3421be3b07740589d711c2ab59?rik=cM%2bcfB2jQ7dhTg&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_184197.png&ehk=Va%2fYeIjZLmJLvbI369LZfU59SmUvg2yPAwdCJk%2bHrDk%3d&risl=&pid=ImgRaw&r=0" width="20%" height="2.5%" />
          <h6>Contact</h6>
          </div>
          </div>
        </div>

          <div class="team_features_point">
          <img src="./src/images/woman-avater.jpg" width="100%" class="avater"/>
          <div class="team_features_point_info">
          <h2>Ayomide Adeshina</h2>
          <h6>Back-End Engineer</h6>
          <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
          <div class="team_contact">
            <img src="https://th.bing.com/th/id/R.43f22a3421be3b07740589d711c2ab59?rik=cM%2bcfB2jQ7dhTg&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_184197.png&ehk=Va%2fYeIjZLmJLvbI369LZfU59SmUvg2yPAwdCJk%2bHrDk%3d&risl=&pid=ImgRaw&r=0" width="20%" height="2.5%"/>
          <h6>Contact</h6>
          </div>
          </div>  
        </div>
        </section>
        
      </section>
    </section>
  )
}
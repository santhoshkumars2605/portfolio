import React from 'react';
import './About.css'
const About=()=>{
    return(
        <>
        <section class="about" id="about">

        <h1 className="heading"> <span>about</span> me </h1>

        <div className="row">

            <div className="info">
                <h3> <span> name : </span> Santhosh Kumar  </h3>
                <h3> <span> age : </span> 20 </h3>
                <h3> <span> qualification : </span> computer scince and engineering </h3>
                <h3> <span> post : </span> Student </h3>
                <h3> <span> Hobbies </span> reading buisness realted books and videos </h3>
                {/* <table>
                    <tr>
                        <td> <a href="Santhosh's Resume.pdf" download ><button class="btn"> download Resume <i class="fas fa-download"></i> </button></a> </td>
                        <td> <a href="Curriculum_vitae.pdf" download ><button class="btn"> download CV <i class="fas fa-download"></i> </button></a> <td>
                    </tr>
                </table> */}
            </div>

            <div className="counter">

                <div className="box">
                    <span>6+</span>
                    <h3>paper presentation</h3>
                </div>

                <div className="box">
                    <span>10+</span>
                    <h3>porjects</h3>
                </div>

                <div className="box">
                    <span>5+</span>
                    <h3>acadamic club member</h3>
                </div>

                <div className="box">
                    <span>8+</span>
                    <h3>coding skills</h3>
                </div>

            </div>

        </div>

        </section>
        </>
    );
}
export default About;
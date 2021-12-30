import { ResumeSvg } from "./StrokeItem"
export const Resume = ()=>{
    return(
        <div id="resume" className="resume p-2 mt-5 text-white mb-5">
            <div className="container" data-aos="fade-up">

                <div className="section-title text-center">
                    <div className="h2">
                        <ResumeSvg/>
                    </div>
                    <p>Wish to build up my career in the organization 
                        where I can enrich my knowledge more and 
                        enjoy the growth of the organization by 
                        devoting my effort and talent to the best.
                    </p>
                </div>

                <div className="row">
                <div className="col-lg-6">
                    <h3 className="resume-title">Profile</h3>
                    <div className="resume-item pb-0">
                    <h4 className="text-vio">Anirban Mukherjee</h4>
                    <p><em>Innovative and deadline-driven Web Designer with good knowledge in designing and developing user friendly websites.</em></p>
                    <p>
                    </p><ul>
                        <li>Andal, Paschim Bardhaman, W.B</li>
                        <li>(+91) 8617476384</li>
                        <li>anirbanmukherjee602@gmail.com</li>
                    </ul>
                    <p></p>
                    </div>

                    <h3 className="resume-title">Education</h3>
                    <div className="resume-item">
                    <h4 className="text-vio">Diploma in Computer Science &amp; Technology</h4>
                    <h5>2016 - 2019</h5>
                    <p><em>Luthfaa Polytechnic Institute</em></p>
                    <p> I had completed my diploma in Computer Science and Technology with 77.8 % from Luthfaa Polytechnic Institute , which is certified by A.I.C.T.E.</p>
                    </div>
                    <div className="resume-item">
                    <h4 className="text-vio">Bachelor of Technology in C.S.E</h4>
                    <h5>2019 - 2022</h5>
                    <p><em>Durgapur Institute of Advanced Technology &amp; Management</em></p>
                    <p> Now I am pursuing B.Tech. in Computer Science and Technology </p>
                    </div>
                </div>
                <div className="col-lg-6">
                    <h3 className="resume-title">Projects</h3>
                    <div className="resume-item">
                    <h4 className="text-vio">Lmail </h4>
                    <h5>Web based mail system</h5>
                    <p><em>using <span className="badge bg-danger mx-1">html</span> 
                                <span className="badge bg-primary mx-1">css</span> 
                                <span className="badge bg-warning text-dark mx-1">javascript</span> 
                                <span className="badge bg-info text-dark">php</span></em></p>
                    <p>
                    </p><ul>
                        <li>It' a Web Based application, So you can access anywhere using browsing supported O.S.</li>
                        <li>Send mail to others.</li>
                        <li>You can Reply or Forward selected mail</li>
                        <li>You have Trash.</li>
                    </ul>
                    <p></p>
                    </div>
                    <div className="resume-item">
                    <h4 className="text-vio">Backdoor</h4>
                    <h5>Remote access Victim pc</h5>
                    <p><em>using <span className="mx-1 badge bg-vio">python</span>
                                <span className="mx-1 badge bg-warning text-dark">pycharm</span></em></p>
                    <p>
                    </p><ul>
                        <li>Backdoor is windows app that provides hidden method for obtaining remote access to a computer or other system.</li>
                        <li>You can auto download to victim system.</li>
                        <li>Control victim system over web or using application</li>
                        <li>It can run cmd command</li>
                    </ul>
                    <p></p>
                    </div>
                </div>
                </div>

            </div>
        </div>
    )
}
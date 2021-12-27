import "../../svg.css";

export const ResumeSvg = ()=>{
    return(
        <h2 className=" ">
                <svg className="svg-txt ">
                    <symbol id="text">
                        <text textAnchor="middle" x="50%" y="50%" >RESUME</text>
                    </symbol>
                    <use xlinkHref="#text"></use>
                </svg>
            </h2>
    )
}
export const ProjectSvg = ()=>{
    return(
        <h2 className="mt-5">
                <svg className="svg-txt text-start">
                    <symbol id="text1">
                        <text textAnchor="middle" x="50%" y="50%">PROJECTS</text>
                    </symbol>
                    <use xlinkHref="#text1"></use>
                </svg>
            </h2>
    )
}
import "../../svg.css";

export const Namaste = (props)=>{
    return(
        <h2 className=" ">
                <svg class="svg-txt text-start">
                    <symbol id="text">
                        <text text-anchor="middle" x="50%" y="50%">{props.tittle} </text>
                    </symbol>
                    <use xlinkHref="#text"></use>
                </svg>
            </h2>
    )
}
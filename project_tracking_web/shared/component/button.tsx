import {DetailedHTMLProps, ButtonHTMLAttributes} from "react"
type buttonType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

interface BtnType{
    type: string,
    btn: string,
}

const Button =(props:BtnType & buttonType)=>{
    return(
            <button type={props?.type} className="block font-semibold w-28 px-4 py-3 mt-8 text-md leading-5 text-center text-primary rounded-lg bg-textwhite">
                {props. btn}
            </button>
    )

}
export default Button;
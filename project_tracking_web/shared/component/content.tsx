import {DetailedHTMLProps, ButtonHTMLAttributes} from "react"
type contentType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
const Content =(props:contentType)=>{
    return(
         <a className="flex items-center justify-center mt-3  text-sm text-black font-semibold hover:underline">{props.value}</a>
         )
}
export default Content;
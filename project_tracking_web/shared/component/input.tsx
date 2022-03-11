import Images from "./Image"
import { ErrorMessage, FieldProps } from "formik"

import React, {DetailedHTMLProps,InputHTMLAttributes} from "react"
type InputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>,HTMLInputElement>;
interface InputData{
icon:StaticImageData;
}

export default function InputField({
    field,
    form:{touched, errors},
    ...props
}:InputData & InputProps &FieldProps)
{
  
    return(
        <div className="relative mt-10">
            <div className='w-14 absolute -left-10 -top-2'>
                <Images sr={props.icon} alt="logo" />
            </div>
            <input 
                {...field} {...props}
            placeholder={props.placeholder} 
            className={`shadow-style w-full px-4 bg-field text-black py-2
             text-sm border rounded-md focus:border-blue-400 
             focus:outline-none focus:ring-1 focus:ring-blue-600 
             ${touched[field.name] && errors[field.name]&&'border-red-500 text-red-600 focus:border-red-500 focus:ring-red-500'}`}
            autoComplete ="off"
            
            />
            <ErrorMessage name={field.name} className='text-red-500 ' component='span'/>
       </div>
        )
}
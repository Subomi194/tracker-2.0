import { InputsItemProps } from "@/types/inputs"


const AuthInputs = ({label, placeholder, name, type, value, customStyles="", onChange,}: InputsItemProps) => {
  return (
    <div>
        <label htmlFor="">{label}</label>
        <input type={type} name={name} placeholder={label}
        className={`border rounded-lg p-4 w-full`} />
  
    </div>
   )
}

export default AuthInputs
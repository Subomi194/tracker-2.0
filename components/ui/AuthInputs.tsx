import { InputsItemProps } from "@/types/inputs"


const AuthInputs = ({label, placeholder, name, type, value, required, customStyles="", onChange,}: InputsItemProps) => {
  return (
    <div>
        <label htmlFor="" className="font-medium">{label}</label>
        <input type={type} name={name} placeholder={label} required={required}
        className={`focus:border focus:border-rose-400 focus:ring-4 focus:ring-rose-200 border rounded-lg p-2 w-full focus:outline-none `} />
  
    </div>
   )
}

export default AuthInputs
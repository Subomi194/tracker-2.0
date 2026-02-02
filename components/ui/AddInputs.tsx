
import { InputsItemProps } from "@/types/inputs"


const AddInputs = ({label, placeholder, type, name, value, onChange, required, defaultValue,  customStyles="",}: InputsItemProps) => {
  return (
    <div>
        <label htmlFor="" className={`text-base font-semibold mb-1`}>{label}</label>
        <input type={type} placeholder={placeholder} name={name} value={value} onChange={onChange} required={required} defaultValue={defaultValue}
        className={`bg-zinc-100 focus:border focus:border-rose-400 focus:ring-4 focus:ring-rose-200 rounded-lg p-2 w-full focus:outline-none ${customStyles}`} />
  
    </div>
   )
}

export default AddInputs
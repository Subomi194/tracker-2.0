
import { InputsItemProps } from "@/types/inputs"


const AddInputs = ({label, placeholder, type, name, value, onChange, customStyles="",}: InputsItemProps) => {
  return (
    <div>
        <label htmlFor="">{label}</label>
        <input type={type} placeholder={placeholder} name={name} value={value} onChange={onChange}
        className={`border rounded-lg p-4 w-full ${customStyles}`} />
  
    </div>
   )
}

export default AddInputs
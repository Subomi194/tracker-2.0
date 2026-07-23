import { InputsItemProps } from "@/types/inputs"

const AddInputs = ({label, placeholder, type, name, value, onChange, required, defaultValue, customStyles="",}: InputsItemProps) => {
    return (
        <div>
            <label htmlFor="" className="text-base font-semibold mb-1 text-ink">{label}</label>
            <input type={type} placeholder={placeholder} name={name} value={value} onChange={onChange} required={required} defaultValue={defaultValue}
                className={`bg-blush-light/40 border border-blush-border focus:border-pink-accent focus:ring-4 focus:ring-blush-light rounded-lg p-2 w-full focus:outline-none text-base ${customStyles}`} />
        </div>
    )
}

export default AddInputs
import { InputsItemProps } from "@/types/inputs"

const AuthInputs = ({label, placeholder, name, type, value, required, customStyles="", onChange,}: InputsItemProps) => {
    return (
        <div>
            <label htmlFor="" className="font-medium text-ink">{label}</label>
            <input type={type} name={name} placeholder={label} required={required}
                className={`focus:border focus:border-pink-accent focus:ring-4 focus:ring-blush-light border border-blush-border rounded-lg p-2 w-full focus:outline-none text-base ${customStyles}`} />
        </div>
    )
}

export default AuthInputs
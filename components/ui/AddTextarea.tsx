type AddInputsProps = {
    label: string;
    placeholder: string;
    rows: number;
    customStyles: string;
    name?: string;
    value?: string;
    defaultValue?: string | number;
}

const AddTextarea = ({label, placeholder, rows, name, value, defaultValue, customStyles}: AddInputsProps) => {
    return (
        <div>
            <label htmlFor="" className="font-bold text-ink">{label}</label>
            <textarea placeholder={placeholder} rows={rows} name={name} defaultValue={defaultValue}
                className={`bg-blush-light/40 border border-blush-border focus:border-pink-accent focus:ring-4 focus:ring-blush-light rounded-lg p-2 w-full focus:outline-none text-base ${customStyles}`}
            >
            </textarea>
        </div>
    )
}

export default AddTextarea
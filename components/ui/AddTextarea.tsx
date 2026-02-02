type AddInputsProps = {
    label: string;
    placeholder: string;
    rows: number;
    customStyles: string;
    name?: string;
    value?: string;

}


const AddTextarea = ({label, placeholder, rows, name, value, customStyles}: AddInputsProps) => {
  return (
    <div>
        <label htmlFor="" className="font-bold">{label}</label>
        <textarea placeholder={placeholder} rows={rows} name={name}
        className={`bg-gray-100 focus:border focus:border-rose-400 focus:ring-4 focus:ring-rose-200 rounded-lg p-2 w-full focus:outline-none ${customStyles}`}
        >
        </textarea> 
  
    </div>
   )
}

export default AddTextarea
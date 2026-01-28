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
        className={`border rounded-lg p-4 w-full ${customStyles}`}
        >
        </textarea> 
  
    </div>
   )
}

export default AddTextarea
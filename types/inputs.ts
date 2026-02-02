export type InputsItemProps = {
    label: string;
    placeholder?: string;
    name?: string;
    type: string;
    customStyles?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
    defaultValue?: string | number;


}
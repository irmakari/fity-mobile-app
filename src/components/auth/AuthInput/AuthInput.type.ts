export type AuthInputProps = {
    value?: string;
    onChange?: (value?: string) => void;
    placeholder?: string;
    label?: string;
    type?: 'password' | 'email' | 'text';
    error?: boolean;
    disabled?: boolean;
    required?: boolean;
};
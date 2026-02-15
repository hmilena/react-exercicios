import ToggleButton from "./ToggleButton";

const ToggleContent = ({ checked, onChange, styleClasses = "", children }) => {
    return (
        <div className="inline-flex gap-2">
            <ToggleButton
                textOn="Mostrar"
                textOff="Esconder"
                checked={checked}
                onChange={onChange}
            />

            {checked && (
                <div className={`py-1.5 ${styleClasses}`}>
                    {children}
                </div>
            )}
        </div>
    );
};

export default ToggleContent;
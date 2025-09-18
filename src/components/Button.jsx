import './Button.css'

function Button({ label, disabled }) {

    const handleClick = () => {
        console.log(label)
    }

    return (
            <button onClick={handleClick} disabled={disabled}>{label}</button>
    )
}

export default Button;
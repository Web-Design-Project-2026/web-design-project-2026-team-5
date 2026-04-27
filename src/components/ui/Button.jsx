import './Button.css'

function Button({
    chilren,
    variant = 'solid', //mapping from figma
    size = 'md', // md | lg | xl
    iconLeading,
    iconTrailing,
    onClick,
    type = 'button',
    disabled = false,
    className = ''
}) {
    return (
        <button
        type= {type}
        onClick = {onClick}
        disabled = {disabled}
        className= {'btn btn--${variant} btn--${size} ${className}'}
        >
            {iconLeading && <span className=''></span>}
        </button>
    )
}
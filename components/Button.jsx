const STYLES = ['btn_primary', 'btn_outline'];
const SIZES = ['btn_md', 'btn_lg'];

function Button({
    children,
    onClick,
    className,
    type,
    buttonStyle,
    buttonSize
}) {
    const styles = {
        btn: 'border border-secondary-text text-secondary-text w-fit text-lg px-10 py-2 transition overflow-hidden',
        btn_primary: 'bg-gradient-to-r from-secondary-text to-secondary-bg text-primary-bg hover:text-secondary-text hover:bg-none',
        btn_outline: 'hover:bg-gradient-to-r from-secondary-text to-secondary-bg hover:text-primary-bg',
        btn_md: {

        },
        btn_lg: {

        }
    };

    const checkButtonStyle = STYLES.includes(buttonStyle) ? styles[buttonStyle] : styles.btn_primary;
    const checkButtonSize = SIZES.includes(buttonSize) ? styles[buttonSize] : styles.btn_md;

    return (
        <button
            type={type}
            onClick={onClick}
            className={`${styles.btn} ${checkButtonStyle} ${checkButtonSize} ${className && className}`}>
            {children}
        </button>
    )
}

export default Button
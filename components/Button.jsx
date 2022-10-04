function Button({
    children,
    onClick,
    className,
    btn_sm,
    btn_lg,
    btn_primary,
    btn_outline
}) {
    return (
        <button
            onClick={onClick}
            className={`border border-secondary-text text-secondary-text hover:bg-gradient-to-r from-secondary-text to-secondary-bg hover:text-primary-bg w-fit text-lg px-10 py-2 transition ${className && className}`}>
            {children}
        </button>
    )
}

export default Button
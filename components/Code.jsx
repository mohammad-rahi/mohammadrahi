function Code({ children, element, open, close, br }) {
    return (
        <>

            {
                open !== false && <code className="italic text-secondary-text text-sm mt-2">
                    &lt;{element}&gt;
                </code>
            }

            {
                children ? <div className="ml-3">{children}</div> : br ? <br /> : null
            }

            {
                close !== false && <code className="italic text-secondary-text text-sm mb-8">
                    &lt;/{element}&gt;
                </code>
            }

            {
                open === false ? br && <br /> : null
            }
        </>
    )
}

export default Code
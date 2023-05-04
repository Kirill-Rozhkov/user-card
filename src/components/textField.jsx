import React, { useState } from "react"
import PropTypes from "prop-types"

const TextField = ({ label, name, onChange, value, error }) => {
    const getInputClasses = () => {
        return "form-control" + (error ? " is-invalid" : "")
    }
    return (
        <div className="mb-4">
            <label htmlFor={name}>{label}</label>
            <input
                type="text"
                name={name}
                id={name}
                onChange={onChange}
                value={value}
                className={getInputClasses()}
            />
            {error && <div className="invalid-feedback">{error}</div>}
        </div>
    )
}
TextField.propTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string,
    error: PropTypes.string
}

export default TextField

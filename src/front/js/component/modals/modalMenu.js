import React, { useState } from "react";

export const ModalMenu = ({ isOpen, onClose, onSave }) => {
    if (!isOpen) return null;

    const [menuName, setMenuName] = useState("");
    const [tablesCount, setTablesCount] = useState("");
    const [otherSection, setOtherSection] = useState("");
    const [sections, setSections] = useState({
        entrantes: false,
        bebidas: false,
        principales: false,
        postres: false,
    });

    const handleSectionChange = (e) => {
        const { id, checked } = e.target;
        setSections({ ...sections, [id]: checked });
    };

    const handleOtherSectionChange = (e) => {
        setOtherSection(e.target.value);
    };

    const handleAddCustomSection = () => {
        if (otherSection && !sections[otherSection]) {
            setSections({ ...sections, [otherSection]: false });
            setOtherSection(""); 
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!menuName || !tablesCount) {
            alert("Por favor, ingrese el nombre del menú y el número de mesas.");
            return;
        };

        const menuData = {
            menuName,
            tablesCount,
            sections,
            otherSection,
        };
        onSave(menuData);
    };

    return (
        <div className="container modal-menusView">
            <div className="modal fade show" tabIndex="-1" style={{ display: "block" }}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Create Menu:</h5>
                            <button type="button" className="btn-close" onClick={onClose}></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="menuName" className="form-label">
                                        Nombre del Menú:
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="menuName"
                                        value={menuName}
                                        onChange={(e) => setMenuName(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="tablesCount" className="form-label">
                                        Número de Mesas:
                                    </label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="tablesCount"
                                        value={tablesCount}
                                        onChange={(e) => setTablesCount(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Secciones del Menú:</label>
                                    {Object.keys(sections).map((section) => (
                                        <div key={section} className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                id={section}
                                                checked={sections[section]}
                                                onChange={handleSectionChange}
                                            />
                                            <label className="form-check-label" htmlFor={section}>
                                                {section.charAt(0).toUpperCase() + section.slice(1)}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                                <div className="input-group mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="otherSection"
                                        value={otherSection}
                                        onChange={handleOtherSectionChange}
                                        placeholder="Agregar otra sección"
                                    />
                                    <button
                                        type="button"
                                        className="btn btn-outline-secondary"
                                        onClick={handleAddCustomSection}
                                    >
                                        Agregar
                                    </button>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" onClick={onClose}>
                                        Cerrar
                                    </button>
                                    <button type="submit" className="btn btn-primary">
                                        Guardar
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

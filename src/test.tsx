import React, { useState, useEffect, useRef } from "react";

const App = () => {
    const dropdownRef = useRef(null);

    // Field data for the first dropdown
    const fieldsData = {
        data: {
            getFields: {
                edges: [
                    {
                        node: {
                            id: "1",
                            label: "Street Address",
                        },
                    },
                    {
                        node: {
                            id: "2",
                            label: "Annual Revenue",
                        },
                    },
                ],
            },
        },
    };

    // Rules data for the second dropdown
    const rulesData = {
        data: {
            getAllRules: {
                edges: [
                    {
                        node: {
                            id: "6627a9efc6b44ae2c1737fba",
                            name: "Static",
                        },
                    },
                    {
                        node: {
                            id: "6627a9efc6b44ae2c1737fbb",
                            name: "Dynamic",
                        },
                    },
                    {
                        node: {
                            id: "6627a9f0c6b44ae2c1737fbc",
                            name: "Prefix",
                        },
                    },
                    {
                        node: {
                            id: "6627a9f0c6b44ae2c1737fbd",
                            name: "Suffix",
                        },
                    },
                ],
            },
        },
    };

    // CRM data for the third dropdown (with parent-child relationships)
    const crmData = {
        data: {
            getCrmMappingSourceListV1: {
                edges: [
                    {
                        node: {
                            id: "crm-1",
                            label: "Account",
                            parentId: null,
                        },
                    },
                    {
                        node: {
                            id: "crm-2",
                            label: "Contact",
                            parentId: "crm-1",
                        },
                    },
                    {
                        node: {
                            id: "crm-3",
                            label: "Email",
                            parentId: "crm-2",
                        },
                    },
                ],
            },
        },
    };

    const [selectedField, setSelectedField] = useState("");
    const [selectedRule, setSelectedRule] = useState("");
    const [selectedCrm, setSelectedCrm] = useState("");
    const [openMenuId, setOpenMenuId] = useState(null);

    // Function to build the tree from flat CRM data based on parentId
    const buildTree = (nodes) => {
        const map = {};
        const roots = [];

        // Create a map of id to node
        nodes.forEach((node) => {
            map[node.id] = { ...node, children: [] };
        });

        // Build the tree structure
        nodes.forEach((node) => {
            if (node.parentId) {
                if (map[node.parentId]) {
                    map[node.parentId].children.push(map[node.id]);
                }
            } else {
                roots.push(map[node.id]);
            }
        });

        return roots;
    };

    const crmNodes = crmData.data.getCrmMappingSourceListV1.edges.map((edge) => edge.node);
    const crmTree = buildTree(crmNodes);

    const handleFieldChange = (e) => {
        setSelectedField(e.target.value);
    };

    const handleRuleChange = (e) => {
        setSelectedRule(e.target.value);
    };

    const handleCrmChange = (label) => {
        setSelectedCrm(label);
    };

    const toggleMenu = (id) => {
        setOpenMenuId((prevId) => (prevId === id ? null : id));
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setOpenMenuId(null);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    // Render the tree as a custom nested menu
    const renderTreeMenu = (nodes) => {
        return (
            <ul className="nested-menu">
                {nodes.map((node, index) => (
                    <li key={`${node.id}-${index}`}>
                        <button
                            className="menu-item"
                            onClick={() => toggleMenu(node.id)}
                        >
                            {node.label}
                        </button>
                        {node.children && node.children.length > 0 && openMenuId === node.id && (
                            <ul className="submenu">{renderTreeMenu(node.children)}</ul>
                        )}
                    </li>
                ))}
            </ul>
        );
    };

    const generateJson = () => {
        const selectedJson = {
            field: selectedField,
            rule: selectedRule,
            crm: selectedCrm,
        };
        console.log(JSON.stringify(selectedJson, null, 2));
    };

    return (
        <div ref={dropdownRef}>
            <h1>Create JSON from Dropdowns</h1>

            {/* First dropdown for Fields */}
            <div>
                <label>Field:</label>
                <select onChange={handleFieldChange}>
                    <option value="">Select Field</option>
                    {fieldsData.data.getFields.edges.map((edge) => (
                        <option key={edge.node.id} value={edge.node.label}>
                            {edge.node.label}
                        </option>
                    ))}
                </select>
            </div>

            {/* Second dropdown for Rules */}
            <div>
                <label>Rule:</label>
                <select onChange={handleRuleChange}>
                    <option value="">Select Rule</option>
                    {rulesData.data.getAllRules.edges.map((edge) => (
                        <option key={edge.node.id} value={edge.node.name}>
                            {edge.node.name}
                        </option>
                    ))}
                </select>
            </div>

            {/* Third dropdown for CRM (tree structure as nested dropdown) */}
            <div>
                <div className="dropdown-container">{renderTreeMenu(crmTree)}</div>

                {/* Display selected value */}
                <div>
                    <h2>Selected CRM Mapping</h2>
                    <p>{selectedCrm}</p>
                </div>

                {/* Add CSS for styling */}
                <style>{`
        .app-container {
          font-family: Arial, sans-serif;
        }
        .dropdown-container {
          display: inline-block;
          position: relative;
        }
        .nested-menu {
          list-style-type: none;
          padding-left: 0;
          margin: 0;
          position: relative;
        }
        .menu-item {
          background-color: #f9f9f9;
          padding: 10px;
          border: 1px solid #ddd;
          display: block;
          width: 200px;
          text-align: left;
          cursor: pointer;
        }
        .submenu {
          display: none;
          position: absolute;
          left: 100%;
          top: 0;
        }
        li:hover > .submenu {
          display: block;
        }
        .menu-item:hover {
          background-color: #ddd;
        }
        .submenu {
          position: relative;
          background: #f9f9f9;
          padding-left: 0;
        }
        `}</style>
            </div>

            {/* Button to generate the JSON */}
            <button onClick={generateJson}>Generate JSON</button>

            {/* Displaying the generated JSON */}
            <div>
                <h2>Generated JSON</h2>
                <pre>{`{
  "field": "${selectedField}",
  "rule": "${selectedRule}",
  "crm": "${selectedCrm}"
}`}</pre>
            </div>
        </div>
    );
};

export default App;

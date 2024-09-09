import React, {useState} from 'react';

const App = () => {
    // State variables for the selected terminal node and root paths
    const [sourceFieldId, setSourceFieldId] = useState('');
    const [sourceRootPath, setSourceRootPath] = useState('');
    const [targetFieldId, setTargetFieldId] = useState('');
    const [targetRootPath, setTargetRootPath] = useState('');
    const [ruleId, setRuleId] = useState('');
    const [jsonData, setJsonData] = useState(null);
    const [expandedNodes, setExpandedNodes] = useState({}); // Track expanded nodes (initially collapsed)
    const [isSourceAllValuesExpanded, setIsSourceAllValuesExpanded] = useState(false); // Control "All Values" for Source
    const [isTargetAllValuesExpanded, setIsTargetAllValuesExpanded] = useState(false); // Control "All Values" for Target

    // Example data for Source, Target, and Rules
    const sourceFieldOptions = {
        "data": {

        }
    };

    const targetFieldOptions = {
        "data": {

        },
    };

    const ruleOptions = {
        "data": {

        },
    };

    // Function to build the tree structure from flat data based on parentId
    const buildTree = (nodes) => {
        const map = {};
        const roots = [];

        // Create a map of nodes by id
        nodes.forEach((node) => {
            map[node.id] = { ...node, children: [] };
        });

        // Iterate again to build the tree structure
        nodes.forEach((node) => {
            if (node.parentId) {
                // If the node has a parentId, attach it to the parent's children
                if (map[node.parentId]) {
                    map[node.parentId].children.push(map[node.id]);
                }
            } else {
                // If no parentId, it's a root node
                roots.push(map[node.id]);
            }
        });

        return roots;
    };

    // Extract nodes from edges for source and target
    const sourceNodes = sourceFieldOptions.data.getFields.edges.map((edge) => edge.node);
    const targetNodes = targetFieldOptions.data.getCrmMappingSourceListV1.edges.map((edge) => edge.node);

    // Build the tree
    const sourceTree = buildTree(sourceNodes);
    const targetTree = buildTree(targetNodes);

    // Toggle expand/collapse state
    const toggleExpand = (id) => {
        setExpandedNodes((prevState) => ({
            ...prevState,
            [id]: !prevState[id],
        }));
    };

    // Recursive function to render the tree structure with toggleable children
    const renderTreeMenu = (nodes = [], onSelect, currentPath = '', parentKey = '') => {
        return (
            <ul className="nested-menu">
                {nodes.map((node, index) => {
                    const newPath = currentPath ? `${currentPath}.${node.id}` : node.id;
                    const uniqueKey = `${parentKey}-${node.id}-${index}`; // Ensure uniqueness of key
                    const isExpanded = expandedNodes[node.id]; // Check if the node is expanded

                    return (
                        <li key={uniqueKey}>
                            <div className="node-container">
                                <button className="menu-item" onClick={() => onSelect(node, newPath)}>
                                    {node.label}
                                </button>
                                {node.children && node.children.length > 0 && (
                                    <button className="expand-button" onClick={() => toggleExpand(node.id)}>
                                        {isExpanded ? '-' : '+'}
                                    </button>
                                )}
                            </div>
                            {isExpanded && node.children && node.children.length > 0 && (
                                <ul className="submenu">{renderTreeMenu(node.children, onSelect, newPath, uniqueKey)}</ul>
                            )}
                        </li>
                    );
                })}
            </ul>
        );
    };

    // Handle selection for Source Field and update root path (based on ID)
    const handleSourceFieldChange = (node, path) => {
        setSourceFieldId(node.id);
        setSourceRootPath(path);
    };

    // Handle selection for Target Field and update root path (based on ID)
    const handleTargetFieldChange = (node, path) => {
        setTargetFieldId(node.id);
        setTargetRootPath(path);
    };

    // Handle rule selection (flat structure)
    const handleRuleChange = (e) => {
        setRuleId(e.target.value);
    };

    // Function to handle JSON generation and POST request
    const generateJson = async () => {
        const payload = {
            fieldId: sourceFieldId,
            // rootPath: sourceRootPath,
            targetFieldId: targetFieldId,
            rootPath: targetRootPath,
            ruleId: ruleId,
        };

        try {
            const response = await fetch('http://localhost:3000/users/generate-json', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            if (response.ok) {
                const data = await response.json();
                setJsonData(data);
                console.log('API Response:', data);
            } else {
                console.error('Error:', response.statusText);
            }
        } catch (error) {
            console.error('Error generating JSON:', error);
        }
    };

    return (
        <div>
            <h1>Create JSON from Dropdowns</h1>

            {/* Source Field Dropdown */}
            <div className="dropdown-container">
                <label>Source Field:</label>
                <div>
                    <button className="menu-item all-values" onClick={() => setIsSourceAllValuesExpanded(!isSourceAllValuesExpanded)}>
                        All Values {isSourceAllValuesExpanded ? '-' : '+'}
                    </button>
                    {isSourceAllValuesExpanded && (
                        <div className="nested-menu-wrapper">
                            {renderTreeMenu(sourceTree, handleSourceFieldChange)}
                        </div>
                    )}
                </div>
            </div>

            <p>Source Root Path: {sourceRootPath}</p>

            {/* Target Field Dropdown */}
            <div className="dropdown-container">
                <label>Target Field:</label>
                <div>
                    <button className="menu-item all-values" onClick={() => setIsTargetAllValuesExpanded(!isTargetAllValuesExpanded)}>
                        All Values {isTargetAllValuesExpanded ? '-' : '+'}
                    </button>
                    {isTargetAllValuesExpanded && (
                        <div className="nested-menu-wrapper">
                            {renderTreeMenu(targetTree, handleTargetFieldChange)}
                        </div>
                    )}
                </div>
            </div>

            <p>Target Root Path: {targetRootPath}</p>

            {/* Rules Dropdown */}
            <div className="dropdown-container">
                <label>Rule:</label>
                <select onChange={handleRuleChange} className="dropdown">
                    <option value="">Select Rule</option>
                    {ruleOptions.data.getAllRules.edges.map((edge) => (
                        <option key={edge.node.id} value={edge.node.id}>
                            {edge.node.name}
                        </option>
                    ))}
                </select>
            </div>

            {/* Button to generate the JSON */}
            <button onClick={generateJson}>Generate JSON</button>

            {/* Display the generated JSON */}
            {jsonData && (
                <div>
                    <h2>Generated JSON</h2>
                    <pre>{JSON.stringify(jsonData, null, 2)}</pre>
                </div>
            )}

            <style>{`
        .dropdown-container {
          margin-bottom: 20px;
        }
        .node-container {
          display: flex;
          align-items: center;
        }
        .menu-item {
          padding: 10px;
          cursor: pointer;
          border: 1px solid #ccc;
          margin-right: 5px;
        }
        .all-values {
          background-color: #e0e0e0;
          border: 1px solid #aaa;
        }
        .expand-button {
          cursor: pointer;
          padding: 10px;
          border: none;
          background-color: transparent;
        }
        .submenu {
          margin-left: 20px;
        }
      `}</style>
        </div>
    );
};

export default App;
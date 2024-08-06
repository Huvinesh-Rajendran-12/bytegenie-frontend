import React from "react";

const FormattedResponse = ({ response }) => {
  const renderTable = (table) => {
    const rows = table
      .split("\n")
      .map((row) => row.trim())
      .filter((row) => row !== "");
    const headers = rows[0]
      .split("|")
      .map((header) => header.trim());
    const data = rows
      .slice(2)
      .map((row) => row.split("|").map((cell) => cell.trim()));

    return (
      <table className="min-w-full bg-white border border-gray-300 shadow-sm rounded-lg overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            {headers.map((header, index) => (
              <th
                key={index}
                className="px-4 py-2 text-left text-sm font-semibold text-gray-700"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={
                rowIndex % 2 === 0 ? "bg-gray-50" : "bg-white"
              }
            >
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className="px-4 py-2 text-sm text-gray-700"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  const renderContent = (content) => {
    const parts = content.split(/((?:\n\* .*?)+)/s);
    return parts.map((part, index) => {
      if (part.startsWith("\n* ")) {
        const items = part
          .split("\n* ")
          .filter((item) => item.trim() !== "");
        return (
          <ul key={index} className="list-disc list-inside mb-4">
            {items.map((item, itemIndex) => (
              <li key={itemIndex} className="text-gray-700 mb-2">
                {item.trim()}
              </li>
            ))}
          </ul>
        );
      } else if (part.startsWith("<table>")) {
        return (
          <div key={index} className="mb-4">
            {renderTable(part)}
          </div>
        );
      } else {
        return (
          <p key={index} className="text-gray-700 mb-4">
            {part.trim()}
          </p>
        );
      }
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      {renderContent(response)}
    </div>
  );
};

export default FormattedResponse;

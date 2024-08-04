import React from "react";

const FormattedResponse = ({ response }) => {
  const { summary, table } = parseResponse(response);

  return (
    <div className="bg-white bg-opacity-10 rounded-lg shadow-md p-6 mb-4">
      <div className="prose max-w-none mb-6">
        {summary.split("\n").map((paragraph, index) => (
          <p key={index} className="mb-2 text-gray-100">
            {paragraph}
          </p>
        ))}
      </div>
      {table && (
        <div className="overflow-x-auto bg-white bg-opacity-5 rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-teal-800 bg-opacity-50">
              <tr>
                {table.headers.map((header, index) => (
                  <th
                    key={index}
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-teal-100 uppercase tracking-wider"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-black bg-opacity-10 divide-y divide-gray-500">
              {table.rows.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    <td
                      key={cellIndex}
                      className="px-6 py-4 whitespace-nowrap text-sm text-gray-200"
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

const parseResponse = (response) => {
  const parts = response.split(
    "Here's a table summarizing the results:",
  );
  const summary = parts[0].trim();
  let table = null;

  if (parts.length > 1) {
    const tableLines = parts[1].trim().split("\n");
    const headers = tableLines[0]
      .split("|")
      .map((h) => h.trim())
      .filter(Boolean);
    const rows = tableLines.slice(2).map((line) =>
      line
        .split("|")
        .map((cell) => cell.trim())
        .filter(Boolean),
    );
    table = { headers, rows };
  }

  return { summary, table };
};

export default FormattedResponse;

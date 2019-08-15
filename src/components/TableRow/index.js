import React from 'react';
import Box from "../Box";

function TableRow() {
    const width = 25;
    return (
        <div className="container">
            {
                () => {
                    const singleRow = [];
                    for(let i = 0 ; i < width ; i++)
                        singleRow.push(<Box/>);
                    return singleRow;
                }
            }
        </div>
    )
}

export default TableRow;
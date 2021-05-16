import React from 'react';
import { OverlayTrigger, Table, Tooltip } from 'react-bootstrap';
import {
  arrayOf, func, instanceOf, number, shape, string, oneOfType
} from 'prop-types';
import './componentsStyle/componentStyle.css';
import { DeleteButton } from './buttons';

const reformatTableStringContentsByKey = (key, table) => {
  if (key === 'date') {
    return table[key].toLocaleDateString('en-US',
      {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
      });
  }
  if (key === 'cost') {
    return `$${table[key]}`;
  }
  if (table[key] === undefined) {
    return '';
  }
  return table[key];
};

const GenericTable = ({
  sortClickHandler,
  tableHeadersMap,
  tableEntries,
  onEntryClick,
  onDeleteButtonClick
}) => (
  <Table responsive striped bordered hover role="grid">
    <thead>
      <tr key={tableHeadersMap.length.toString()}>
        {tableHeadersMap.map((headerRow) => (
          Object.keys(headerRow).map((key) => (
            <OverlayTrigger
              defaultShow={false}
              key={key}
              placement="top"
              delay={{ show: 250 }}
              overlay={(
                <Tooltip style={{ opacity: 0.4, fontSize: 10 }} id={key}>
                  Click to Sort
                </Tooltip>
                )}
            >
              <th className="table-header" onClick={() => sortClickHandler(key)} key={key}>{headerRow[key]}</th>
            </OverlayTrigger>
          ))))}
        <th>Edit/Delete</th>
      </tr>
    </thead>
    <tbody>
      {tableEntries.map((tableRow, i) => (
        <tr key={i.toString()}>
          {tableHeadersMap.map((headerRow) => (
            Object.keys(headerRow).map((keyName) => (
              <td role="gridcell" onClick={() => onEntryClick(tableRow.entryId)} key={keyName}>
                {reformatTableStringContentsByKey(keyName, tableRow)}
              </td>
            ))
          ))}
          {
            <td>
              <DeleteButton onDeleteClick={() => onDeleteButtonClick(tableRow.entryId)} />
            </td>
        }
        </tr>
      ))}
    </tbody>
  </Table>
);

// Genericizing proptypes source
// https://stackoverflow.com/questions/43125319/react-proptypes-arrayof-oneof-shape-a-or-shape-b

GenericTable.propTypes = {
  sortClickHandler: func.isRequired,
  onEntryClick: func.isRequired,
  onDeleteButtonClick: func.isRequired,
  tableHeadersMap: arrayOf(
    oneOfType([
      shape({
        entryId: string,
        date: string,
        title: string,
        description: string,
        performedBy: string,
        cost: string
      }),
      shape({
        entryId: string,
        pictureLocation: string,
        date: string,
        brand: string,
        notes: string,
        yarnWeight: string,
        color: string,
        material: string,
        skeinCount: string,
        lotNumber: string,
        amountRemaining: string,
        cost: string,
      }),
      shape({
        id: string,
        brandName: string,
        flavor: string,
        comments: string,
        stars: string,
        foodType: string
      })
    ])
  ).isRequired,
  tableEntries: arrayOf(
    oneOfType([
      shape({
        entryId: number,
        date: instanceOf(Date),
        title: string,
        description: string,
        performedBy: string,
        cost: number
      }),
      shape({
        entryId: number,
        pictureLocation: string,
        date: instanceOf(Date),
        brand: string,
        notes: string,
        yarnWeight: string,
        color: string,
        material: string,
        skeinCount: number,
        lotNumber: string,
        amountRemaining: number,
        cost: number,
      }),
      shape({
        id: number,
        brandName: string,
        flavor: string,
        comments: string,
        stars: number,
        foodType: string
      })
    ])
  ).isRequired
};

export default GenericTable;

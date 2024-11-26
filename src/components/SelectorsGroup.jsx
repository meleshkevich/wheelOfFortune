import React from 'react';
import { useGlobalContext } from '../context';
import Form from 'react-bootstrap/Form';

function SelectorsGroup() {
  const {
    amountOfSlices,
    spinningWheelSliceList,
    winSliceId,
    setWinSliceId,
    processSliceAmountSelect,
  } = useGlobalContext();

  return (
    <div className="p-2">
      <Form>
        <Form.Group className="mb-3" controlId="selectorsGroup.sliceAmount">
          <Form.Label>Select Slices Amount:</Form.Label>
          <Form.Select
            aria-label="set amount of slices"
            value={amountOfSlices}
            onChange={(e) => processSliceAmountSelect(e.target.value)}
          >
            <option value="10">10</option>
            <option value="12">12</option>
            <option value="14">14</option>
            <option value="16">16</option>
            <option value="18">18</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="selectorsGroup.winId">
          <Form.Label>Select Winner Sector:</Form.Label>
          <Form.Select
            aria-label="set win slice id"
            value={winSliceId}
            onChange={(e) => setWinSliceId(e.target.value)}
          >
            {spinningWheelSliceList.map((slice) => {
              const { id, text } = slice;
              return (
                <option key={id} value={id}>
                  {text}
                </option>
              );
            })}
          </Form.Select>
        </Form.Group>
      </Form>
    </div>
  );
}

export default SelectorsGroup;

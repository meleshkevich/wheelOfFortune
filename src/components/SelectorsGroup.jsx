import React from 'react';
import { useGlobalContext } from '../context';

import Form from 'react-bootstrap/Form';

//TODO: process winID and amountofSlices correctly!!!!

function SelectorsGroup() {
  const {
    amountOfSlices,
    setAmountOfSlices,
    spinningWheelSliceList,
    winSliceId,
    setWinSliceId,
  } = useGlobalContext();
  return (
    <Form>
      <Form.Group className="mb-3" controlId="selectorsGroup.sliceAmount">
        <Form.Label>Slices Amount:</Form.Label>
        <Form.Select
          aria-label="set amount of slices"
          value={amountOfSlices}
          onChange={(e) => setAmountOfSlices(e.target.value)}
        >
          <option value="10">10</option>
          <option value="12">12</option>
          <option value="14">14</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" ccontrolId="selectorsGroup.winId">
        <Form.Label>Winner Slice:</Form.Label>
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
  );
}

export default SelectorsGroup;

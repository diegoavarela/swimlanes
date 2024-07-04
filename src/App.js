import { useState, useRef, useEffect } from "react";
import ColumnHeader from "./components/column-header";
import Card from "./components/card";
import Button from "./components/button";

function App() {
  const [newCard, setCards] = useState(false);
  const [newColumn, setColumn] = useState(false);

  const editColumn = () => {
    setColumn(cards.length === 0);

    setCards(false);

    columnInputRef.current.className =
      "bg-slate-400 text-slate-700 text-base outline-none focus:outline-none rounded-lg pl-2 w-full";
  };

  const columnInputRef = useRef(null);

  const addCard = () => {
    setCards(true);
  };

  var [cards, setNewCards] = useState([]);
  var [columns, setNewColumns] = useState([]);

  var columnAmount = columns.length;

  console.log(columnAmount);

  useEffect(() => {
    setCards(false);
    setColumn(columns.length === 0);
  }, [cards, columns]);

  // Function to handle Enter key press
  const handleEnterPress = (event) => {
    if (event.key === "Enter") {
      // Enter key was pressed
      const newCard = event.target.value; // Example new card
      setNewCards([...cards, newCard]); // Adds newCard to the cards array
      // Add your desired action here
      setCards(false);
    }
  };

  // Function to handle Enter key press
  const handleEnterPressColumn = (event) => {
    if (event.key === "Enter") {
      // Enter key was pressed
      const newColumn = event.target.value; // Example new card

      setNewColumns([...columns, newColumn]); // Adds newCard to the cards array
      // Add your desired action here
      setCards(false);
      setColumn(false);

      columnInputRef.current.className =
        "bg-slate-500 text-slate-50 text-bold outline-none focus:outline-none w-full";
    }
  };

  return (
    <div className="h-screen w-screen bg-slate-800">
      <div className="pt-4 pl-4 bg-slate-800 ">
        {/* si hay columnas */}
        {columnAmount > 0 &&
          columns.map((column, colIndex) => (
            <div>
              key={colIndex}
              className={`p-4 bg-slate-500 text-gray-50 rounded-lg w-[300px] grid grid-cols-${columnAmount}`}
    
              <div className="bg-slate-600 p-2 mt-3 rounded-lg">{column}</div>
              {/* populate the cards of the column */}
              {(cards[colIndex]) && cards[colIndex].map((card, index) => (
                <div key={index} className="bg-slate-600 p-2 mt-3 rounded-lg">
                  {card}
                </div>
              ))}
            </div>
          ))}

        {(columnAmount === 0)  && (
          <ColumnHeader
            columnInputRef={columnInputRef}
            handleEnterPressColumn={handleEnterPressColumn}
            editColumn={editColumn}
          />
        )}
        <div className="w-full mt-2 bg-slate-500 text-slate-50 flex flex-col rounded-lg ">
          <Card handleEnterPress={handleEnterPress} newCard={newCard} />
          {!newColumn && (
            <Button addElement={addCard} align="ml-auto" element="Card" />
          )}
        </div>

        {!newColumn && (
          <Button addElement={addCard} align="mr-auto" element="Column" />
        )}
      </div>
    </div>
  );
}

export default App;

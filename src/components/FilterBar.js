import clsx from "clsx";
import { useEffect, useState } from "react";
import MenuItem from "./utils/MenuItem";

const FilterBar = ({ items, output }) => {
  const [selectedItem, setSelectedItem] = useState(items[0].text);

  useEffect(() => {
    output && output(selectedItem);
  }, [selectedItem, output]);

  return (
    <>
      <section className="flex gap-4">
        {items?.map((item) => (
          <MenuItem
            text={item.text}
            key={item.id}
            className={clsx(
              selectedItem === item.text
                ? "relative before:absolute before:bottom-[-2px] before:h-1 before:w-full before:rounded-lg before:bg-[#00C2FF] text-[#00C2FF]"
                : ""
            )}
            textClassName="!text-[15px]"
            onClick={(e) => setSelectedItem(item.text)}
          />
        ))}
      </section>
    </>
  );
};

export default FilterBar;

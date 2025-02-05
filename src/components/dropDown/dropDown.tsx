import { MouseEvent, useRef } from 'react';
import useShowDropDown from '@/hooks/useShowDropDown';
import DropDownItem from '@/components/dropDown/dropDownItem';
import Image from 'next/image';

type DropDownTypes = {
  menus: string[];
  selectedItem: string;
  onSelectedItem: (menu: string) => void;
};

function DropDown({ menus, selectedItem, onSelectedItem }: DropDownTypes) {
  const ref = useRef(null);
  const [showOptions, setShowOptions] = useShowDropDown(ref, false);
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowOptions(!showOptions);
  };

  return (
    <div ref={ref} className="relative">
      <div>
        <button
          type="button"
          onClick={handleClick}
          className={`flex h-42 w-full items-center justify-between border-2 border-solid border-gray-1 text-left
              ${showOptions ? 'rounded-t-[5px]' : 'rounded-[5px]'}`}>
          <span className="pl-16 text-14">{selectedItem}</span>
          <div className="pr-12">
            <Image
              src={showOptions ? '/icons/UpArrow.svg' : '/icons/DownArrow.svg'}
              alt=""
              width={20}
              height={20}
            />
          </div>
        </button>
      </div>
      {showOptions && (
        <ul className="absolute w-full rounded-b-[5px] border-2 border-solid border-gray-1 bg-white text-14">
          {menus.map((menu) => {
            return (
              <DropDownItem
                key={menu}
                menu={menu}
                onSelectedItem={onSelectedItem}
                setIsClick={setShowOptions}
              />
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default DropDown;

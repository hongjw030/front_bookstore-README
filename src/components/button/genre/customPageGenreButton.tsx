

export type CustomGenreButtonProps = {
  categoryId: string,
  title: string;
  selected: boolean;    
  editMode?: boolean;
  onClick: (e: boolean) => void;
}

function CustomPageGenreButton({
  categoryId,  
  title,  
  selected,
  editMode,
  onClick,
}: CustomGenreButtonProps) {
  const handleClick = () => {
    if (editMode) onClick(!selected);
  };   


  return (
    <button
      className={`whitespace-nowrap rounded-[53px] w-fit h-33 text-13 border flex-center ${
        selected ? 'border-green text-green' : 'border-gray-1'
      } pc:text-14 ${editMode ? 'desktop:hover:border-green desktop:hover:text-green tablet:hover:border-green tablet:hover:text-green' : ''}`}
      onClick={handleClick}>
      <div className="mx-30">{title}</div>
    </button>
  );
}

export default CustomPageGenreButton;

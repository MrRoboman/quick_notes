const Tag = ({name, onClick, onClickX}) => {
    return (
        <div className="inline-block bg-gray-300 px-2 py-1 rounded-full border border-black">
            <button onClick={onClick}>
                {name}
            </button>
            {onClickX && 
                <button className="pl-3" onClick={onClickX}>X</button>
            }
        </div>
    )
}

export default Tag
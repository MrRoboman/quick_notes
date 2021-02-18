const TagDeleteButton = ({
    isSelected,
    onClick,
}) => {
    let className = 'inline-block px-2 py-1 rounded-full rounded-tl-none rounded-bl-none border-l'

    if (isSelected) {
        className += ' bg-gray-500'
    } else {
        className += ' bg-gray-300'
    }

    return <button className={className} onClick={onClick}>X</button>
}

export default TagDeleteButton
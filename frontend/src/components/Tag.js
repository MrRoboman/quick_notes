import TagDeleteButton from './TagDeleteButton'

const Tag = ({
    name,
    isSelected,
    onClick,
    onClickDelete
}) => {
    let className = 'inline-block px-2 py-1 rounded-full'
    className += isSelected ? ' bg-gray-500' : ' bg-gray-300'
    className += onClickDelete ? ' rounded-tr-none rounded-br-none' : ''

    return (
        <>
        <button className={className} onClick={onClick}>{name}</button>
        {onClickDelete && <TagDeleteButton isSelected={isSelected} onClick={onClickDelete} />}
        </>
    )
}

export default Tag
import { useState } from 'react'
import { gql, useQuery } from '@apollo/client'
import Tag from './Tag'

const GET_TAGS = gql`
    {
        tags {
            id
            name
        }
    }
`

const TagsContainer = () => {
    const { loading, error, data } = useQuery(GET_TAGS)
    const [selectedTags, setSelectedTags] = useState({})

    if (loading) return <span>Laoding</span>
    if (error) {
        console.log(error)
        return <span>{'fart'}</span>
    }

    const onClickTag = tagId => {
        setSelectedTags({
            ...selectedTags,
            [tagId]: !selectedTags[tagId]
        })
    }

    return (
        <div className="w-1/3 p-3 border-2 border-black rounded">
            {data.tags.map(tag => (
                <div key={tag.id} className="inline-block mr-2 mb-2">
                    <Tag
                        name={tag.name}
                        isSelected={selectedTags[tag.id]}
                        onClick={() => onClickTag(tag.id)}
                    />
                </div>
            ))}
        </div>
    )
}

export default TagsContainer
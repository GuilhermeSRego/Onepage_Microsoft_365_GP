import './styles.css'

const draggableData = [
    {
        id: '1',
        content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, accusamus quaerat architecto'
    },
    {
        id: '2',
        content: 'Outro Lorem ipsum'
    }
]

const DragAndDrop = () => {

    const handleDragStart = e => {
        e.target.style.opacity = '0.4';

        console.log(e.target)
        e.dataTransfer.setData('text', e.target.id)

    }

    const handleDragEnd = e => {
        e.target.style.opacity = '1';
    }

    const handleDragOver = e => {
        e.preventDefault && e.preventDefault();
        return false;
    }
    
    // const handleDragEnter = e => {
    //     e.target.classList.add('over');
    // }
    
    // const handleDragLeave = e => {
    //     e.target.classList.remove('over');
    // }

    const handleDrop = e => {
        e.preventDefault();

        const data = e.dataTransfer.getData('text')

        e.target.classList.add = 'dropped'
        e.target.appendChild(document.getElementById(data))

    }

    return (
        <div className="drag-and-drop-wrapper">
            <div className="droppable-area">
                { draggableData.map((_, i) => {
                    return (
                        <div 
                            className="droppable-item"
                            onDragOver={e => handleDragOver(e)}
                            // onDragEnter={e => handleDragEnter(e)}
                            // onDragLeave={e => handleDragLeave(e)}
                            onDrop={e => handleDrop(e)}
                            key={i} />
                    )
                }) }
            </div>
            <div className="draggable-area">
                { draggableData.map((item, i) => {
                    return (
                        <div 
                            key={item.id}
                            id={`item-${item.id}`}
                            className="draggable-item"
                            draggable="true"
                            onDragStart={e => handleDragStart(e)}
                            onDragEnd={ e => handleDragEnd(e) }>
                            <p>{ item.content }</p>
                        </div>
                    )
                }) }
            </div>
        </div>
    )
}

export default DragAndDrop
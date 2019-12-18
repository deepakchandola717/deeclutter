import React from 'react';

const data=[
    {title:'Task 1', type:'note', desc:'This is description for task 1', content:'This is some random content for list item1 which is of type note and this is the complete text I have written down regarding it', lastModified:Date()},
    {title:'List 1', type:'list', listType:'checklist', listItems:['item1', 'item2', 'item3', 'item4'], lastModified:Date()},
    {title: 'List 2', type:'list', listType:'bulletList', listItems:[{itemName:'item1', order:0},{itemName:'item2', order:1}], lastModified:Date()},
    {title: 'My Event 1', type:'event', eventDesc:'This is some details regarding event 1', eventDate:'This is the date of event', lastModified:Date()},
    {title:'link list 1', type:'links', linksDesc:'Collection of links on git tutorial', links:['https://link1.com','https://link2.com'], lastModified:Date()},
    {title:'Task 1', type:'note', desc:'This is description for task 1', content:'This is some random content for list item1 which is of type note and this is the complete text I have written down regarding it', lastModified:Date()},
    {title:'List 1', type:'list', listType:'checklist', listItems:['item1', 'item2', 'item3', 'item4'], lastModified:Date()},
    {title: 'List 2', type:'list', listType:'bulletList', listItems:[{itemName:'item1', order:0},{itemName:'item2', order:1}], lastModified:Date()},
    {title: 'My Event 1', type:'event', eventDesc:'This is some details regarding event 1', eventDate:'This is the date of event', lastModified:Date()},
    {title:'link list 1', type:'links', linksDesc:'Collection of links on git tutorial', links:['https://link1.com','https://link2.com'], lastModified:Date()},
    {title:'Task 1', type:'note', desc:'This is description for task 1', content:'This is some random content for list item1 which is of type note and this is the complete text I have written down regarding it', lastModified:Date()},
    {title:'List 1', type:'list', listType:'checklist', listItems:['item1', 'item2', 'item3', 'item4'], lastModified:Date()},
    {title: 'List 2', type:'list', listType:'bulletList', listItems:[{itemName:'item1', order:0},{itemName:'item2', order:1}], lastModified:Date()},
    {title: 'My Event 1', type:'event', eventDesc:'This is some details regarding event 1', eventDate:'This is the date of event', lastModified:Date()},
    {title:'link list 1', type:'links', linksDesc:'Collection of links on git tutorial', links:['https://link1.com','https://link2.com'], lastModified:Date()},
    {title:'Task 1', type:'note', desc:'This is description for task 1', content:'This is some random content for list item1 which is of type note and this is the complete text I have written down regarding it', lastModified:Date()},
    {title:'List 1', type:'list', listType:'checklist', listItems:['item1', 'item2', 'item3', 'item4'], lastModified:Date()},
    {title: 'List 2', type:'list', listType:'bulletList', listItems:[{itemName:'item1', order:0},{itemName:'item2', order:1}], lastModified:Date()},
    {title: 'My Event 1', type:'event', eventDesc:'This is some details regarding event 1', eventDate:'This is the date of event', lastModified:Date()},
    {title:'link list 1', type:'links', linksDesc:'Collection of links on git tutorial', links:['https://link1.com','https://link2.com'], lastModified:Date()},
]


const Display = () => {
    return ( 
        <>
        <div style={{height:'85vh', overflow:'scroll'}}>
        {data.map(item=>{
        return <div style={{border:'solid black 1px', margin:'0.5rem', padding:'1rem'}}><span>{item.title}</span></div>
        })}
        </div>
        </>
     );
}
 
export default Display;
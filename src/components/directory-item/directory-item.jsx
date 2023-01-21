import {DirectoryItemStyle} from './directory-item.styles'

const DirectoryItem=({category})=>{


return (

 <DirectoryItemStyle>
    <div className="background-image" style={{backgroundImage:`url(${category.imageUrl})`}} />
           <div className="body">
             <h2>{category.title}</h2>
             <p>shop now</p>
           </div>
          
           </DirectoryItemStyle> 
)




}

export default DirectoryItem;
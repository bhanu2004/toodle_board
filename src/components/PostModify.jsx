
import {FiEdit3} from 'react-icons/fi';
import {RiDeleteBin5Line} from 'react-icons/ri';
const PostModify = ({setEditPostClicked, handleDelete, handleUpdate, id})=>{
    return(
        <>
        <div className="page-modify-popup">
            <ul>
                <li onClick={()=>{handleUpdate(id); setEditPostClicked(false)}}><FiEdit3 className='page-modify-logo'/> Edit</li>
                <li className='delete-page' onClick={()=>{handleDelete(id); setEditPostClicked(false)}}><RiDeleteBin5Line className='page-modify-logo'/> Delete</li>
            </ul>
        </div>
        
        </>
    )
}
export default PostModify;
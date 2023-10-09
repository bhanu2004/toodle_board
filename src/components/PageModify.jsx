import {FiEdit3} from 'react-icons/fi';
import {RiDeleteBin5Line} from 'react-icons/ri';
const PageModify = ({setEditPageClicked, handleDelete, handleUpdate, id})=>{
    return(
        <>
        <div className="page-modify-popup">
            <ul>
                <li onClick={()=>{handleUpdate(id); setEditPageClicked(false)}}><FiEdit3 className='page-modify-logo'/> Edit</li>
                <li className='delete-page' onClick={()=>{handleDelete(id); setEditPageClicked(false)}}><RiDeleteBin5Line className='page-modify-logo'/> Delete</li>
            </ul>
        </div>
        
        </>
    )
}
export default PageModify;
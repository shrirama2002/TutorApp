/* 
@Component : SideBar named as listitems
@Service : This Component which shows Content of chapters 
@requires : should be rendered from the MainLayout
*/

import React,{ useState } from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import { useNavigate } from 'react-router-dom';

//The side bar in the dashboard
export default function Sidebar() {
  const [view, setView] = useState('allBooks'); // Default view is 'allBooks'

  //navigation 
  const navigate = useNavigate();

  //show all books default
  const handleAllBooks = () => {
    setView('allBooks');
    navigate('/dashboard')
  };

  //handles add new book
  const handleAddBook = () => {
    setView('addBook');
    navigate('/dashboard/addbook');
  };

  
  return (
    <div>
      <React.Fragment>
        {/* List User Profile */}
        <ListItemButton onClick={handleAllBooks}>
          <ListItemIcon>
            <AccountCircleOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="All Books" />
        </ListItemButton>

        {/* List add Books */}
        <ListItemButton onClick={handleAddBook}>
          <ListItemIcon>
            <LibraryBooksOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Add Books" />
        </ListItemButton>
      </React.Fragment>

      {/* Conditionally Render Content based on the state */}
      {/* not implemented for now */}
      <div style={{ marginTop: '20px' }}>
        {view === 'allBooks' ? (
              <></>
        ) : (
          <>
          </>
        )}
      </div>
    </div>
  );
}

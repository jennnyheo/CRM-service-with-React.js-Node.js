// import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import './App.css';
import Customer from './components/Customer';
// import { withStyles, makeStyles } from '@material-ui/core/styles';

///style of the table///
// const StyledTableCell = withStyles((theme) => ({
//   head: {
//     backgroundColor: theme.palette.common.black,
//     color: theme.palette.common.white,
//   },
//   body: {
//     fontSize: 14, 
//   },
// }))(TableCell);

// const StyledTableRow = withStyles((theme) => ({
//   root: {
//     '&:nth-of-type(odd)': {
//       backgroundColor: theme.palette.action.hover,
//     },
//   },
// }))(TableRow);

// const useStyles = makeStyles({
//   table: {
//     minWidth: 700,
//   },
// });

////////// end of style ///////////
function App() {

  const customers = [
    {
    'id': 1,
    'image': 'https://placeimg.com/60/60/1',
    'name': 'jenny1',
    'birthday': '951103',
    'gender': 'female',
    'job' : 'student'
    },
    {
      'id': 2,
      'image': 'https://placeimg.com/60/60/2',
      'name': 'jenny2',
      'birthday': '951103',
      'gender': 'male',
      'job' : 'uiux designer'
    },
    {
      'id': 3,
      'image': 'https://placeimg.com/60/60/3',
      'name': 'jenny3',
      'birthday': '951103',
      'gender': 'female',
      'job' : 'software engineer'
    }

  ]
  return (
    
    <div className="App">
        <div className="tableContainer">
            <div className="table">
              <div>
                    <ul class="headerContainer">
                        <li>Num</li>
                        <li>image</li>
                        <li>name</li>
                        <li>birthday</li>
                        <li>gender</li>
                        <li>job</li>
                    </ul>
              </div>
              <div>
                    {
                      customers.map (customer => {
                          return(
                          <div>
                            <Customer 
                                key={customer.id}
                                id={customer.id}
                                image={customer.image}
                                name={customer.name}
                                birthday={customer.birthday}
                                gender={customer.gender}
                                job={customer.job}
                            />
                          </div> 
                          )
                        })
                    }
              </div>
            </div>  
          </div>
    </div>
  );
};



export default App;
//-- This used to be required for each react component
// import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

//-- Using props (arbitrary inputs)
// const Header = (props) => {
//     return (
//         <div>
//             {/* <h1>Task Tracker</h1> */}
//             <h1>{props.title}</h1>
//         </div>
//     )
// }

//-- Using specific prop input - title
const Header = ({ title, onAdd, showAdd }) => {
    // const onClick = () => {
    //     console.log('Click')
    // }

    return (
        <header className='header'>
            <h1>{title}</h1>

            {/* -- Using inline "css" */}
            {/* <h1 style={{color:'red', backgroundColor:'black'}}>{title}</h1> */}

            {/* -- Using inline "css" variable */}
            {/* <h1 style={headingStyle}>{title}</h1> */}

            {/* -- Create a button */}
            {/* <button className='btn'>Add</button> */}

            {/* -- Apply reusable components */}
            {/* <Button color='green' text='hello 1' />
            <Button color='red'   text='hello 2' />
            <Button color='blue'  text='hello 3' /> */}

            {/* <Button color='green' text='Add' onClick={onClick} /> */}
            <Button
                color={ showAdd ? 'red' : 'green'}
                text={ showAdd ? 'Close' : 'Add' }
                onClick={onAdd}
            />
        </header>
    )
}

// Default props
// . If no value provided for props, the default value will be used
Header.defaultProps = {
    title: 'Task Tracker',
}

// Typechecking with PropTypes
Header.propTypes = {
    title: PropTypes.string.isRequired,
}

//-- CSS variable in JS
//   . Good for dynamic styling
//
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black'
// }

export default Header
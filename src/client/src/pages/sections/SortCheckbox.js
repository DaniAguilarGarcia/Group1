import React, { Component, useState } from 'react'
import {Checkbox,Collapse} from 'antd'

const { Panel } = Collapse;

const browseOptions = [
    { 
        "_id":1,
        "option": "Title"
    },
    { 
        "_id":2,
        "option": "Author"
    },
    { 
        "_id":3,
        "option": "Rating"
    },
    { 
        "_id":4,
        "option": "Price"
    },
    { 
        "_id":5,
        "option": "Date"
    },
]
;

function SortCheckbox(props) {
    
    const [Checked, setChecked] = useState([])

    const handleToggle = (value) => {
        
        const currentIndex = Checked.indexOf(value);
        const newChecked = [...Checked];

        if (currentIndex === -1){
            newChecked.push(value)
        } else {
            newChecked.splice(currentIndex,1)
        }

        setChecked(newChecked)
        props.handleFilters(newChecked)
    }

    const renderCheckboxLists = () => browseOptions.map((value, index) => (
        <React.Fragment key={index}>
            <Checkbox
                onChange = {() => this.handleToggle(value._id)}
                type = "checkbox"
                checked= {Checked.indexOf(value._id) === -1 ? false : true}
            />
            <span>{value.option}</span>
        </React.Fragment>
    ))
    
    return (
            <div>
                <Collapse defaultActiveKey = {['0']}>
                    <Panel header key = "1">
                    {browseOptions.map((value,index)=> (
                        <React.Fragment key={index}>
                            <Checkbox
                                onChange
                                type ="Checkbox"
                                checked
                            />
                            <span>{value.option}</span>
                        </React.Fragment>
                        ))}

                    </Panel>
                </Collapse>

            </div>
        )    
}

export default SortCheckbox;
import React from "react";
import useResources from "./useResources";
const ResourceList = ({resource}) => {
    const resources = useResources(resource);
    const solve = resources.map(record => {
        if(!record.title){
            return (
            <ul><li key={record.id}>{record.name}</li></ul>
            )
        }
        return(
            <ul><li key={record.id}>{record.title}</li></ul>
        )
    })
    return solve;
}    
export default ResourceList;
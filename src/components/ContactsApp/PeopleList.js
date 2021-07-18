
function PeopleList(props){
    const arr = props.data;
    const newList = arr.map((val,key)=>(
        <li key={key}> {val}</li>
    ));
    return(
        <ul>{newList}</ul> 
    );
}
export default PeopleList;
const selectAllCheckboxes = () => {
    let checkboxes = Array.from(document.querySelectorAll('input[type="checkbox"]'));
    let spliced = checkboxes.splice(0, 1);
    if(spliced[0].checked === true){
        checkboxes.forEach((checkbox) => {
            checkbox.checked = true;
        })
    } else if(spliced[0].checked === false){
        checkboxes.forEach((checkbox) => {
            checkbox.checked = false;
        })
    }
}

export default selectAllCheckboxes;
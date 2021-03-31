const styles = `
.consent {
    overflow: hidden;
}

.consent-wrapper-overlay {
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(230, 230, 230, 0.2);
    backdrop-filter: blur(5px);
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.consent-wrapper-content {
    display: inline-block;
    width: 500px;
    max-height: 700px;
    background-color: #fcfcfc;
    box-shadow: rgb(0 0 0 / 20%) 0px 3px 1px -2px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;
    
}

.consent-content {
    margin: 20px 30px;
    background-color: #fcfcfc;    
}

.consent-title {
    padding-top: 10px;
    text-align: center;
    background-color: #fcfcfc;
}

.consent-list {
    max-height: 440px;
    overflow-y: scroll;
    padding-left: 20px;
    padding-right: 20px;
    background-color: rgb(255, 255, 255);
    box-shadow: rgb(0 0 0 / 20%) 0px 3px 1px -2px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;
}

.consent-buttons {
    padding-top: 10px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #fcfcfc;
}

.consent-grid-container {
    display: grid;
    padding-top: 15px;
    padding-bottom: 15px;
    grid-template-columns: 150px 130px auto;
    text-align: center;
    grid-column-gap: 5px;
    align-items: center;
    border-bottom: 1.5px solid black;
    min-height: 30px;
}

.consent-grid-container-sticky {
    padding-top: 12px;
    position: sticky;
    top: 0;
    background-color: rgb(255, 255, 255);
}
.consent-list-checkbox {
    display: grid;
    grid-template-columns: auto 80px;
    align-items: center;
}
#consent-error {
    display: none;
    color: red;
    text-align: center;
}
`

export default styles;
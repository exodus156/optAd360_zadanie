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
    height: 600px;
    background-color: rgb(255, 255, 255);
    box-shadow: rgb(0 0 0 / 20%) 0px 3px 1px -2px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;
    
}

.consent-content {
    margin: 20px 30px;  
}

.consent-title {
    padding-top: 10px;
    text-align: center;
}

.consent-list {
    max-height: 440px;
    overflow-y: scroll;
    padding-left: 20px;
    padding-right: 20px;
    box-shadow: rgb(0 0 0 / 20%) 0px 3px 1px -2px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;
}

.consent-buttons {
    padding-top: 10px;
    display: flex;
    align-items: center;
    justify-content: space-around;
}
`

export default styles;
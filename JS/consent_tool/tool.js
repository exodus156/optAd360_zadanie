import insertCss from './functions/addCSS.js'
import styles from './components/styles.js'
import fetchData from './functions/fetchData.js'

const data = await fetchData('https://optad360.mgr.consensu.org/cmp/v2/vendor-list.json');
const vendors = Object.values(data.vendors);
console.log(vendors);

document.body.className = 'consent';
document.body.innerHTML += `
    <div class="consent-wrapper-overlay">
        <div class="consent-wrapper-content">
            <div class="consent-content">
                <h1 class="consent-title">GDPR consent</h1>
                <form class="consent-form">
                    <ul class="consent-list">
                        
                    </ul>
                    <div class="consent-buttons">
                        <button id="accept" type="submit">Accept</button>
                        <button id="reject">Reject</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
`

insertCss(styles);


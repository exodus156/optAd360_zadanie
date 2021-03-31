import insertCss from './functions/addCSS.js'
import styles from './components/styles.js'
import fetchData from './functions/fetchData.js'
import selectAllCheckboxes from './functions/selectAllCheckboxes.js'

if(document.cookie.length < 14) {
    const data = await fetchData('https://optad360.mgr.consensu.org/cmp/v2/vendor-list.json');
    const vendors = Object.values(data.vendors);

    document.body.className = 'consent';
    document.body.insertAdjacentHTML('afterbegin', `
        <div class="consent-wrapper-overlay" id="consent-widget">
            <div class="consent-wrapper-content">
                <div class="consent-content">
                    <h1 class="consent-title">GDPR consent</h1>
                    <form id="consent-form">
                        <ul class="consent-list">
                            <li class="consent-grid-container consent-grid-container-sticky">
                                <div class="consent-list-name">Nazwa partnera</div>
                                <div class="consent-list-url">Link do polityki prywatności</div>
                                <div class="consent-list-checkbox">
                                    <input type="checkbox" id="select-all"/>
                                    <label for="select-all">Zaznacz wszystkie</label>
                                </div>
                            </li>
                            ${vendors.map((vendor) => {
                                return `<li class="consent-grid-container">
                                    <div class="consent-list-name">${vendor.name}</div>
                                    <div class="consent-list-url"><a href=${vendor.policyUrl}>Polityka prywatności</a></div>
                                    <div class="consent-list-checkbox">
                                        <input type="checkbox" id=${vendor.id} />
                                        <label for=${vendor.id}>Zaznacz</label>
                                    </div>
                                </li>`
                            }).join('')}
                        </ul>
                        <div id="consent-error">
                            <h2>Proszę wybrać conajmniej jednego partnera.</h2>
                        </div>
                        <div class="consent-buttons">
                            <button id="accept" type="submit">Accept</button>
                            <input type="button" onclick="location.href='https://google.com';" value="Reject" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    `)
    insertCss(styles);

    document.getElementById('select-all').onclick = () => {
        selectAllCheckboxes();
    }

    document.getElementById('consent-form').addEventListener('submit', (e) => {
        e.preventDefault();
        let checkedBoxes = Array.from(document.querySelectorAll('input[type=checkbox]:checked'));
        let vendorIDs = checkedBoxes.map(box => {
            return box.id
        });
        let selectAllIndex = vendorIDs.indexOf("select-all");
        if(selectAllIndex === 0){
            vendorIDs.splice(selectAllIndex, 1);
        }
        
        //small validation
        if(checkedBoxes.length === 0){

            document.getElementById('consent-error').style.display = "block";

        } else {
            document.getElementById('consent-error').style.display = "none";

            /* Create cookie expiration date */
            let d = new Date();
            d.setDate(d.getDate() + 1);
            const expires = "expires=" + d.toUTCString();

            /* Create list of accepted vendors */
            const acceptedVendors = vendorIDs.toString();

            document.cookie = "ConsentCookie=" + acceptedVendors + "; " + expires;

            document.body.className = "";
            document.getElementById('consent-widget').style.display = 'none';
        }
    })
}


function renderAccount(accountList) {
    let HTML = '';

    for (let i=0; i<accountList.length; i++) {
        const account = accountList[i];
    
        HTML += `<div class="table-row">
        <div class="cell">${account.month}</div>
        <div class="cell men"></div>
        <div class="cell">${account.income}</div>
        <div class="cell">${account.expense}</div>
        <div class="cell">150.00 Eur</div>
    </div>`;
    }
    // console.log(accountlist);
    
    

    return document.querySelector('.table-content').innerHTML = HTML;
}
// function renderMonths(monthList) {
//     let HTML = '';

//     for (let i=0; i<monthList.length; i++) {
//         const months = monthList[i];
    
//         HTML += `${months}
//        `;
//     }
//     // console.log(accountlist);
    
    

//     return document.querySelector('.men').innerHTML = HTML;
// }
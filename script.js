(
function () {
    const stageElem =  document.querySelector(".stage");
 
    let currentItem; /* js 10 */

    stageElem.addEventListener("click",doorHandler);
    

    
    function doorHandler(e) {
     
        if (currentItem) {  /* js 10 */

            currentItem.classList.remove('door-opened');  /* js 20 */
            
        }

        if (e.target.classList.contains("door-body")) {
           
            e.target.parentNode.classList.add("door-opened");

            currentItem = e.target.parentNode;    /* js 10 */   
        }        
    }


})();
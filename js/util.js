/* replace any obfuscated email addresses with real mailto: links
 *
 * typical usage in HTML markup:
 *  <span class="hideEmail">brian AT cantoni DOT org</span>
 *
 */
//addLoadEvent (function(){
(function(){
    var
      emails = document.getElementsByTagName ('span'),
      n = emails.length,
      i,
      e,
      txtEmail,
      aElem;

    for (i=0; i<n; i++) {
        e = emails[i];
        if (e.className == 'hideEmail' && e.childNodes.length == 1 && e.firstChild.nodeType == 3) {
            txtEmail = emails[i].firstChild.nodeValue;
            txtEmail = txtEmail.replace (/\s+AT\s+/gi, '@');
            txtEmail = txtEmail.replace (/\s*\[AT\]\s*/gi, '@');
            txtEmail = txtEmail.replace (/\s+DOT\s+/gi, '.');
            txtEmail = txtEmail.replace (/\s*\[DOT\]\s*/gi, '.');

            aElem = document.createElement ('a');
            aElem.setAttribute ('href', 'mailto:' + txtEmail);
            aElem.setAttribute ('title', 'Send email to ' + txtEmail);

            aElem.appendChild (document.createTextNode (txtEmail));
            e.removeChild (emails[i].firstChild);
            e.appendChild (aElem);
        }
    }
//});
})();


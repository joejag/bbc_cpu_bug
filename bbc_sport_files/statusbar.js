define(["idcta-v2/idCookie","idcta-v2/id-config","idcta-v2/logger"],function(i,l,s){var t={};function a(i,a){return l.getConfigAsync().then(function(t){var e=a.getNameFromCookie()||t.translation_signedin,n=t.translation_signedin;e&&(n=function(t,e){if(t.length>e)return t.substring(0,e-1)+"…";return t}(e,14)),i.element.className=i.element.className+" idcta-signedin",i.ctaName.innerText=n}).catch(function(t){s.logCaughtError(t)})}return t.Statusbar=function(t){try{if(this.id=null,this.element=null,this.ctaLink=null,this.ctaName=null,n=t,document.getElementById(n.id)&&(n.blq||document.getElementById("idcta-link"))&&(!n.blq||document.getElementById(n["link-id"]))){this.id=t.id,this.element=document.getElementById(t.id),t.blq?(this.ctaLink=document.getElementById(t["link-id"])?document.getElementById(t["link-id"]):this.element.getElementsByTagName("a")[0],this.ctaName=t["name-id"]?document.getElementById(t["name-id"]):this.element.getElementsByTagName("span")[1]):(this.ctaLink=document.getElementById("idcta-link"),this.ctaName=this.element.getElementsByTagName("span")[0]);var e=this;!0===t.publiclyCacheable&&(i.getInstance().hasCookie()?l.getConfigAsync().then(function(t){t.status_url&&e.ctaLink.href!==t.status_url&&(e.ctaLink.href=t.status_url),a(e,i.getInstance())}):l.getConfigAsync().then(function(t){t.signin_url&&(e.ctaLink.href=t.signin_url),e.ctaName.innerText=t.translation_signedout}))}}catch(t){s.logCaughtError(t)}var n},t.updateForAuthorisedState=a,t});
//# sourceMappingURL=statusbar.js.map